param(
  [Parameter(Mandatory = $true)]
  [string]$Host,

  [Parameter(Mandatory = $true)]
  [string]$User,

  [string]$RemotePath = "/var/www/altnix",

  [string]$LocalPath = (Get-Location).Path,

  [string]$KeyPath = "$env:USERPROFILE\.ssh\id_rsa",

  [int]$Port = 22,

  [switch]$Clean,

  [switch]$DryRun
)

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

function Assert-Command {
  param([string]$Name)
  if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
    throw "Comando não encontrado: $Name"
  }
}

Assert-Command "ssh"
Assert-Command "scp"
Assert-Command "tar"

if (-not (Test-Path $LocalPath)) {
  throw "LocalPath não existe: $LocalPath"
}

$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$archiveName = "altnix-site-$timestamp.tgz"
$archivePath = Join-Path $env:TEMP $archiveName

$excludeArgs = @(
  "--exclude=.git",
  "--exclude=.vscode",
  "--exclude=node_modules",
  "--exclude=deploy.ps1"
)

Write-Host "Criando pacote: $archivePath"
if (-not $DryRun) {
  Push-Location $LocalPath
  try {
    & tar @excludeArgs -czf $archivePath .
  } finally {
    Pop-Location
  }
}

$remoteArchive = "/tmp/$archiveName"
$sshArgs = @("-i", $KeyPath, "-p", $Port)
$scpArgs = @("-i", $KeyPath, "-P", $Port)

Write-Host "Enviando pacote para $User@$Host:$remoteArchive"
if (-not $DryRun) {
  & scp @scpArgs $archivePath "$User@$Host:$remoteArchive"
}

$remoteCmds = @()
if ($Clean) {
  $remoteCmds += "rm -rf $RemotePath/*"
}
$remoteCmds += "mkdir -p $RemotePath"
$remoteCmds += "tar -xzf $remoteArchive -C $RemotePath"
$remoteCmds += "rm -f $remoteArchive"

$remoteCommand = $remoteCmds -join " && "

Write-Host "Aplicando no servidor..."
if (-not $DryRun) {
  & ssh @sshArgs "$User@$Host" $remoteCommand
}

Write-Host "Deploy concluído."
