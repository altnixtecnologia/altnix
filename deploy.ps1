param(
  [string]$RepoUrl = "https://github.com/altnixtecnologia/altnix.git",

  [string]$Branch = "main",

  [string]$Message,

  [string]$RepoPath = $PSScriptRoot,

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

Assert-Command "git"

if (-not (Test-Path $RepoPath)) {
  throw "RepoPath não existe: $RepoPath"
}

$repoRoot = $RepoPath
if (-not (Test-Path (Join-Path $repoRoot ".git"))) {
  try {
    $repoRoot = (& git -C $RepoPath rev-parse --show-toplevel).Trim()
  } catch {
    throw "Não encontrei repositório git em $RepoPath"
  }
}

$originUrl = $null
try {
  $originUrl = (& git -C $repoRoot remote get-url origin).Trim()
} catch {
  $originUrl = $null
}

if (-not $originUrl) {
  Write-Host "Configurando remote origin..."
  if (-not $DryRun) {
    & git -C $repoRoot remote add origin $RepoUrl
  }
} elseif ($originUrl -ne $RepoUrl) {
  Write-Host "Atualizando remote origin..."
  if (-not $DryRun) {
    & git -C $repoRoot remote set-url origin $RepoUrl
  }
}

$changes = & git -C $repoRoot status --porcelain
if ($changes) {
  if (-not $Message) {
    $Message = Read-Host "Digite a mensagem do commit"
  }
  if (-not $Message) {
    throw "Mensagem de commit não informada."
  }
  Write-Host "Adicionando arquivos..."
  if (-not $DryRun) {
    & git -C $repoRoot add -A
  }
  Write-Host "Criando commit..."
  if (-not $DryRun) {
    & git -C $repoRoot commit -m $Message
  }
} else {
  Write-Host "Nada para commitar."
}

Write-Host "Enviando para o GitHub..."
if (-not $DryRun) {
  & git -C $repoRoot push origin "HEAD:$Branch"
}

Write-Host "Push concluído."
