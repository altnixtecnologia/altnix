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
      hero_eyebrow: 'Segurança inteligente que converte',
      hero_title: 'Reduza falsos alarmes e feche atendimentos em minutos.',
      hero_subtitle: 'Bots, sistemas e verificação visual integrados para acelerar decisões e proteger seu negócio.',
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
      speed_title: 'Quanto mais rápido, maior a conversão',
      speed_body: 'Resposta imediata com chatbot. Isso gera mais vendas e menos perda por atraso.',
      speed_chip_1: 'Resposta imediata',
      speed_chip_2: '+35% mais vendas',
      speed_chip_3: '-25% menos perda',
      value_title: 'Por que a Altnix',
      value_subtitle: 'Estrutura enxuta, entrega pesada. Foco em resultado e experiência do cliente.',
      value_1_title: 'Conversão imediata',
      value_1_body: 'A jornada já começa com CTA e bot no site, prontos para fechar.',
      value_2_title: 'Segurança ativa',
      value_2_body: 'Câmeras, alarmes e verificação inteligente com confirmação visual.',
      value_3_title: 'Integração total',
      value_3_body: 'Bots, sistemas e infraestrutura trabalhando no mesmo fluxo.',
      solutions_title: 'Soluções principais',
      solutions_subtitle: 'Tudo o que sua operação precisa para vender mais e proteger melhor.',
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
      bot_subtitle: 'Uma experiência real, sem enrolação. Clique, teste e avance.',
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
      bot_stage_2_title: 'Agende a demo',
      bot_stage_2_body: 'Veja o bot e o módulo em operação real.',
      bot_stage_3_title: 'Ative a solução',
      bot_stage_3_body: 'Feche o pacote ideal e comece a usar.',
      process_title: 'Como entregamos',
      process_subtitle: 'Método direto, sem ruído.',
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
      faq_subtitle: 'Respostas diretas para avançar rápido.',
      faq_q1: 'Qual é o investimento?',
      faq_a1: 'O valor depende do escopo. Enviamos proposta rápida via WhatsApp.',
      faq_q2: 'Qual o tempo de instalação?',
      faq_a2: 'Após o diagnóstico, definimos cronograma e iniciamos rápido.',
      faq_q3: 'Funciona com equipamentos já existentes?',
      faq_a3: 'Integramos com câmeras, alarmes e sistemas existentes quando possível.',
      faq_q4: 'Qual o SLA de atendimento?',
      faq_a4: 'Definimos SLA conforme criticidade e volume de operação.',
      plans_title: 'Planos sob medida',
      plans_subtitle: 'Negociação e proposta diretamente pelo WhatsApp.',
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
      cta_title: 'Pronto para vender e proteger melhor?',
      cta_subtitle: 'Ative sua estrutura agora e coloque o cliente em movimento.',
      cta_button_primary: 'Falar no WhatsApp',
      cta_button_secondary: 'Agendar demo',
      cta_button_tertiary: 'Comprar agora',
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
      cta_demo_now: 'Agendar demo agora',
      cta_test_bot: 'Testar o bot',
      cta_schedule_demo: 'Agendar demo',
      cta_buy_now: 'Comprar agora',
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
      hero_eyebrow: 'Smart security that converts',
      hero_title: 'Reduce false alarms and close service faster.',
      hero_subtitle: 'Bots, systems, and visual verification integrated to accelerate decisions and protect your business.',
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
      speed_title: 'The faster the response, the higher the conversion',
      speed_body: 'Immediate response with chatbot. This drives more sales and less loss due to delay.',
      speed_chip_1: 'Immediate response',
      speed_chip_2: '+35% more sales',
      speed_chip_3: '-25% less loss',
      value_title: 'Why Altnix',
      value_subtitle: 'Lean structure, heavy delivery. Focus on results and customer experience.',
      value_1_title: 'Immediate conversion',
      value_1_body: 'The journey starts with CTA and bot ready to close.',
      value_2_title: 'Active security',
      value_2_body: 'Cameras, alarms, and smart verification with visual confirmation.',
      value_3_title: 'Full integration',
      value_3_body: 'Bots, systems, and infrastructure working in one flow.',
      solutions_title: 'Core solutions',
      solutions_subtitle: 'Everything your operation needs to sell more and protect better.',
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
      bot_subtitle: 'A real experience. Click, test, and move forward.',
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
      bot_stage_2_title: 'Schedule a demo',
      bot_stage_2_body: 'See the bot and module in real operation.',
      bot_stage_3_title: 'Activate solution',
      bot_stage_3_body: 'Choose the ideal package and start.',
      process_title: 'How we deliver',
      process_subtitle: 'Direct method, no noise.',
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
      faq_subtitle: 'Clear answers to move fast.',
      faq_q1: 'What is the investment?',
      faq_a1: 'Pricing depends on scope. We send a fast proposal via WhatsApp.',
      faq_q2: 'How long does installation take?',
      faq_a2: 'After diagnosis, we define the schedule and start quickly.',
      faq_q3: 'Does it work with existing equipment?',
      faq_a3: 'We integrate with existing cameras, alarms, and systems whenever possible.',
      faq_q4: 'What is the SLA?',
      faq_a4: 'SLA is defined based on criticality and operational volume.',
      plans_title: 'Tailored plans',
      plans_subtitle: 'Negotiation and proposal directly on WhatsApp.',
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
      cta_title: 'Ready to sell and protect better?',
      cta_subtitle: 'Activate your structure now and keep the customer moving.',
      cta_button_primary: 'Chat on WhatsApp',
      cta_button_secondary: 'Schedule demo',
      cta_button_tertiary: 'Buy now',
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
      cta_demo_now: 'Schedule demo now',
      cta_test_bot: 'Test the bot',
      cta_schedule_demo: 'Schedule demo',
      cta_buy_now: 'Buy now',
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
        { key: 'pizza', label: '1 - Pedido de pizza' },
        { key: 'ticket', label: '2 - Ticket de manutenção' },
        { key: 'os', label: '3 - Ordem de serviço' },
        { key: 'human', label: '4 - Falar com humano' }
      ],
      segment: [
        { key: 'segment_condo', label: '1 - Condomínio' },
        { key: 'segment_company', label: '2 - Empresa' },
        { key: 'segment_home', label: '3 - Residência' },
        { key: 'segment_skip', label: '4 - Continuar sem segmentar' }
      ],
      whatsapp_consent: [
        { key: 'consent_yes', label: '1 - Sim, pode chamar' },
        { key: 'consent_no', label: '2 - Não agora' },
        { key: 'consent_home', label: '3 - Voltar ao menu' },
        { key: 'consent_end', label: '4 - Encerrar atendimento' }
      ],
      pizza: [
        { key: 'pizza_grande', label: '1 - Pizza grande (8 fatias)' },
        { key: 'pizza_media', label: '2 - Pizza média (6 fatias)' },
        { key: 'back', label: '3 - Voltar' },
        { key: 'home', label: '4 - Menu inicial' }
      ],
      delivery: [
        { key: 'delivered', label: '1 - Pedido chegou' },
        { key: 'problem', label: '2 - Tive um problema' },
        { key: 'human', label: '3 - Falar com humano' },
        { key: 'home', label: '4 - Menu inicial' }
      ],
      delivery_check: [
        { key: 'ok', label: '1 - Chegou certo' },
        { key: 'not_ok', label: '2 - Chegou com erro' },
        { key: 'human', label: '3 - Falar com humano' },
        { key: 'home', label: '4 - Menu inicial' }
      ],
      after_ok: [
        { key: 'need_more', label: '1 - Preciso de algo' },
        { key: 'no_more', label: '2 - Finalizar' },
        { key: 'human', label: '3 - Falar com humano' },
        { key: 'home', label: '4 - Menu inicial' }
      ],
      ticket_data: [
        { key: 'ticket_data_ok', label: '1 - Confirmar dados' },
        { key: 'ticket_data_edit', label: '2 - Atualizar nome' },
        { key: 'back', label: '3 - Voltar' },
        { key: 'home', label: '4 - Menu inicial' }
      ],
      ticket_urgency: [
        { key: 'ticket_urgency_yes', label: '1 - Urgente' },
        { key: 'ticket_urgency_no', label: '2 - Normal' },
        { key: 'back', label: '3 - Voltar' },
        { key: 'home', label: '4 - Menu inicial' }
      ],
      ticket_equipment: [
        { key: 'ticket_equipment_net', label: '1 - Internet instável' },
        { key: 'ticket_equipment_system', label: '2 - Sistema travando' },
        { key: 'back', label: '3 - Voltar' },
        { key: 'home', label: '4 - Menu inicial' }
      ],
      ticket_test: [
        { key: 'ticket_ok', label: '1 - Testei e está OK' },
        { key: 'ticket_not_ok', label: '2 - Ainda com problema' },
        { key: 'human', label: '3 - Falar com humano' },
        { key: 'home', label: '4 - Menu inicial' }
      ],
      os_data: [
        { key: 'os_data_ok', label: '1 - Confirmar dados' },
        { key: 'os_data_edit', label: '2 - Atualizar nome' },
        { key: 'back', label: '3 - Voltar' },
        { key: 'home', label: '4 - Menu inicial' }
      ],
      os_urgency: [
        { key: 'os_urgency_yes', label: '1 - Urgente' },
        { key: 'os_urgency_no', label: '2 - Normal' },
        { key: 'back', label: '3 - Voltar' },
        { key: 'home', label: '4 - Menu inicial' }
      ],
      os_equipment: [
        { key: 'os_equipment_pc', label: '1 - Computador não liga' },
        { key: 'os_equipment_camera', label: '2 - Câmera sem imagem' },
        { key: 'back', label: '3 - Voltar' },
        { key: 'home', label: '4 - Menu inicial' }
      ],
      os_location: [
        { key: 'os_location_home', label: '1 - Atendimento no local' },
        { key: 'os_location_drop', label: '2 - Levar à assistência' },
        { key: 'back', label: '3 - Voltar' },
        { key: 'home', label: '4 - Menu inicial' }
      ],
      os_address: [
        { key: 'os_address_ok', label: '1 - Confirmar endereço' },
        { key: 'os_address_edit', label: '2 - Alterar endereço' },
        { key: 'back', label: '3 - Voltar' },
        { key: 'home', label: '4 - Menu inicial' }
      ],
      os_dropoff: [
        { key: 'os_drop_ok', label: '1 - Vou levar o equipamento' },
        { key: 'os_drop_help', label: '2 - Preciso de ajuda' },
        { key: 'human', label: '3 - Falar com humano' },
        { key: 'home', label: '4 - Menu inicial' }
      ],
      os_test: [
        { key: 'os_ok', label: '1 - Testei e está OK' },
        { key: 'os_not_ok', label: '2 - Ainda com problema' },
        { key: 'human', label: '3 - Falar com humano' },
        { key: 'home', label: '4 - Menu inicial' }
      ]
    },
    en: {
      main: [
        { key: 'pizza', label: '1 - Pizza order' },
        { key: 'ticket', label: '2 - Maintenance ticket' },
        { key: 'os', label: '3 - Service order' },
        { key: 'human', label: '4 - Talk to a person' }
      ],
      segment: [
        { key: 'segment_condo', label: '1 - Condominium' },
        { key: 'segment_company', label: '2 - Business' },
        { key: 'segment_home', label: '3 - Residence' },
        { key: 'segment_skip', label: '4 - Continue without segment' }
      ],
      whatsapp_consent: [
        { key: 'consent_yes', label: '1 - Yes, contact me' },
        { key: 'consent_no', label: '2 - Not now' },
        { key: 'consent_home', label: '3 - Back to menu' },
        { key: 'consent_end', label: '4 - End chat' }
      ],
      pizza: [
        { key: 'pizza_grande', label: '1 - Large pizza (8 slices)' },
        { key: 'pizza_media', label: '2 - Medium pizza (6 slices)' },
        { key: 'back', label: '3 - Back' },
        { key: 'home', label: '4 - Main menu' }
      ],
      delivery: [
        { key: 'delivered', label: '1 - Order arrived' },
        { key: 'problem', label: '2 - I had a problem' },
        { key: 'human', label: '3 - Talk to a person' },
        { key: 'home', label: '4 - Main menu' }
      ],
      delivery_check: [
        { key: 'ok', label: '1 - Arrived correctly' },
        { key: 'not_ok', label: '2 - Arrived with issues' },
        { key: 'human', label: '3 - Talk to a person' },
        { key: 'home', label: '4 - Main menu' }
      ],
      after_ok: [
        { key: 'need_more', label: '1 - I need something' },
        { key: 'no_more', label: '2 - Finish' },
        { key: 'human', label: '3 - Talk to a person' },
        { key: 'home', label: '4 - Main menu' }
      ],
      ticket_data: [
        { key: 'ticket_data_ok', label: '1 - Confirm data' },
        { key: 'ticket_data_edit', label: '2 - Update name' },
        { key: 'back', label: '3 - Back' },
        { key: 'home', label: '4 - Main menu' }
      ],
      ticket_urgency: [
        { key: 'ticket_urgency_yes', label: '1 - Urgent' },
        { key: 'ticket_urgency_no', label: '2 - Normal' },
        { key: 'back', label: '3 - Back' },
        { key: 'home', label: '4 - Main menu' }
      ],
      ticket_equipment: [
        { key: 'ticket_equipment_net', label: '1 - Unstable internet' },
        { key: 'ticket_equipment_system', label: '2 - System freezing' },
        { key: 'back', label: '3 - Back' },
        { key: 'home', label: '4 - Main menu' }
      ],
      ticket_test: [
        { key: 'ticket_ok', label: '1 - Tested and OK' },
        { key: 'ticket_not_ok', label: '2 - Still an issue' },
        { key: 'human', label: '3 - Talk to a person' },
        { key: 'home', label: '4 - Main menu' }
      ],
      os_data: [
        { key: 'os_data_ok', label: '1 - Confirm data' },
        { key: 'os_data_edit', label: '2 - Update name' },
        { key: 'back', label: '3 - Back' },
        { key: 'home', label: '4 - Main menu' }
      ],
      os_urgency: [
        { key: 'os_urgency_yes', label: '1 - Urgent' },
        { key: 'os_urgency_no', label: '2 - Normal' },
        { key: 'back', label: '3 - Back' },
        { key: 'home', label: '4 - Main menu' }
      ],
      os_equipment: [
        { key: 'os_equipment_pc', label: '1 - PC not turning on' },
        { key: 'os_equipment_camera', label: '2 - Camera no image' },
        { key: 'back', label: '3 - Back' },
        { key: 'home', label: '4 - Main menu' }
      ],
      os_location: [
        { key: 'os_location_home', label: '1 - On-site service' },
        { key: 'os_location_drop', label: '2 - Drop off at service center' },
        { key: 'back', label: '3 - Back' },
        { key: 'home', label: '4 - Main menu' }
      ],
      os_address: [
        { key: 'os_address_ok', label: '1 - Confirm address' },
        { key: 'os_address_edit', label: '2 - Change address' },
        { key: 'back', label: '3 - Back' },
        { key: 'home', label: '4 - Main menu' }
      ],
      os_dropoff: [
        { key: 'os_drop_ok', label: '1 - I will bring the equipment' },
        { key: 'os_drop_help', label: '2 - I need help' },
        { key: 'human', label: '3 - Talk to a person' },
        { key: 'home', label: '4 - Main menu' }
      ],
      os_test: [
        { key: 'os_ok', label: '1 - Tested and OK' },
        { key: 'os_not_ok', label: '2 - Still an issue' },
        { key: 'human', label: '3 - Talk to a person' },
        { key: 'home', label: '4 - Main menu' }
      ]
    }
  };

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
    flow: null,
    item: null,
    userName: null,
    segment: null,
    orderId: null,
    ticketId: null,
    osId: null,
    urgency: null,
    equipment: null,
    address: null,
    whatsSummary: null,
    afterConsent: null
  };
  const statusTimers = [];
  let inputMode = null;
  let inputAfter = null;
  const addressDefaults = {
    pt: 'Rua das Inovações, 120 - Centro',
    en: '120 Innovation St, Downtown'
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
    botState.item = null;
    botState.flow = null;
    botState.segment = null;
    botState.orderId = null;
    botState.ticketId = null;
    botState.osId = null;
    botState.urgency = null;
    botState.equipment = null;
    botState.address = null;
    botState.whatsSummary = null;
    botState.afterConsent = null;
    menuStack = [];
    clearStatusTimers();
    setBotStatus('bot_status_ready');
    setMenu('main', { reset: true });
    botStart.classList.remove('is-hidden');
    hideInput();
    appendMessage(i18n[currentLang].bot_hint, 'bot', true);
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
    setTimeout(() => {
      setBotStatus('bot_status_live');
      setMenu('segment', { reset: true });
      queueMessages([{ text: i18n[currentLang].bot_msg_hello, who: 'bot' }]);
      showInput('name', () => {
        queueMessages([
          { text: t(`Prazer, ${botState.userName}.`, `Nice to meet you, ${botState.userName}.`), who: 'bot' },
          { text: i18n[currentLang].bot_segment_prompt, who: 'bot' }
        ]);
      });
    }, 400);
  };

  const showInput = (mode, after) => {
    inputMode = mode;
    inputAfter = after || null;
    if (botInput) {
      const placeholderKey =
        mode === 'address' ? 'bot_input_address_placeholder' : 'bot_input_placeholder';
      botInput.placeholder = i18n[currentLang][placeholderKey];
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
          ? t('Digite seu endereço para continuar.', 'Please type your address to continue.')
          : t('Digite seu nome para continuar.', 'Please type your name to continue.');
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
    hideInput();
    if (inputAfter) {
      const next = inputAfter;
      inputAfter = null;
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
    const name = botState.userName || t('Cliente', 'Customer');
    const segment = getSegmentLabel();
    return t(
      `Cliente: ${name}. Segmento: ${segment}. ${extra}`,
      `Customer: ${name}. Segment: ${segment}. ${extra}`
    );
  };

  const getCustomerName = () => botState.userName || t('Cliente', 'Customer');

  const getUrgencyLabel = () => botState.urgency || t('Normal', 'Normal');

  const askWhatsAppConsent = (summary, after) => {
    botState.whatsSummary = summary;
    botState.afterConsent = after || null;
    queueMessages([{ text: i18n[currentLang].bot_whatsapp_ask, who: 'bot' }]);
    setMenu('whatsapp_consent', { push: true });
  };

  const ensureAddress = () => {
    if (!botState.address) {
      botState.address = addressDefaults[currentLang];
    }
    return botState.address;
  };

  const startOsOnsiteFlow = () => {
    clearStatusTimers();
    botState.osId = botState.osId || generateId('OS');
    const address = ensureAddress();
    queueMessages([
      {
        text: t(
          `OS ${botState.osId} gerada. Atendimento no local confirmado.`,
          `SO ${botState.osId} created. On-site service confirmed.`
        ),
        who: 'bot'
      },
      { text: t(`Técnico a caminho para ${address}.`, `Technician on the way to ${address}.`), who: 'bot' }
    ]);
    const statuses = [
      t('Técnico chegou ao local.', 'Technician arrived on site.'),
      t('Atendimento realizado.', 'Service completed.'),
      t('Por favor, teste o equipamento e confirme.', 'Please test the equipment and confirm.')
    ];
    const summary = summarizeCustomer(
      t(
        `OS: ${botState.osId}. Atendimento no local. Endereço: ${address}.`,
        `SO: ${botState.osId}. On-site service. Address: ${address}.`
      )
    );
    askWhatsAppConsent(summary, () => {
      scheduleStatus(statuses, 5000);
      scheduleAfterStatuses(statuses.length, () => {
        setMenu('os_test', { push: true });
      });
    });
  };

  const handleAction = (action) => {
    const run = () => {
      if (!botState.userName && action !== 'home' && action !== 'back') {
        showInput('name', () => {
          queueMessages([
            { text: t(`Prazer, ${botState.userName}.`, `Nice to meet you, ${botState.userName}.`), who: 'bot' },
            { text: i18n[currentLang].bot_segment_prompt, who: 'bot' }
          ]);
        });
        return;
      }

      if (!botState.segment && !action.startsWith('segment_') && !action.startsWith('consent_') && action !== 'home' && action !== 'back') {
        queueMessages([{ text: i18n[currentLang].bot_segment_prompt, who: 'bot' }]);
        setMenu('segment', { push: true });
        return;
      }

      appendMessage(getOptionLabel(action), 'user');

      if (action === 'back') {
        queueMessages([{ text: t('Voltando.', 'Going back.'), who: 'bot' }]);
        goBack();
        return;
      }

      if (action === 'home') {
        queueMessages([{ text: t('Voltando ao menu inicial.', 'Returning to main menu.'), who: 'bot' }]);
        setMenu('main', { reset: true });
        return;
      }

      if (action.startsWith('segment_')) {
        const map = {
          segment_condo: 'condominio',
          segment_company: 'empresa',
          segment_home: 'residencia',
          segment_skip: 'geral'
        };
        botState.segment = map[action] || 'geral';
        const segmentLabel = getSegmentLabel();
        const msg = formatTemplate(i18n[currentLang].bot_segment_set, { segment: segmentLabel });
        queueMessages([{ text: msg, who: 'bot' }]);
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
          const message = t(
            `Olá! Seguem meus dados para continuar: ${summary}`,
            `Hello! Here are my details to continue: ${summary}`
          );
          openWhatsApp(message);
          queueMessages([{ text: i18n[currentLang].bot_whatsapp_yes, who: 'bot' }]);
          clearConsent();
          if (after) {
            after();
          } else {
            setMenu('main', { reset: true });
          }
          return;
        }
        if (action === 'consent_no') {
          queueMessages([{ text: i18n[currentLang].bot_whatsapp_no, who: 'bot' }]);
          clearConsent();
          if (after) {
            after();
          } else {
            setMenu('main', { reset: true });
          }
          return;
        }
        if (action === 'consent_home') {
          queueMessages([{ text: t('Voltando ao menu inicial.', 'Returning to main menu.'), who: 'bot' }]);
          clearConsent();
          setMenu('main', { reset: true });
          return;
        }
        if (action === 'consent_end') {
          queueMessages([{ text: t('Atendimento encerrado. Obrigado!', 'Chat ended. Thank you!'), who: 'bot' }]);
          clearConsent();
          setMenu('main', { reset: true });
          return;
        }
      }

      if (action === 'human') {
        queueMessages([{ text: i18n[currentLang].bot_reply_human, who: 'bot' }]);
        const summary = summarizeCustomer(t('Solicitação: falar com especialista.', 'Request: talk to a specialist.'));
        openWhatsApp(
          currentLang === 'pt'
            ? `Quero falar com um especialista. ${summary}`
            : `I want to talk to a specialist. ${summary}`
        );
        setMenu('main', { reset: true });
        return;
      }

      if (action === 'pizza') {
        botState.flow = 'pizza';
        botState.item = null;
        botState.orderId = null;
        clearStatusTimers();
        queueMessages([{ text: t('Pedido de pizza selecionado. Escolha o tamanho:', 'Pizza order selected. Choose a size:'), who: 'bot' }]);
        setMenu('pizza', { push: true });
        return;
      }

      if (action === 'pizza_grande' || action === 'pizza_media') {
        const itemMap = {
          pizza_grande: t('Pizza grande (8 fatias)', 'Large pizza (8 slices)'),
          pizza_media: t('Pizza média (6 fatias)', 'Medium pizza (6 slices)')
        };
        botState.flow = 'pizza';
        botState.item = itemMap[action] || t('Pizza', 'Pizza');
        botState.orderId = generateId('PED');
        clearStatusTimers();
        const reply = t(
          `${getCustomerName()}, seu pedido ${botState.orderId} (${botState.item}) foi gerado e já está sendo preparado.`,
          `${getCustomerName()}, your order ${botState.orderId} (${botState.item}) was created and is being prepared.`
        );
        queueMessages([{ text: reply, who: 'bot' }]);
        const summary = summarizeCustomer(
          t(`Pedido: ${botState.orderId}. Item: ${botState.item}.`, `Order: ${botState.orderId}. Item: ${botState.item}.`)
        );
        askWhatsAppConsent(summary, () => {
          scheduleStatus(
            [
              t('Seu pedido ficou pronto.', 'Your order is ready.'),
              t('Saiu para entrega.', 'Out for delivery.'),
              t('Quando chegar, selecione a opção 1.', 'When it arrives, select option 1.')
            ],
            5000
          );
          setMenu('delivery', { push: true });
        });
        return;
      }

      if (action === 'delivered') {
        queueMessages([{ text: t('Chegou certo?', 'Did it arrive correctly?'), who: 'bot' }]);
        setMenu('delivery_check', { push: true });
        return;
      }

      if (action === 'problem') {
        const ticketId = generateId('TCK');
        queueMessages([
          { text: t(`Sinto muito. Ticket ${ticketId} aberto.`, `Sorry. Ticket ${ticketId} opened.`), who: 'bot' },
          { text: t('Nossa equipe já foi acionada.', 'Our team has been notified.'), who: 'bot' }
        ]);
        scheduleStatus([summarizeCustomer(t(`Pedido: ${botState.orderId || '-'}.`, `Order: ${botState.orderId || '-'}.`))], 5000);
        setMenu('main', { reset: true });
        return;
      }

      if (action === 'ok') {
        queueMessages([{ text: t('Perfeito. Precisa de algo mais?', 'Great. Do you need anything else?'), who: 'bot' }]);
        setMenu('after_ok', { push: true });
        return;
      }

      if (action === 'not_ok') {
        const ticketId = generateId('TCK');
        queueMessages([
          { text: t(`Entendi. Ticket ${ticketId} aberto.`, `Understood. Ticket ${ticketId} opened.`), who: 'bot' },
          { text: t('Vamos corrigir rapidamente.', 'We will fix it quickly.'), who: 'bot' }
        ]);
        setMenu('main', { reset: true });
        return;
      }

      if (action === 'need_more') {
        queueMessages([{ text: t('Te direciono para atendimento.', 'Connecting you to support.'), who: 'bot' }]);
        openWhatsApp(t('Preciso de ajuda com meu pedido.', 'I need help with my order.'));
        setMenu('main', { reset: true });
        return;
      }

      if (action === 'no_more') {
        queueMessages([{ text: t(`Pedido finalizado. Obrigado, ${getCustomerName()}!`, `Order completed. Thank you, ${getCustomerName()}!`), who: 'bot' }]);
        setMenu('main', { reset: true });
        return;
      }

      if (action === 'ticket') {
        botState.flow = 'ticket';
        botState.ticketId = null;
        botState.urgency = null;
        botState.equipment = null;
        clearStatusTimers();
        queueMessages([
          {
            text: t(
              `Segmento ${getSegmentLabel()}. Antes de abrir o ticket, confirme seus dados: Nome ${getCustomerName()}. Contato: WhatsApp informado.`,
              `Segment ${getSegmentLabel()}. Before opening the ticket, confirm your data: Name ${getCustomerName()}. Contact: WhatsApp on file.`
            ),
            who: 'bot'
          }
        ]);
        setMenu('ticket_data', { push: true });
        return;
      }

      if (action === 'ticket_data_ok') {
        queueMessages([{ text: t('O atendimento é urgente?', 'Is this urgent?'), who: 'bot' }]);
        setMenu('ticket_urgency', { push: true });
        return;
      }

      if (action === 'ticket_data_edit') {
        showInput('name', () => {
          queueMessages([
            { text: t('Dados atualizados.', 'Data updated.'), who: 'bot' },
            {
              text: t(
                `Confirma seus dados: Nome ${getCustomerName()}. Contato: WhatsApp informado.`,
                `Confirm your data: Name ${getCustomerName()}. Contact: WhatsApp on file.`
              ),
              who: 'bot'
            }
          ]);
          setMenu('ticket_data');
        });
        return;
      }

      if (action === 'ticket_urgency_yes' || action === 'ticket_urgency_no') {
        botState.urgency = action === 'ticket_urgency_yes' ? t('Urgente', 'Urgent') : t('Normal', 'Normal');
        queueMessages([{ text: t('Em qual equipamento é o atendimento?', 'Which equipment is affected?'), who: 'bot' }]);
        setMenu('ticket_equipment', { push: true });
        return;
      }

      if (action === 'ticket_equipment_net' || action === 'ticket_equipment_system') {
        const equipmentMap = {
          ticket_equipment_net: t('Internet instável', 'Unstable internet'),
          ticket_equipment_system: t('Sistema travando', 'System freezing')
        };
        botState.equipment = equipmentMap[action] || t('Equipamento', 'Equipment');
        botState.ticketId = generateId('TCK');
        clearStatusTimers();
        queueMessages([
          {
            text: t(
              `Ticket ${botState.ticketId} aberto. Prioridade: ${getUrgencyLabel()}. Equipamento: ${botState.equipment}.`,
              `Ticket ${botState.ticketId} opened. Priority: ${getUrgencyLabel()}. Equipment: ${botState.equipment}.`
            ),
            who: 'bot'
          },
          { text: t('Agora é com a equipe técnica.', 'Now it is with the technical team.'), who: 'bot' }
        ]);
        const statuses = [
          t('Diagnóstico concluído.', 'Diagnosis completed.'),
          t('Correção aplicada.', 'Fix applied.'),
          t('Atendimento finalizado. Por favor, teste e confirme.', 'Service completed. Please test and confirm.')
        ];
        const summary = summarizeCustomer(
          t(
            `Ticket: ${botState.ticketId}. Prioridade: ${getUrgencyLabel()}. Equipamento: ${botState.equipment}.`,
            `Ticket: ${botState.ticketId}. Priority: ${getUrgencyLabel()}. Equipment: ${botState.equipment}.`
          )
        );
        askWhatsAppConsent(summary, () => {
          scheduleStatus(statuses, 5000);
          scheduleAfterStatuses(statuses.length, () => {
            setMenu('ticket_test', { push: true });
          });
        });
        return;
      }

      if (action === 'ticket_ok') {
        queueMessages([{ text: t(`Excelente, ${getCustomerName()}. Atendimento concluído.`, `Great, ${getCustomerName()}. Service completed.`), who: 'bot' }]);
        setMenu('main', { reset: true });
        return;
      }

      if (action === 'ticket_not_ok') {
        queueMessages([{ text: t('Entendi. Vou reabrir e te direcionar para a equipe.', 'Got it. I will reopen and connect you to the team.'), who: 'bot' }]);
        openWhatsApp(t('Preciso de ajuda com meu ticket.', 'I need help with my ticket.'));
        setMenu('main', { reset: true });
        return;
      }

      if (action === 'os') {
        botState.flow = 'os';
        botState.osId = null;
        botState.urgency = null;
        botState.equipment = null;
        clearStatusTimers();
        queueMessages([
          {
            text: t(
              `Segmento ${getSegmentLabel()}. Antes de abrir a OS, confirme seus dados: Nome ${getCustomerName()}. Contato: WhatsApp informado.`,
              `Segment ${getSegmentLabel()}. Before opening the service order, confirm your data: Name ${getCustomerName()}. Contact: WhatsApp on file.`
            ),
            who: 'bot'
          }
        ]);
        setMenu('os_data', { push: true });
        return;
      }

      if (action === 'os_data_ok') {
        queueMessages([{ text: t('O atendimento é urgente?', 'Is this urgent?'), who: 'bot' }]);
        setMenu('os_urgency', { push: true });
        return;
      }

      if (action === 'os_data_edit') {
        showInput('name', () => {
          queueMessages([
            { text: t('Dados atualizados.', 'Data updated.'), who: 'bot' },
            {
              text: t(
                `Confirma seus dados: Nome ${getCustomerName()}. Contato: WhatsApp informado.`,
                `Confirm your data: Name ${getCustomerName()}. Contact: WhatsApp on file.`
              ),
              who: 'bot'
            }
          ]);
          setMenu('os_data');
        });
        return;
      }

      if (action === 'os_urgency_yes' || action === 'os_urgency_no') {
        botState.urgency = action === 'os_urgency_yes' ? t('Urgente', 'Urgent') : t('Normal', 'Normal');
        queueMessages([{ text: t('Em qual equipamento é o atendimento?', 'Which equipment is affected?'), who: 'bot' }]);
        setMenu('os_equipment', { push: true });
        return;
      }

      if (action === 'os_equipment_pc' || action === 'os_equipment_camera') {
        const equipmentMap = {
          os_equipment_pc: t('Computador não liga', 'PC not turning on'),
          os_equipment_camera: t('Câmera sem imagem', 'Camera no image')
        };
        botState.equipment = equipmentMap[action] || t('Equipamento', 'Equipment');
        queueMessages([{ text: t('O atendimento será no local ou você vai levar à assistência?', 'Will it be on-site or will you drop it off?'), who: 'bot' }]);
        setMenu('os_location', { push: true });
        return;
      }

      if (action === 'os_location_home') {
        const address = ensureAddress();
        queueMessages([{ text: t(`Confirme o endereço: ${address}.`, `Confirm the address: ${address}.`), who: 'bot' }]);
        setMenu('os_address', { push: true });
        return;
      }

      if (action === 'os_address_ok') {
        startOsOnsiteFlow();
        return;
      }

      if (action === 'os_address_edit') {
        showInput('address', () => {
          queueMessages([{ text: t(`Endereço atualizado: ${botState.address}.`, `Address updated: ${botState.address}.`), who: 'bot' }]);
          startOsOnsiteFlow();
        });
        return;
      }

      if (action === 'os_location_drop') {
        clearStatusTimers();
        botState.osId = botState.osId || generateId('OS');
        const dropoffMap = {
          [t('Computador não liga', 'PC not turning on')]: t('Rua Alfa, 100 - Centro', '100 Alpha St, Downtown'),
          [t('Câmera sem imagem', 'Camera no image')]: t('Avenida Beta, 245 - Centro', '245 Beta Ave, Downtown')
        };
        const dropAddress = dropoffMap[botState.equipment] || t('Rua Alfa, 100 - Centro', '100 Alpha St, Downtown');
        queueMessages([
          {
            text: t(
              `OS ${botState.osId} gerada. Leve o equipamento para: ${dropAddress}.`,
              `SO ${botState.osId} created. Please drop the equipment at: ${dropAddress}.`
            ),
            who: 'bot'
          },
          { text: t('Traga o equipamento e a fonte de energia.', 'Bring the equipment and power supply.'), who: 'bot' }
        ]);
        const summary = summarizeCustomer(
          t(
            `OS: ${botState.osId}. Entrega na assistência. Endereço: ${dropAddress}.`,
            `SO: ${botState.osId}. Drop off at service center. Address: ${dropAddress}.`
          )
        );
        askWhatsAppConsent(summary, () => {
          setMenu('os_dropoff', { push: true });
        });
        return;
      }

      if (action === 'os_drop_ok') {
        clearStatusTimers();
        queueMessages([{ text: t('Perfeito. Assim que recebermos, atualizo você.', 'Great. I will update you once we receive it.'), who: 'bot' }]);
        const statuses = [
          t('Equipamento recebido.', 'Equipment received.'),
          t('Serviço realizado.', 'Service completed.'),
          t('Pronto para retirada.', 'Ready for pickup.'),
          t('Quando retirar, teste e confirme.', 'When you pick it up, test and confirm.')
        ];
        scheduleStatus(statuses, 5000);
        scheduleAfterStatuses(statuses.length, () => {
          setMenu('os_test', { push: true });
        });
        return;
      }

      if (action === 'os_drop_help') {
        queueMessages([{ text: t('Te direciono para atendimento.', 'Connecting you to support.'), who: 'bot' }]);
        openWhatsApp(t('Preciso de ajuda com minha ordem de serviço.', 'I need help with my service order.'));
        setMenu('main', { reset: true });
        return;
      }

      if (action === 'os_ok') {
        queueMessages([{ text: t(`Atendimento concluído. Obrigado, ${getCustomerName()}!`, `Service completed. Thank you, ${getCustomerName()}!`), who: 'bot' }]);
        setMenu('main', { reset: true });
        return;
      }

      if (action === 'os_not_ok') {
        queueMessages([{ text: t('Entendi. Vou reabrir e te direcionar para a equipe.', 'Got it. I will reopen and connect you to the team.'), who: 'bot' }]);
        openWhatsApp(t('Preciso de ajuda com minha ordem de serviço.', 'I need help with my service order.'));
        setMenu('main', { reset: true });
      }
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
