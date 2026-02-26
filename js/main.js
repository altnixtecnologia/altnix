document.addEventListener('DOMContentLoaded', () => {
  const i18n = {
    pt: {
      brand_tagline: 'Tecnologia & Segurança',
      nav_about: 'Empresa',
      nav_solutions: 'Soluções',
      nav_mvi: 'Módulo Inteligente',
      nav_bot: 'Bot Teste',
      nav_process: 'Processo',
      nav_contact: 'Contato',
      hero_eyebrow: 'Arquitetura técnica para segurança operacional',
      hero_title: 'Reduza falsos alarmes com verificação visual e resposta em minutos.',
      hero_subtitle: 'Integramos bots, sistemas e monitoramento para decisões rápidas, rastreáveis e comerciais mais eficientes.',
      hero_metric_1: '+X instalações',
      hero_metric_2: 'SLA 24/7',
      hero_metric_3: 'Resposta média em 3 min',
      trust_title: 'Compromissos que geram confiança',
      trust_1_title: 'Processo claro',
      trust_1_body: 'Diagnóstico, implantação e monitoramento sem ruído.',
      trust_2_title: 'Garantia e SLA',
      trust_2_body: 'Atendimento com prazos definidos e acompanhamento ativo.',
      trust_3_title: 'Suporte contínuo',
      trust_3_body: 'WhatsApp direto com equipe técnica e registros claros.',
      trust_4_title: 'Equipe técnica',
      trust_4_body: 'Instalação, manutenção e respostas rápidas no local.',
      speed_title: 'Tempo de resposta impacta receita e segurança',
      speed_body: 'Com triagem automática e encaminhamento técnico, sua operação reduz espera e aumenta taxa de fechamento.',
      speed_badge: 'Métrica interna',
      speed_chip_1: 'Resposta imediata',
      speed_chip_2: '+35% mais vendas',
      speed_chip_3: '-25% menos perda',
      value_title: 'Por que a Altnix',
      value_subtitle: 'Processo técnico objetivo, com foco em estabilidade, rastreabilidade e resultado de negócio.',
      value_1_title: 'Conversão imediata',
      value_1_body: 'A jornada já começa com CTA e bot no site, prontos para fechar.',
      value_2_title: 'Segurança ativa',
      value_2_body: 'Câmeras, alarmes e verificação inteligente com confirmação visual.',
      value_3_title: 'Integração total',
      value_3_body: 'Bots, sistemas e infraestrutura trabalhando no mesmo fluxo.',
      solutions_title: 'Soluções principais',
      solutions_subtitle: 'Soluções integradas para proteger ativos, reduzir falhas operacionais e acelerar atendimento.',
      solution_1_title: 'Informática corporativa',
      solution_1_body: 'Projetos, suporte e manutenção preventiva para ambientes críticos.',
      solution_2_title: 'CFTV e alarmes',
      solution_2_body: 'Instalação, atualização e monitoramento com resposta rápida.',
      solution_3_title: 'Sistemas sob medida',
      solution_3_body: 'Criação de sistemas, integrações e painéis de controle.',
      solution_4_title: 'Bots WhatsApp',
      solution_4_body: 'Captação, triagem e confirmação visual em grupo.',
      mvi_title: 'Módulo de Verificação Inteligente',
      mvi_subtitle: 'Disparos confirmados com rapidez e clareza, direto no WhatsApp.',
      mvi_point_1: 'Confirmação visual de disparos em grupo.',
      mvi_point_2: 'Fluxo inteligente para reduzir falsos alarmes.',
      mvi_point_3: 'Integração com câmeras, alarmes e sistemas.',
      mvi_point_4: 'Histórico e rastreabilidade por ocorrência.',
      mvi_panel_title: 'Integração em tempo real',
      mvi_panel_body: 'Receba alertas, valide imagens e acione equipes com um clique.',
      mvi_panel_tag: 'Operação 24/7',
      segment_title: 'Segmentos atendidos',
      segment_subtitle: 'Começamos com condomínios, mas já prontos para empresas e residências.',
      segment_condo: 'Condomínios',
      segment_company: 'Empresas',
      segment_home: 'Residências',
      segment_tag_1: 'Monitoramento',
      segment_tag_2: 'Automação',
      segment_tag_3: 'WhatsApp',
      bot_title: 'Bot Teste no Site',
      bot_subtitle: 'Fluxo de teste com lógica real de atendimento, triagem e escalonamento.',
      bot_hint: 'Clique em iniciar, informe seu nome e selecione o segmento.',
      bot_start: 'Iniciar teste',
      bot_input_placeholder: 'Digite seu nome',
      bot_input_address_placeholder: 'Digite seu endereço',
      bot_send: 'Enviar',
      bot_status_ready: 'Pronto',
      bot_status_live: 'Online',
      bot_status_connecting: 'Conectando',
      bot_stage_1_title: 'Fale agora',
      bot_stage_1_body: 'Converse no WhatsApp para entender seu cenário.',
      bot_stage_2_title: 'Validar cenário',
      bot_stage_2_body: 'Simule o fluxo e confirme aderência técnica ao seu ambiente.',
      bot_stage_3_title: 'Receber proposta',
      bot_stage_3_body: 'Solicite escopo e investimento com apoio da equipe técnica.',
      process_title: 'Como entregamos',
      process_subtitle: 'Método técnico, direto e mensurável.',
      process_step_1_title: 'Diagnóstico',
      process_step_1_body: 'Mapeamos sua operação e pontos de risco.',
      process_step_1_cta: 'Agendar diagnóstico',
      process_step_2_title: 'Instalação',
      process_step_2_body: 'Projeto e implantação sob medida.',
      process_step_2_cta: 'Solicitar instalação',
      process_step_3_title: 'Monitoramento',
      process_step_3_body: 'Operação contínua com SLA e melhorias constantes.',
      process_step_3_cta: 'Ativar monitoramento',
      faq_title: 'Dúvidas frequentes',
      faq_subtitle: 'Respostas objetivas para decisão rápida e segura.',
      faq_q1: 'Como o investimento é definido?',
      faq_a1: 'O valor é calculado por escopo técnico, integrações e criticidade. A proposta é enviada exclusivamente pelo WhatsApp.',
      faq_q2: 'Qual o prazo de implantação?',
      faq_a2: 'Após diagnóstico, publicamos cronograma por etapa (infraestrutura, integração e validação) e iniciamos a execução.',
      faq_q3: 'Funciona com equipamentos já instalados?',
      faq_a3: 'Sempre que possível, integramos a base existente e ajustamos apenas os pontos críticos de compatibilidade.',
      faq_q4: 'Como funciona o SLA?',
      faq_a4: 'Definimos SLA por criticidade, janela de atendimento e volume de eventos, com registro e rastreabilidade.',
      plans_title: 'Planos sob medida',
      plans_subtitle: 'Investimento e proposta comercial tratados exclusivamente pelo WhatsApp.',
      plan_price_contact: 'Sob consulta',
      plan_cta: 'Falar no WhatsApp',
      plan_1_title: 'Essencial',
      plan_1_feat_1: 'Implantação rápida e orientação inicial.',
      plan_1_feat_2: 'Bot e WhatsApp configurados.',
      plan_1_feat_3: 'Suporte padrão em horário comercial.',
      plan_2_title: 'Profissional',
      plan_2_feat_1: 'Módulo de verificação inteligente.',
      plan_2_feat_2: 'Fluxos por setor e equipe dedicada.',
      plan_2_feat_3: 'SLA estendido e acompanhamento ativo.',
      plan_3_title: 'Enterprise',
      plan_3_feat_1: 'Integrações avançadas e APIs.',
      plan_3_feat_2: 'Operação 24/7 com níveis críticos.',
      plan_3_feat_3: 'Gestão de múltiplas unidades.',
      showcase_title: 'Veja o módulo em ação',
      showcase_subtitle: 'Vídeo curto mostrando validação visual e resposta rápida.',
      showcase_cta: 'Solicitar demo no WhatsApp',
      showcase_tag: 'Vídeo 20–30s',
      showcase_placeholder_title: 'Insira o vídeo de demonstração',
      showcase_placeholder_body: 'Envie o arquivo e substituiremos este espaço pelo vídeo real.',
      cta_title: 'Pronto para elevar segurança e eficiência comercial?',
      cta_subtitle: 'Fale com a equipe técnica no WhatsApp e receba a proposta do seu cenário.',
      cta_button_primary: 'Falar no WhatsApp',
      cta_button_secondary: 'Ver demonstração técnica',
      cta_button_tertiary: 'Solicitar proposta',
      footer_subtitle: 'Tecnologia aplicada à segurança e à conversão.',
      footer_contact: 'Contato',
      footer_social: 'Social',
      footer_legal: 'Legal',
      footer_cnpj_label: 'CNPJ',
      footer_address_label: 'Endereço',
      footer_address_value: 'Rua Exemplo, 123 - Centro, Cidade/UF',
      footer_domain: 'Domínio',
      footer_domain_value: 'altnixtecnologia.info (em breve .com.br)',
      footer_copy: '© 2026 Altnix Tecnologia. Todos os direitos reservados.',
      footer_terms: 'Termos',
      footer_privacy: 'Privacidade',
      cta_whatsapp: 'Falar no WhatsApp',
      cta_demo_now: 'Falar com especialista no WhatsApp',
      cta_test_bot: 'Ver demonstração técnica',
      cta_schedule_demo: 'Solicitar validação técnica',
      cta_buy_now: 'Solicitar proposta',
      cta_talk_team: 'Falar com a equipe',
      bot_msg_hello: 'Olá! Você está no laboratório de experiências da Altnix. Aqui simulamos atendimentos reais com velocidade, clareza e foco em resultado. Para personalizar a demo, qual é o seu nome?',
      bot_msg_prompt: 'Escolha uma opção numerada para simular o atendimento.',
      bot_segment_prompt: 'Antes de simular, qual é o seu segmento?',
      bot_segment_set: 'Segmento definido: {segment}. Agora escolha o atendimento.',
      bot_whatsapp_ask: 'Já posso te chamar no WhatsApp com esses dados?',
      bot_whatsapp_yes: 'Perfeito. Vou te chamar no WhatsApp agora.',
      bot_whatsapp_no: 'Sem problemas. Quer continuar por aqui?',
      bot_reply_human: 'Chamando um especialista agora. Prefere WhatsApp ou ligação?'
    },
    en: {
      brand_tagline: 'Technology & Security',
      nav_about: 'Company',
      nav_solutions: 'Solutions',
      nav_mvi: 'Smart Module',
      nav_bot: 'Bot Test',
      nav_process: 'Process',
      nav_contact: 'Contact',
      hero_eyebrow: 'Technical architecture for operational security',
      hero_title: 'Reduce false alarms with visual verification and faster response.',
      hero_subtitle: 'We integrate bots, systems, and monitoring to deliver faster, traceable decisions and stronger commercial outcomes.',
      hero_metric_1: '+X installations',
      hero_metric_2: '24/7 SLA',
      hero_metric_3: 'Avg response 3 min',
      trust_title: 'Commitments that build trust',
      trust_1_title: 'Clear process',
      trust_1_body: 'Diagnosis, deployment, and monitoring without noise.',
      trust_2_title: 'Warranty & SLA',
      trust_2_body: 'Defined timelines with active follow-up.',
      trust_3_title: 'Continuous support',
      trust_3_body: 'WhatsApp with the technical team and clear records.',
      trust_4_title: 'Technical team',
      trust_4_body: 'Installation, maintenance, and fast on-site response.',
      speed_title: 'Response time directly impacts revenue and security',
      speed_body: 'With automated triage and technical routing, your operation reduces waiting time and improves close rates.',
      speed_badge: 'Internal metric',
      speed_chip_1: 'Immediate response',
      speed_chip_2: '+35% more sales',
      speed_chip_3: '-25% less loss',
      value_title: 'Why Altnix',
      value_subtitle: 'Objective technical delivery focused on stability, traceability, and business performance.',
      value_1_title: 'Immediate conversion',
      value_1_body: 'The journey starts with CTA and bot ready to close.',
      value_2_title: 'Active security',
      value_2_body: 'Cameras, alarms, and smart verification with visual confirmation.',
      value_3_title: 'Full integration',
      value_3_body: 'Bots, systems, and infrastructure working in one flow.',
      solutions_title: 'Core solutions',
      solutions_subtitle: 'Integrated solutions to protect assets, reduce operational failures, and speed up service.',
      solution_1_title: 'Corporate IT',
      solution_1_body: 'Projects, support, and preventive maintenance for critical environments.',
      solution_2_title: 'CCTV & alarms',
      solution_2_body: 'Install, upgrade, and monitoring with fast response.',
      solution_3_title: 'Custom systems',
      solution_3_body: 'System building, integrations, and control panels.',
      solution_4_title: 'WhatsApp bots',
      solution_4_body: 'Lead capture, triage, and group visual confirmation.',
      mvi_title: 'Smart Verification Module',
      mvi_subtitle: 'Confirmed alarms fast and clearly, straight into WhatsApp.',
      mvi_point_1: 'Group visual confirmation of events.',
      mvi_point_2: 'Smart flow to reduce false alarms.',
      mvi_point_3: 'Integration with cameras, alarms, and systems.',
      mvi_point_4: 'History and traceability per incident.',
      mvi_panel_title: 'Real-time integration',
      mvi_panel_body: 'Receive alerts, validate images, and trigger teams with one click.',
      mvi_panel_tag: '24/7 operation',
      segment_title: 'Segments',
      segment_subtitle: 'We start with condominiums, ready for businesses and homes.',
      segment_condo: 'Condominiums',
      segment_company: 'Businesses',
      segment_home: 'Residences',
      segment_tag_1: 'Monitoring',
      segment_tag_2: 'Automation',
      segment_tag_3: 'WhatsApp',
      bot_title: 'Bot Test On Site',
      bot_subtitle: 'A realistic test flow for service logic, triage, and escalation.',
      bot_hint: 'Click start, enter your name, and choose a segment.',
      bot_start: 'Start test',
      bot_input_placeholder: 'Type your name',
      bot_input_address_placeholder: 'Type your address',
      bot_send: 'Send',
      bot_status_ready: 'Ready',
      bot_status_live: 'Online',
      bot_status_connecting: 'Connecting',
      bot_stage_1_title: 'Talk now',
      bot_stage_1_body: 'Chat on WhatsApp to map your scenario.',
      bot_stage_2_title: 'Validate scenario',
      bot_stage_2_body: 'Simulate the flow and confirm technical fit for your environment.',
      bot_stage_3_title: 'Request proposal',
      bot_stage_3_body: 'Get scope and investment with support from our technical team.',
      process_title: 'How we deliver',
      process_subtitle: 'Technical, direct, and measurable method.',
      process_step_1_title: 'Diagnosis',
      process_step_1_body: 'We map your operation and risk points.',
      process_step_1_cta: 'Schedule diagnosis',
      process_step_2_title: 'Installation',
      process_step_2_body: 'Design and deploy a tailored solution.',
      process_step_2_cta: 'Request installation',
      process_step_3_title: 'Monitoring',
      process_step_3_body: 'Continuous operation with SLA and improvements.',
      process_step_3_cta: 'Activate monitoring',
      faq_title: 'Frequently asked questions',
      faq_subtitle: 'Objective answers for fast and safe decisions.',
      faq_q1: 'How is investment defined?',
      faq_a1: 'Pricing is based on technical scope, integrations, and criticality. Proposal is sent exclusively via WhatsApp.',
      faq_q2: 'What is the deployment timeline?',
      faq_a2: 'After diagnosis, we publish a stage-by-stage plan (infrastructure, integration, and validation) and start execution.',
      faq_q3: 'Does it work with installed equipment?',
      faq_a3: 'Whenever possible, we integrate existing infrastructure and adjust only critical compatibility points.',
      faq_q4: 'How does SLA work?',
      faq_a4: 'SLA is defined by criticality, service window, and event volume, with records and traceability.',
      plans_title: 'Tailored plans',
      plans_subtitle: 'Investment and commercial proposal handled exclusively on WhatsApp.',
      plan_price_contact: 'On request',
      plan_cta: 'Chat on WhatsApp',
      plan_1_title: 'Essential',
      plan_1_feat_1: 'Fast deployment and initial guidance.',
      plan_1_feat_2: 'Bot and WhatsApp configured.',
      plan_1_feat_3: 'Standard support during business hours.',
      plan_2_title: 'Professional',
      plan_2_feat_1: 'Smart verification module.',
      plan_2_feat_2: 'Department flows and dedicated team.',
      plan_2_feat_3: 'Extended SLA and active follow-up.',
      plan_3_title: 'Enterprise',
      plan_3_feat_1: 'Advanced integrations and APIs.',
      plan_3_feat_2: '24/7 operation with critical tiers.',
      plan_3_feat_3: 'Multi-site management.',
      showcase_title: 'See the module in action',
      showcase_subtitle: 'Short video showing visual validation and quick response.',
      showcase_cta: 'Request demo on WhatsApp',
      showcase_tag: '20–30s video',
      showcase_placeholder_title: 'Insert the demo video',
      showcase_placeholder_body: 'Send the file and we will replace this area with the real video.',
      cta_title: 'Ready to raise security and commercial efficiency?',
      cta_subtitle: 'Talk to our technical team on WhatsApp and get a proposal for your scenario.',
      cta_button_primary: 'Chat on WhatsApp',
      cta_button_secondary: 'View technical demo',
      cta_button_tertiary: 'Request proposal',
      footer_subtitle: 'Technology applied to security and conversion.',
      footer_contact: 'Contact',
      footer_social: 'Social',
      footer_legal: 'Legal',
      footer_cnpj_label: 'CNPJ',
      footer_address_label: 'Address',
      footer_address_value: 'Example St, 123 - Downtown, City/State',
      footer_domain: 'Domain',
      footer_domain_value: 'altnixtecnologia.info (soon .com.br)',
      footer_copy: '© 2026 Altnix Tecnologia. All rights reserved.',
      footer_terms: 'Terms',
      footer_privacy: 'Privacy',
      cta_whatsapp: 'Chat on WhatsApp',
      cta_demo_now: 'Talk to a specialist on WhatsApp',
      cta_test_bot: 'View technical demo',
      cta_schedule_demo: 'Request technical validation',
      cta_buy_now: 'Request proposal',
      cta_talk_team: 'Talk to the team',
      bot_msg_hello: 'Welcome to Altnix. This is our experience lab: real‑world simulations with speed, clarity, and focus on results. To personalize the demo, what is your name?',
      bot_msg_prompt: 'Choose a numbered option to simulate the service.',
      bot_segment_prompt: 'Before simulating, what is your segment?',
      bot_segment_set: 'Segment selected: {segment}. Now choose the service.',
      bot_whatsapp_ask: 'Can I contact you on WhatsApp with these details?',
      bot_whatsapp_yes: 'Great. I will contact you on WhatsApp now.',
      bot_whatsapp_no: 'No problem. Do you want to continue here?',
      bot_reply_human: 'Connecting you to a specialist. WhatsApp or call?'
    }
  };

  const menus = {
    pt: {
      main: [
        { key: 'menu_pizza', label: '1 - Pizzas artesanais' },
        { key: 'menu_burger', label: '2 - Hambúrgueres' },
        { key: 'menu_bebida', label: '3 - Bebidas e extras' },
        { key: 'checkout', label: '4 - Ver carrinho / finalizar' }
      ],
      whatsapp_consent: [
        { key: 'consent_yes', label: '1 - Sim, pode chamar' },
        { key: 'consent_no', label: '2 - Não agora' },
        { key: 'consent_home', label: '3 - Voltar ao menu' },
        { key: 'consent_end', label: '4 - Encerrar atendimento' }
      ],
      pizza_menu: [
        { key: 'pizza_calabresa', label: '1 - Pizza Calabresa | R$ 49,90 | 30 min' },
        { key: 'pizza_frango', label: '2 - Pizza Frango c/ Catupiry | R$ 54,90 | 35 min' },
        { key: 'pizza_margherita', label: '3 - Pizza Margherita | R$ 47,90 | 28 min' },
        { key: 'back', label: '4 - Voltar' }
      ],
      burger_menu: [
        { key: 'burger_classico', label: '1 - Burger Clássico | R$ 29,90 | 18 min' },
        { key: 'burger_bacon', label: '2 - Burger Bacon Duplo | R$ 36,90 | 22 min' },
        { key: 'burger_veg', label: '3 - Burger Veggie | R$ 31,90 | 20 min' },
        { key: 'back', label: '4 - Voltar' }
      ],
      bebida_menu: [
        { key: 'bebida_refri', label: '1 - Refrigerante 2L | R$ 12,00 | 0 min' },
        { key: 'bebida_suco', label: '2 - Suco natural 500ml | R$ 11,00 | 2 min' },
        { key: 'bebida_agua', label: '3 - Água sem gás 500ml | R$ 5,00 | 0 min' },
        { key: 'back', label: '4 - Voltar' }
      ],
      quantidade_menu: [
        { key: 'qty_1', label: '1 - Quantidade 1' },
        { key: 'qty_2', label: '2 - Quantidade 2' },
        { key: 'qty_3', label: '3 - Quantidade 3' },
        { key: 'back', label: '4 - Voltar ao cardápio' }
      ],
      checkout_menu: [
        { key: 'set_delivery', label: '1 - Tipo de entrega' },
        { key: 'set_payment', label: '2 - Forma de pagamento' },
        { key: 'confirm_order', label: '3 - Confirmar compra' },
        { key: 'home', label: '4 - Continuar comprando' }
      ],
      delivery_menu: [
        { key: 'delivery', label: '1 - Entrega (taxa R$ 8,90 | +20 min)' },
        { key: 'pickup', label: '2 - Retirada no balcão (sem taxa)' },
        { key: 'back', label: '3 - Voltar' },
        { key: 'home', label: '4 - Menu principal' }
      ],
      payment_menu: [
        { key: 'pix', label: '1 - PIX (5% desconto)' },
        { key: 'card', label: '2 - Cartão (crédito/débito)' },
        { key: 'cash', label: '3 - Dinheiro na entrega' },
        { key: 'back', label: '4 - Voltar' }
      ],
      pos_pedido_menu: [
        { key: 'track_order', label: '1 - Acompanhar status do pedido' },
        { key: 'new_order', label: '2 - Fazer novo pedido' },
        { key: 'human_food', label: '3 - Falar com atendente' },
        { key: 'home', label: '4 - Voltar ao menu principal' }
      ]
    },
    en: {
      main: [],
      whatsapp_consent: [],
      pizza_menu: [],
      burger_menu: [],
      bebida_menu: [],
      quantidade_menu: [],
      checkout_menu: [],
      delivery_menu: [],
      payment_menu: [],
      pos_pedido_menu: []
    }
  };

  menus.en = menus.pt;

  const segments = {
    pt: {
      condominio: {
        title: 'Condomínios',
        body: 'Monitoramento inteligente, confirmação visual e resposta rápida para reduzir riscos.'
      },
      empresa: {
        title: 'Empresas',
        body: 'Infra e segurança integrada para operações críticas e equipes distribuídas.'
      },
      residencia: {
        title: 'Residências',
        body: 'Proteção discreta e conectada, com alertas confiáveis no WhatsApp.'
      }
    },
    en: {
      condominio: {
        title: 'Condominiums',
        body: 'Smart monitoring, visual confirmation, and fast response to reduce risks.'
      },
      empresa: {
        title: 'Businesses',
        body: 'Integrated IT and security for critical operations and distributed teams.'
      },
      residencia: {
        title: 'Residences',
        body: 'Discrete, connected protection with reliable WhatsApp alerts.'
      }
    }
  };

  const headerEl = document.querySelector('.site-header');
  const logoImg = document.querySelector('.brand img');
  const i18nEls = document.querySelectorAll('[data-i18n]');
  const langButtons = document.querySelectorAll('[data-lang]');
  const segmentButtons = document.querySelectorAll('[data-segment]');
  const segmentTitle = document.getElementById('segment-panel-title');
  const segmentBody = document.getElementById('segment-panel-body');

  const botFeed = document.getElementById('bot-feed');
  const botStatus = document.getElementById('bot-status');
  const botStart = document.getElementById('bot-start');
  const botReset = document.getElementById('bot-reset');
  const botInputWrap = document.getElementById('bot-input-wrap');
  const botInput = document.getElementById('bot-input');
  const botSend = document.getElementById('bot-send');
  const menuButtons = Array.from(document.querySelectorAll('[data-bot-index]'));
  const revealTargets = document.querySelectorAll(
    '.card, .stage-card, .step, .segment-panel, .mvi-panel, .hero-card, .bot-shell, .cta-card, .trust-item, .faq-item, .plan-card, .showcase-card'
  );

  let currentLang = localStorage.getItem('altnix-lang') || 'pt';
  const whatsAppNumber = '5548991004780';
  let botStarted = false;
  let currentMenu = 'main';
  let menuStack = [];
  const botState = {
    userName: null,
    cart: [],
    pendingItem: null,
    orderId: null,
    deliveryType: null,
    paymentMethod: null,
    address: null,
    deliveryFee: 0,
    estimatedMinutes: 0,
    whatsSummary: null,
    afterConsent: null,
    orderConfirmed: false
  };
  const statusTimers = [];
  let inputMode = null;
  let inputAfter = null;
  const addressDefaults = {
    pt: 'Rua das Inovações, 120 - Centro',
    en: 'Rua das Inovações, 120 - Centro'
  };

  const foodCatalog = {
    pizza_calabresa: { nome: 'Pizza Calabresa (8 fatias)', preco: 49.9, tempo: 30 },
    pizza_frango: { nome: 'Pizza Frango c/ Catupiry (8 fatias)', preco: 54.9, tempo: 35 },
    pizza_margherita: { nome: 'Pizza Margherita (8 fatias)', preco: 47.9, tempo: 28 },
    burger_classico: { nome: 'Burger Clássico', preco: 29.9, tempo: 18 },
    burger_bacon: { nome: 'Burger Bacon Duplo', preco: 36.9, tempo: 22 },
    burger_veg: { nome: 'Burger Veggie', preco: 31.9, tempo: 20 },
    bebida_refri: { nome: 'Refrigerante 2L', preco: 12, tempo: 0 },
    bebida_suco: { nome: 'Suco natural 500ml', preco: 11, tempo: 2 },
    bebida_agua: { nome: 'Água sem gás 500ml', preco: 5, tempo: 0 }
  };

  const updateHeaderOffset = () => {
    if (!headerEl) {
      return;
    }
    const height = headerEl.offsetHeight;
    document.documentElement.style.setProperty('--header-offset', `${height}px`);
  };

  const applyI18n = (lang) => {
    i18nEls.forEach((el) => {
      const key = el.dataset.i18n;
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    document.documentElement.lang = lang === 'en' ? 'en-US' : 'pt-BR';
  };

  const updateLangButtons = (lang) => {
    langButtons.forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  };

  const setSegment = (key) => {
    const content = segments[currentLang][key];
    if (!content) {
      return;
    }
    segmentButtons.forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.segment === key);
    });
    segmentTitle.textContent = content.title;
    segmentBody.textContent = content.body;
  };

  const setBotStatus = (key) => {
    botStatus.textContent = i18n[currentLang][key] || key;
  };

  const t = (pt, en) => (currentLang === 'pt' ? pt : en);

  const formatTemplate = (text, vars) => {
    if (!text) {
      return text;
    }
    return text.replace(/\{(\w+)\}/g, (_, key) => (vars && vars[key] ? vars[key] : ''));
  };

  const segmentLabels = {
    pt: {
      condominio: 'Condomínio',
      empresa: 'Empresa',
      residencia: 'Residência',
      geral: 'Geral'
    },
    en: {
      condominio: 'Condominium',
      empresa: 'Business',
      residencia: 'Residence',
      geral: 'General'
    }
  };

  const getSegmentLabel = () => {
    const key = botState.segment || 'geral';
    return (segmentLabels[currentLang] && segmentLabels[currentLang][key]) || key;
  };

  const clearStatusTimers = () => {
    statusTimers.forEach((id) => clearTimeout(id));
    statusTimers.length = 0;
  };

  const setMenu = (menuKey, opts = {}) => {
    const { push = false, reset = false } = opts;
    if (reset) {
      menuStack = [];
    }
    if (push) {
      menuStack.push(currentMenu);
    }
    const items = (menus[currentLang] && menus[currentLang][menuKey]) || [];
    currentMenu = menuKey;
    menuButtons.forEach((btn, idx) => {
      const item = items[idx];
      if (!item) {
        btn.style.display = 'none';
        btn.dataset.action = '';
        return;
      }
      btn.style.display = 'inline-flex';
      btn.textContent = item.label;
      btn.dataset.action = item.key;
    });
  };

  const setMenuButtonsVisible = (isVisible) => {
    menuButtons.forEach((btn) => {
      btn.classList.toggle('is-hidden', !isVisible);
    });
  };

  const goBack = () => {
    const prev = menuStack.pop() || 'main';
    setMenu(prev, { push: false });
  };

  const getOptionLabel = (actionKey) => {
    const options = (menus[currentLang] && menus[currentLang][currentMenu]) || [];
    const match = options.find((option) => option.key === actionKey);
    return match ? match.label : actionKey;
  };

  const appendMessage = (text, who, muted) => {
    const msg = document.createElement('div');
    msg.className = `msg msg--${who}${muted ? ' msg--muted' : ''}`;
    msg.textContent = text;
    botFeed.appendChild(msg);
    botFeed.scrollTop = botFeed.scrollHeight;
  };

  const resetBot = () => {
    botFeed.innerHTML = '';
    botStarted = false;
    botState.userName = null;
    botState.cart = [];
    botState.pendingItem = null;
    botState.orderId = null;
    botState.deliveryType = null;
    botState.paymentMethod = null;
    botState.address = null;
    botState.deliveryFee = 0;
    botState.estimatedMinutes = 0;
    botState.whatsSummary = null;
    botState.afterConsent = null;
    botState.orderConfirmed = false;
    menuStack = [];
    clearStatusTimers();
    setBotStatus('bot_status_ready');
    setMenu('main', { reset: true });
    setMenuButtonsVisible(false);
    botStart.classList.remove('is-hidden');
    hideInput();
    appendMessage('Clique em iniciar, informe seu nome e escolha os itens do cardápio.', 'bot', true);
  };

  const queueMessages = (messages) => {
    let delay = 0;
    messages.forEach((message) => {
      delay += 600;
      setTimeout(() => {
        appendMessage(message.text, message.who, message.muted);
      }, delay);
    });
  };

  const startBot = () => {
    if (botStarted) {
      return;
    }
    botStarted = true;
    setBotStatus('bot_status_connecting');
    botFeed.innerHTML = '';
    clearStatusTimers();
    botStart.classList.add('is-hidden');
    setMenuButtonsVisible(false);
    setTimeout(() => {
      setBotStatus('bot_status_live');
      setMenu('main', { reset: true });
      queueMessages([
        {
          text: '🍔 Olá! Bem-vindo ao demo de Food Bot. Vou te guiar por uma compra completa com nome, cardápio, preços, tempo de preparo e finalização do pedido.\n\nPreencha seu nome abaixo.',
          who: 'bot'
        }
      ]);
      showInput('name', () => {
        queueMessages([
          { text: `Prazer, ${botState.userName}! 👋`, who: 'bot' },
          { text: 'Escolha uma categoria para começar seu pedido.', who: 'bot' }
        ]);
        setMenuButtonsVisible(true);
      });
    }, 400);
  };

  const showInput = (mode, after) => {
    inputMode = mode;
    inputAfter = after || null;
    if (botInput) {
      botInput.placeholder = mode === 'address' ? 'Digite seu endereço completo' : 'Digite seu nome';
      botInput.value = '';
      botInput.focus();
    }
    botInputWrap.classList.remove('is-hidden');
  };

  const hideInput = () => {
    inputMode = null;
    inputAfter = null;
    botInputWrap.classList.add('is-hidden');
  };

  const sendInput = () => {
    if (!botStarted) {
      return;
    }
    const value = (botInput.value || '').trim();
    if (!value) {
      const msg =
        inputMode === 'address'
          ? 'Digite seu endereço para continuar.'
          : 'Digite seu nome para continuar.';
      appendMessage(msg, 'bot', true);
      return;
    }
    appendMessage(value, 'user');
    if (inputMode === 'name') {
      botState.userName = value;
    }
    if (inputMode === 'address') {
      botState.address = value;
    }
    botInput.value = '';
    const next = inputAfter;
    hideInput();
    if (next) {
      next();
    }
  };

  const openWhatsApp = (text) => {
    const url = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
  };

  const generateId = (prefix) => {
    const num = Math.floor(Math.random() * 9000) + 1000;
    return `${prefix}-${num}`;
  };

  const scheduleStatus = (messages, delayMs) => {
    messages.forEach((message, index) => {
      const id = setTimeout(() => {
        appendMessage(message, 'bot');
      }, delayMs * (index + 1));
      statusTimers.push(id);
    });
  };

  const scheduleAction = (fn, delayMs) => {
    const id = setTimeout(fn, delayMs);
    statusTimers.push(id);
  };

  const scheduleAfterStatuses = (count, fn) => {
    scheduleAction(fn, count * 5000);
  };

  const summarizeCustomer = (extra) => {
    const name = botState.userName || 'Cliente';
    return `Cliente: ${name}. ${extra}`;
  };

  const getCustomerName = () => botState.userName || 'Cliente';

  const formatBRL = (value) => `R$ ${value.toFixed(2).replace('.', ',')}`;

  const getSubtotal = () => botState.cart.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

  const getEta = () => {
    if (!botState.cart.length) {
      return 0;
    }
    const preparo = Math.max(...botState.cart.map((item) => item.tempo));
    const entregaExtra = botState.deliveryType === 'delivery' ? 20 : 0;
    return preparo + entregaExtra;
  };

  const getTotal = () => {
    const subtotal = getSubtotal();
    const base = subtotal + botState.deliveryFee;
    if (botState.paymentMethod === 'pix') {
      return base * 0.95;
    }
    return base;
  };

  const buildCartLines = () => {
    if (!botState.cart.length) {
      return ['Seu carrinho está vazio.'];
    }
    return botState.cart.map((item, index) => {
      const linhaTotal = item.preco * item.quantidade;
      return `${index + 1}. ${item.nome} x${item.quantidade} — ${formatBRL(linhaTotal)} (${item.tempo} min)`;
    });
  };

  const sendCartSummary = () => {
    const linhas = buildCartLines();
    const subtotal = getSubtotal();
    const taxa = botState.deliveryFee;
    const total = getTotal();
    const eta = getEta();

    queueMessages([
      { text: '🧾 Resumo do carrinho:', who: 'bot' },
      { text: linhas.join('\n'), who: 'bot' },
      { text: `Subtotal: ${formatBRL(subtotal)}`, who: 'bot' },
      { text: `Taxa de entrega: ${formatBRL(taxa)}`, who: 'bot' },
      {
        text: botState.paymentMethod === 'pix'
          ? `Total com desconto PIX (5%): ${formatBRL(total)}`
          : `Total do pedido: ${formatBRL(total)}`,
        who: 'bot'
      },
      { text: eta ? `⏱️ Tempo estimado: ${eta} min` : '⏱️ Defina a entrega para estimar o tempo total.', who: 'bot' }
    ]);
  };

  const addPendingItemToCart = (quantity) => {
    if (!botState.pendingItem) {
      return;
    }
    const item = botState.pendingItem;
    const existing = botState.cart.find((entry) => entry.key === item.key);
    if (existing) {
      existing.quantidade += quantity;
    } else {
      botState.cart.push({ ...item, quantidade: quantity });
    }
    botState.pendingItem = null;
    botState.estimatedMinutes = getEta();
    queueMessages([
      {
        text: `✅ ${item.nome} adicionado ao carrinho (x${quantity}).`,
        who: 'bot'
      }
    ]);
    sendCartSummary();
    setMenu('main', { reset: true });
  };

  const askWhatsAppConsent = (summary, after) => {
    botState.whatsSummary = summary;
    botState.afterConsent = after || null;
    queueMessages([{ text: 'Posso te chamar no WhatsApp com o resumo do pedido?', who: 'bot' }]);
    setMenu('whatsapp_consent', { push: true });
  };

  const ensureAddress = () => {
    if (!botState.address) {
      botState.address = addressDefaults[currentLang];
    }
    return botState.address;
  };

  /*
  Fluxo legado não relacionado a food bot (mantido apenas como comentário de histórico):
  const startOsOnsiteFlow = () => {
    ...
  };
  */

  const handleAction = (action) => {
    const finalizeOrder = () => {
      botState.orderId = generateId('PED');
      botState.estimatedMinutes = getEta();
      botState.orderConfirmed = true;

      const itens = botState.cart
        .map((item) => `${item.nome} x${item.quantidade}`)
        .join('; ');
      const entregaTexto =
        botState.deliveryType === 'delivery'
          ? `Entrega no endereço: ${botState.address}.`
          : 'Retirada no balcão.';
      const pagamentoTexto =
        botState.paymentMethod === 'pix'
          ? 'Pagamento: PIX (5% desconto).'
          : botState.paymentMethod === 'card'
          ? 'Pagamento: Cartão.'
          : 'Pagamento: Dinheiro na entrega.';

      const resumo = summarizeCustomer(
        `Pedido ${botState.orderId}. Itens: ${itens}. ${entregaTexto} ${pagamentoTexto} Total: ${formatBRL(
          getTotal()
        )}. ETA: ${botState.estimatedMinutes} min.`
      );

      queueMessages([
        { text: `🎉 Pedido ${botState.orderId} confirmado!`, who: 'bot' },
        {
          text: `Total final: ${formatBRL(getTotal())} | Previsão: ${botState.estimatedMinutes} min.`,
          who: 'bot'
        },
        { text: '👨‍🍳 Seu pedido já foi enviado para a cozinha e está em preparo.', who: 'bot' },
        { text: `Obrigado pelo pedido, ${getCustomerName()}! 💙`, who: 'bot' }
      ]);

      askWhatsAppConsent(resumo, () => {
        queueMessages([
          { text: 'Status: pedido recebido ✅', who: 'bot' },
          { text: 'Status: em preparo 👨‍🍳', who: 'bot' },
          {
            text:
              botState.deliveryType === 'delivery'
                ? 'Status: saiu para entrega 🛵'
                : 'Status: pronto para retirada 🧾',
            who: 'bot'
          }
        ]);
        setMenu('pos_pedido_menu', { reset: true });
      });
    };

    const run = () => {
      if (!botState.userName && action !== 'home' && action !== 'back') {
        setMenuButtonsVisible(false);
        showInput('name', () => {
          queueMessages([{ text: `Perfeito, ${getCustomerName()}! Agora escolha uma categoria do cardápio.`, who: 'bot' }]);
          setMenuButtonsVisible(true);
        });
        return;
      }

      appendMessage(getOptionLabel(action), 'user');

      if (action === 'back') {
        queueMessages([{ text: 'Voltando ao menu anterior.', who: 'bot' }]);
        goBack();
        return;
      }

      if (action === 'home') {
        queueMessages([{ text: 'Voltando ao menu principal.', who: 'bot' }]);
        setMenu('main', { reset: true });
        return;
      }

      if (action.startsWith('consent_')) {
        const summary = botState.whatsSummary || '';
        const after = botState.afterConsent;
        const clearConsent = () => {
          botState.whatsSummary = null;
          botState.afterConsent = null;
        };

        if (action === 'consent_yes') {
          openWhatsApp(`Olá! Quero concluir meu pedido. ${summary}`);
          queueMessages([{ text: 'Perfeito! Te chamei no WhatsApp agora.', who: 'bot' }]);
          clearConsent();
          if (after) {
            after();
          }
          return;
        }
        if (action === 'consent_no') {
          queueMessages([{ text: 'Sem problema, seguimos por aqui no demo.', who: 'bot' }]);
          clearConsent();
          if (after) {
            after();
          }
          return;
        }
        if (action === 'consent_home') {
          clearConsent();
          setMenu('main', { reset: true });
          return;
        }
        if (action === 'consent_end') {
          clearConsent();
          queueMessages([{ text: 'Atendimento encerrado. Obrigado!', who: 'bot' }]);
          setMenu('main', { reset: true });
          return;
        }
      }

      if (action === 'menu_pizza') {
        queueMessages([{ text: '🍕 Cardápio de pizzas (preço e tempo por item):', who: 'bot' }]);
        setMenu('pizza_menu', { push: true });
        return;
      }

      if (action === 'menu_burger') {
        queueMessages([{ text: '🍔 Cardápio de hambúrgueres:', who: 'bot' }]);
        setMenu('burger_menu', { push: true });
        return;
      }

      if (action === 'menu_bebida') {
        queueMessages([{ text: '🥤 Bebidas e extras:', who: 'bot' }]);
        setMenu('bebida_menu', { push: true });
        return;
      }

      if (foodCatalog[action]) {
        const item = foodCatalog[action];
        botState.pendingItem = { key: action, ...item };
        queueMessages([
          { text: `Você escolheu: ${item.nome}`, who: 'bot' },
          { text: `Preço unitário: ${formatBRL(item.preco)} | Preparo: ${item.tempo} min`, who: 'bot' },
          { text: 'Selecione a quantidade:', who: 'bot' }
        ]);
        setMenu('quantidade_menu', { push: true });
        return;
      }

      if (action === 'qty_1' || action === 'qty_2' || action === 'qty_3') {
        const quantidade = Number(action.replace('qty_', ''));
        addPendingItemToCart(quantidade);
        return;
      }

      if (action === 'checkout') {
        if (!botState.cart.length) {
          queueMessages([{ text: 'Seu carrinho está vazio. Escolha itens do cardápio para continuar.', who: 'bot' }]);
          setMenu('main', { reset: true });
          return;
        }
        sendCartSummary();
        if (!botState.deliveryType) {
          queueMessages([{ text: 'Para continuar, escolha o tipo de entrega.', who: 'bot' }]);
          setMenu('delivery_menu', { reset: true });
          return;
        }
        if (!botState.paymentMethod) {
          queueMessages([{ text: 'Agora escolha a forma de pagamento.', who: 'bot' }]);
          setMenu('payment_menu', { reset: true });
          return;
        }
        setMenu('checkout_menu', { reset: true });
        return;
      }

      if (action === 'set_delivery') {
        queueMessages([{ text: 'Escolha como deseja receber o pedido:', who: 'bot' }]);
        setMenu('delivery_menu', { push: true });
        return;
      }

      if (action === 'delivery') {
        botState.deliveryType = 'delivery';
        botState.deliveryFee = 8.9;
        setMenu('payment_menu', { reset: true });
        if (!botState.address) {
          queueMessages([{ text: 'Entrega selecionada. Informe seu endereço e, em seguida, escolha a forma de pagamento:', who: 'bot' }]);
          showInput('address', () => {
            queueMessages([{ text: `Entrega definida para: ${botState.address}`, who: 'bot' }]);
            sendCartSummary();
          });
          return;
        }
        queueMessages([{ text: `Entrega definida para: ${botState.address}`, who: 'bot' }]);
        sendCartSummary();
        queueMessages([{ text: 'Perfeito. Agora escolha a forma de pagamento:', who: 'bot' }]);
        setMenu('payment_menu', { reset: true });
        return;
      }

      if (action === 'pickup') {
        botState.deliveryType = 'pickup';
        botState.deliveryFee = 0;
        queueMessages([{ text: 'Retirada no balcão selecionada. Sem taxa de entrega.', who: 'bot' }]);
        sendCartSummary();
        queueMessages([{ text: 'Perfeito. Agora escolha a forma de pagamento:', who: 'bot' }]);
        setMenu('payment_menu', { reset: true });
        return;
      }

      if (action === 'set_payment') {
        if (!botState.deliveryType) {
          queueMessages([{ text: 'Antes do pagamento, escolha o tipo de entrega.', who: 'bot' }]);
          setMenu('delivery_menu', { reset: true });
          return;
        }
        queueMessages([{ text: 'Escolha a forma de pagamento:', who: 'bot' }]);
        setMenu('payment_menu', { push: true });
        return;
      }

      if (action === 'pix' || action === 'card' || action === 'cash') {
        botState.paymentMethod = action;
        const pagamentoTexto =
          action === 'pix'
            ? 'PIX selecionado (desconto de 5% aplicado no total).'
            : action === 'card'
            ? 'Cartão selecionado.'
            : 'Dinheiro na entrega selecionado.';
        queueMessages([{ text: pagamentoTexto, who: 'bot' }]);
        sendCartSummary();
        setMenu('checkout_menu', { reset: true });
        return;
      }

      if (action === 'confirm_order') {
        if (!botState.cart.length) {
          queueMessages([{ text: 'Adicione itens ao carrinho antes de confirmar o pedido.', who: 'bot' }]);
          setMenu('main', { reset: true });
          return;
        }
        if (!botState.deliveryType) {
          queueMessages([{ text: 'Antes de confirmar, escolha o tipo de entrega.', who: 'bot' }]);
          setMenu('delivery_menu', { push: true });
          return;
        }
        if (!botState.paymentMethod) {
          queueMessages([{ text: 'Antes de confirmar, escolha a forma de pagamento.', who: 'bot' }]);
          setMenu('payment_menu', { push: true });
          return;
        }
        if (botState.deliveryType === 'delivery' && !botState.address) {
          showInput('address', () => {
            queueMessages([{ text: `Endereço confirmado: ${botState.address}`, who: 'bot' }]);
            finalizeOrder();
          });
          return;
        }
        finalizeOrder();
        return;
      }

      if (action === 'track_order') {
        if (!botState.orderConfirmed || !botState.orderId) {
          queueMessages([{ text: 'Você ainda não confirmou um pedido nesta sessão.', who: 'bot' }]);
          setMenu('main', { reset: true });
          return;
        }

        queueMessages([
          { text: `Pedido ${botState.orderId}: em preparo no momento.`, who: 'bot' },
          {
            text:
              botState.deliveryType === 'delivery'
                ? `Previsão de chegada: ${botState.estimatedMinutes} min.`
                : `Previsão para retirada: ${botState.estimatedMinutes} min.`,
            who: 'bot'
          }
        ]);
        setMenu('pos_pedido_menu', { reset: true });
        return;
      }

      if (action === 'new_order') {
        botState.cart = [];
        botState.pendingItem = null;
        botState.orderId = null;
        botState.deliveryType = null;
        botState.paymentMethod = null;
        botState.deliveryFee = 0;
        botState.estimatedMinutes = 0;
        botState.orderConfirmed = false;
        queueMessages([{ text: 'Novo pedido iniciado. Vamos montar seu carrinho novamente.', who: 'bot' }]);
        setMenu('main', { reset: true });
        return;
      }

      if (action === 'human_food') {
        const resumo = summarizeCustomer(
          `Quero atendimento humano para pedido de comida. Carrinho: ${buildCartLines().join(' | ')}`
        );
        openWhatsApp(resumo);
        queueMessages([{ text: 'Pronto! Chamei um atendente no WhatsApp com o resumo do seu pedido.', who: 'bot' }]);
        setMenu('pos_pedido_menu', { reset: true });
      }

      /*
      Fluxos antigos desativados por solicitação do usuário:
      - ticket (manutenção)
      - os (ordem de serviço)
      - segmentação por tipo de cliente
      O bot agora demonstra apenas experiência completa de compra de comida.
      */
    };

    if (!botStarted) {
      startBot();
      setTimeout(run, 1200);
    } else {
      run();
    }
  };

  const setLang = (lang) => {
    currentLang = i18n[lang] ? lang : 'pt';
    applyI18n(currentLang);
    updateLangButtons(currentLang);
    setSegment('condominio');
    if (botInput) {
      const placeholderKey =
        inputMode === 'address' ? 'bot_input_address_placeholder' : 'bot_input_placeholder';
      botInput.placeholder = i18n[currentLang][placeholderKey];
    }
    if (botSend) {
      botSend.textContent = i18n[currentLang].bot_send;
    }
    resetBot();
    localStorage.setItem('altnix-lang', currentLang);
  };

  const setupReveal = () => {
    revealTargets.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealTargets.forEach((el) => observer.observe(el));
  };

  const setupFaq = () => {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item) => {
      const button = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      if (!button || !answer) {
        return;
      }
      button.addEventListener('click', () => {
        const isOpen = item.classList.toggle('is-open');
        button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        if (isOpen) {
          answer.removeAttribute('hidden');
        } else {
          answer.setAttribute('hidden', '');
        }
      });
    });
  };

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  segmentButtons.forEach((btn) => {
    btn.addEventListener('click', () => setSegment(btn.dataset.segment));
  });

  botStart.addEventListener('click', startBot);
  menuButtons.forEach((btn) => {
    btn.addEventListener('click', () => handleAction(btn.dataset.action));
  });
  botSend.addEventListener('click', sendInput);
  botInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      sendInput();
    }
  });
  if (botReset) {
    botReset.addEventListener('click', resetBot);
  }

  setLang(currentLang);
  setupReveal();
  setupFaq();
  updateHeaderOffset();
  window.addEventListener('resize', updateHeaderOffset);
  window.addEventListener('load', updateHeaderOffset);
  if (logoImg) {
    logoImg.addEventListener('load', updateHeaderOffset);
  }
});
