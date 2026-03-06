document.addEventListener('DOMContentLoaded', () => {
  const i18n = {
    pt: {
      brand_tagline: 'Tecnologia & Soluções',
      nav_about: 'Empresa',
      nav_solutions: 'Soluções',
      nav_mvi: 'Módulo Inteligente',
      nav_bot: 'Simulação',
      nav_process: 'Como funciona',
      nav_contact: 'Contato',
      hero_eyebrow: 'Tecnologia que organiza seu atendimento',
      hero_title: 'Tecnologia que organiza o atendimento da sua empresa e responde seus clientes com rapidez.',
      hero_subtitle: 'Desenvolvemos soluções inteligentes que automatizam processos, organizam informações e garantem atenção imediata, a qualquer momento.',
      hero_metric_1: '+X instalações',
      hero_metric_2: 'SLA 24/7',
      hero_metric_3: 'Resposta média em 3 min',
      trust_title: 'Mais eficiência no dia a dia da empresa',
      trust_1_title: 'Resposta imediata',
      trust_1_body: 'Clientes atendidos na hora, sem filas no WhatsApp.',
      trust_2_title: 'Organização automática',
      trust_2_body: 'Solicitações e dados centralizados em um fluxo único.',
      trust_3_title: 'Direcionamento correto',
      trust_3_body: 'Cada cliente cai no setor certo com contexto completo.',
      trust_4_title: 'Atendimento profissional',
      trust_4_body: 'Comunicação padronizada, sem retrabalho.',
      speed_title: 'Agilidade gera resultado',
      speed_body: 'Respostas imediatas aumentam conversão e reduzem perdas operacionais.',
      speed_badge: 'Métrica interna',
      speed_chip_1: 'Resposta imediata',
      speed_chip_2: '+35% mais vendas',
      speed_chip_3: '-25% menos perda',
      value_title: 'Seu atendimento está assim?',
      value_subtitle: 'Problemas pequenos viram perda de vendas e desorganização do negócio.',
      value_1_title: 'Clientes esperando',
      value_1_body: 'Tempo de resposta alto e perda de oportunidades.',
      value_2_title: 'Mensagens acumuladas',
      value_2_body: 'WhatsApp lotado e informações repetidas.',
      value_3_title: 'Oportunidades perdidas',
      value_3_body: 'Pedidos e solicitações se perdem no fluxo.',
      solutions_title: 'Transformamos seu atendimento',
      solutions_subtitle: 'Criamos soluções digitais que organizam a comunicação e automatizam processos importantes.',
      solution_1_title: 'Resposta imediata',
      solution_1_body: 'Seu cliente recebe retorno no mesmo instante.',
      solution_2_title: 'Organização automática',
      solution_2_body: 'Pedidos e solicitações organizados sem retrabalho.',
      solution_3_title: 'Triagem inteligente',
      solution_3_body: 'Cada cliente segue o melhor caminho com contexto completo.',
      solution_4_title: 'Sistemas personalizados',
      solution_4_body: 'Cadastro, agenda, controles e notificações 100% online.',
      bot_types_title: 'Tipos de automação',
      bot_types_subtitle: 'Escolhemos a tecnologia ideal para cada cenário.',
      bot_type_1_title: 'Regras',
      bot_type_1_body: 'Fluxos definidos para processos previsíveis.',
      bot_type_2_title: 'Inteligência Artificial',
      bot_type_2_body: 'Entende intenção e adapta respostas com contexto.',
      bot_type_3_title: 'Híbrido',
      bot_type_3_body: 'Regras + IA para controle e flexibilidade.',
      mvi_title: 'Módulo de Verificação Inteligente',
      mvi_subtitle: 'Em desenvolvimento. Será integrado a câmeras e alarmes para confirmação visual.',
      mvi_point_1: 'Confirmação visual de disparos em grupo.',
      mvi_point_2: 'Fluxo inteligente para reduzir falsos alarmes.',
      mvi_point_3: 'Integração com câmeras, alarmes e sistemas.',
      mvi_point_4: 'Histórico e rastreabilidade por ocorrência.',
      mvi_panel_title: 'Em desenvolvimento',
      mvi_panel_body: 'Estamos finalizando a versão integrada para validação visual e acionamento rápido.',
      mvi_panel_tag: 'Em desenvolvimento',
      mvi_card_title: 'Módulo de verificação inteligente',
      mvi_card_body: 'Estamos construindo a camada de confirmação visual integrada a câmeras e alarmes.',
      segment_title: 'Para quem é essa solução',
      segment_subtitle: 'Aplicável a diversos tipos de negócio, sempre com desenvolvimento personalizado.',
      segment_condo: 'Condomínios',
      segment_company: 'Empresas',
      segment_home: 'Residências',
      segment_tag_1: 'Agilidade',
      segment_tag_2: 'Automação',
      segment_tag_3: 'WhatsApp',
      segment_example_1: 'Empresas de serviços',
      segment_example_2: 'Clínicas e consultórios',
      segment_example_3: 'Imobiliárias',
      segment_example_4: 'Comércios',
      segment_example_5: 'Indústrias',
      segment_example_6: 'Food',
      segment_example_7: 'Tecnologia',
      segment_example_8: 'Atendimento ao cliente',
      segment_example_9: 'Assistências técnicas',
      segment_example_10: 'Educação',
      bot_title: 'Experiência prática no site',
      bot_subtitle: 'Simulação real de atendimento para mostrar eficiência e proatividade.',
      bot_hint: 'Clique em iniciar, informe seu nome e escolha uma opção numerada.',
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
      process_title: 'Como funciona',
      process_subtitle: 'Tecnologia desenvolvida para a realidade da sua empresa.',
      process_step_1_title: 'Entendimento da necessidade',
      process_step_1_body: 'Analisamos o atendimento e identificamos pontos de melhoria.',
      process_step_1_cta: 'Agendar conversa',
      process_step_2_title: 'Desenvolvimento da solução',
      process_step_2_body: 'Criamos um sistema personalizado para organizar interações e processos.',
      process_step_2_cta: 'Solicitar proposta',
      process_step_3_title: 'Implementação e ajustes',
      process_step_3_body: 'Configuramos tudo e ajustamos para funcionar na rotina.',
      process_step_3_cta: 'Acompanhar implantação',
      faq_title: 'Dúvidas frequentes',
      faq_subtitle: 'Respostas diretas para avançar rápido.',
      faq_q1: 'Como o investimento é definido?',
      faq_a1: 'O valor depende do fluxo, integrações e nível de suporte. A proposta é enviada pelo WhatsApp.',
      faq_q2: 'Quanto tempo para colocar a solução no ar?',
      faq_a2: 'Após o diagnóstico, entregamos um cronograma e iniciamos a construção em etapas rápidas.',
      faq_q3: 'Integra com WhatsApp, CRM ou sistemas?',
      faq_a3: 'Sim. Integramos com ferramentas existentes e criamos sistemas personalizados quando necessário.',
      faq_q4: 'É possível direcionar para equipes diferentes?',
      faq_a4: 'Sim. Criamos filas por setor (comercial, suporte, financeiro) com regras claras.',
      plans_title: 'Planos sob medida',
      plans_subtitle: 'Investimento e proposta comercial tratados exclusivamente pelo WhatsApp.',
      plan_price_contact: 'Sob consulta',
      plan_cta: 'Falar no WhatsApp',
      plan_1_title: 'Essencial',
      plan_1_feat_1: 'Implantação rápida da solução e orientação inicial.',
      plan_1_feat_2: 'Fluxos essenciais e WhatsApp configurados.',
      plan_1_feat_3: 'Suporte padrão em horário comercial.',
      plan_2_title: 'Profissional',
      plan_2_feat_1: 'Automação híbrida e integrações prioritárias.',
      plan_2_feat_2: 'Sistemas personalizados (cadastro e agenda).',
      plan_2_feat_3: 'SLA estendido e acompanhamento ativo.',
      plan_3_title: 'Enterprise',
      plan_3_feat_1: 'IA avançada e integrações via API.',
      plan_3_feat_2: 'Operação 24/7 com níveis críticos.',
      plan_3_feat_3: 'Gestão de múltiplas unidades.',
      showcase_title: 'Veja o módulo em ação',
      showcase_subtitle: 'Vídeo curto mostrando validação visual e resposta rápida.',
      showcase_cta: 'Solicitar demo no WhatsApp',
      showcase_tag: 'Vídeo 20–30s',
      showcase_placeholder_title: 'Insira o vídeo de demonstração',
      showcase_placeholder_body: 'Envie o arquivo e substituiremos este espaço pelo vídeo real.',
      cta_title: 'Leve mais tecnologia para o seu atendimento',
      cta_subtitle: 'Fale com nossa equipe e descubra como transformar seu atendimento.',
      cta_button_primary: 'Falar no WhatsApp',
      cta_button_secondary: 'Ver demonstração técnica',
      cta_button_tertiary: 'Solicitar proposta',
      footer_subtitle: 'Tecnologia sob medida para eficiência, rentabilidade e crescimento.',
      footer_contact: 'Contato',
      footer_social: 'Social',
      footer_legal: 'Legal',
      footer_cnpj_label: 'CNPJ',
      footer_address_label: 'Endereço',
      footer_address_value: 'Rua do Aviador, 261 - Carianos. Florianópolis/SC',
      footer_domain: 'Domínio',
      footer_domain_value: 'altnixtecnologia.info (em breve .com.br)',
      footer_copy: '© 2026 Altnix Tecnologia. Todos os direitos reservados.',
      footer_terms: 'Termos',
      footer_privacy: 'Privacidade',
      cta_whatsapp: 'Falar no WhatsApp',
      cta_demo_now: 'Falar com um especialista',
      cta_test_bot: 'Ver como funciona',
      cta_schedule_demo: 'Solicitar validação técnica',
      cta_buy_now: 'Solicitar proposta',
      cta_talk_team: 'Falar com a equipe',
      bot_msg_hello: 'Olá! Esta é uma simulação do atendimento Altnix. Aqui mostramos como a tecnologia organiza o contato com clientes em tempo real. Para personalizar a experiência, qual é o seu nome?',
      bot_msg_prompt: 'Escolha uma opção numerada para simular o atendimento.',
      bot_segment_prompt: 'Antes de simular, qual é o seu segmento?',
      bot_segment_set: 'Segmento definido: {segment}. Agora escolha o atendimento.',
      bot_whatsapp_ask: 'Já posso te chamar no WhatsApp com esses dados?',
      bot_whatsapp_yes: 'Perfeito. Vou te chamar no WhatsApp agora.',
      bot_whatsapp_no: 'Sem problemas. Quer continuar por aqui?',
      bot_reply_human: 'Chamando um especialista agora. Prefere WhatsApp ou ligação?'
    },
    en: {
      brand_tagline: 'Technology & Solutions',
      nav_about: 'Company',
      nav_solutions: 'Solutions',
      nav_mvi: 'Smart Module',
      nav_bot: 'Simulation',
      nav_process: 'How it works',
      nav_contact: 'Contact',
      hero_eyebrow: 'Technology that organizes your service',
      hero_title: 'Technology that organizes your company’s service and responds to customers fast.',
      hero_subtitle: 'We build intelligent solutions that automate processes, organize information, and deliver immediate attention anytime.',
      hero_metric_1: '+X installations',
      hero_metric_2: '24/7 SLA',
      hero_metric_3: 'Avg response 3 min',
      trust_title: 'More efficiency in daily operations',
      trust_1_title: 'Immediate response',
      trust_1_body: 'Customers are answered right away, no WhatsApp backlog.',
      trust_2_title: 'Automatic organization',
      trust_2_body: 'Requests and data centralized in one flow.',
      trust_3_title: 'Correct routing',
      trust_3_body: 'Each customer reaches the right team with full context.',
      trust_4_title: 'Professional service',
      trust_4_body: 'Standardized communication without rework.',
      speed_title: 'Agility drives results',
      speed_body: 'Immediate responses boost conversion and reduce operational losses.',
      speed_badge: 'Internal metric',
      speed_chip_1: 'Immediate response',
      speed_chip_2: '+35% more sales',
      speed_chip_3: '-25% less loss',
      value_title: 'Is your service like this?',
      value_subtitle: 'Small issues turn into lost sales and disorganized operations.',
      value_1_title: 'Waiting customers',
      value_1_body: 'High response time and lost opportunities.',
      value_2_title: 'Message overload',
      value_2_body: 'WhatsApp crowded and repeated information.',
      value_3_title: 'Lost requests',
      value_3_body: 'Orders and requests get lost in the flow.',
      solutions_title: 'We transform your service',
      solutions_subtitle: 'We build digital solutions that organize communication and automate key processes.',
      solution_1_title: 'Immediate response',
      solution_1_body: 'Your customer gets a reply instantly.',
      solution_2_title: 'Automatic organization',
      solution_2_body: 'Orders and requests organized with no manual effort.',
      solution_3_title: 'Smart triage',
      solution_3_body: 'Each customer follows the best path with full context.',
      solution_4_title: 'Custom systems',
      solution_4_body: 'Customer data, scheduling, controls, and notifications online.',
      bot_types_title: 'Automation types',
      bot_types_subtitle: 'We choose the ideal technology for each scenario.',
      bot_type_1_title: 'Rules',
      bot_type_1_body: 'Defined flows for predictable processes.',
      bot_type_2_title: 'Artificial Intelligence',
      bot_type_2_body: 'Understands intent and adapts responses.',
      bot_type_3_title: 'Hybrid',
      bot_type_3_body: 'Rules + AI for control and flexibility.',
      mvi_title: 'Smart Verification Module',
      mvi_subtitle: 'In development. It will integrate with cameras and alarms for visual confirmation.',
      mvi_point_1: 'Group visual confirmation of events.',
      mvi_point_2: 'Smart flow to reduce false alarms.',
      mvi_point_3: 'Integration with cameras, alarms, and systems.',
      mvi_point_4: 'History and traceability per incident.',
      mvi_panel_title: 'In development',
      mvi_panel_body: 'We are finalizing the integrated version for visual validation and fast activation.',
      mvi_panel_tag: 'In development',
      mvi_card_title: 'Smart verification module',
      mvi_card_body: 'We are building the visual confirmation layer integrated with cameras and alarms.',
      segment_title: 'Who this is for',
      segment_subtitle: 'Applicable to many business types, always personalized.',
      segment_condo: 'Condominiums',
      segment_company: 'Businesses',
      segment_home: 'Residences',
      segment_tag_1: 'Agility',
      segment_tag_2: 'Automation',
      segment_tag_3: 'WhatsApp',
      segment_example_1: 'Service companies',
      segment_example_2: 'Clinics and offices',
      segment_example_3: 'Real estate',
      segment_example_4: 'Retail',
      segment_example_5: 'Industry',
      segment_example_6: 'Food',
      segment_example_7: 'Technology',
      segment_example_8: 'Customer service',
      segment_example_9: 'Tech support',
      segment_example_10: 'Education',
      bot_title: 'Practical experience on site',
      bot_subtitle: 'Real service simulation to show efficiency and proactivity.',
      bot_hint: 'Click start, enter your name, and choose a numbered option.',
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
      process_title: 'How it works',
      process_subtitle: 'Technology built for your company’s reality.',
      process_step_1_title: 'Needs assessment',
      process_step_1_body: 'We analyze service and identify improvements.',
      process_step_1_cta: 'Schedule a call',
      process_step_2_title: 'Solution development',
      process_step_2_body: 'We build a custom system to organize interactions and processes.',
      process_step_2_cta: 'Request a proposal',
      process_step_3_title: 'Implementation and adjustments',
      process_step_3_body: 'We configure everything to fit the routine.',
      process_step_3_cta: 'Follow implementation',
      faq_title: 'Frequently asked questions',
      faq_subtitle: 'Direct answers to move fast.',
      faq_q1: 'How is pricing defined?',
      faq_a1: 'It depends on flow complexity, integrations, and support level. Proposal is sent via WhatsApp.',
      faq_q2: 'How long to go live with the solution?',
      faq_a2: 'After diagnosis, we deliver a timeline and build in fast stages.',
      faq_q3: 'Does it integrate with WhatsApp, CRM, or systems?',
      faq_a3: 'Yes. We connect to existing tools and build custom systems when needed.',
      faq_q4: 'Can it route to different teams?',
      faq_a4: 'Yes. We create queues by department (sales, support, finance) with clear rules.',
      plans_title: 'Tailored plans',
      plans_subtitle: 'Investment and commercial proposal handled exclusively on WhatsApp.',
      plan_price_contact: 'On request',
      plan_cta: 'Chat on WhatsApp',
      plan_1_title: 'Essential',
      plan_1_feat_1: 'Fast solution deployment and initial guidance.',
      plan_1_feat_2: 'Essential flows and WhatsApp configured.',
      plan_1_feat_3: 'Standard support during business hours.',
      plan_2_title: 'Professional',
      plan_2_feat_1: 'Hybrid automation and priority integrations.',
      plan_2_feat_2: 'Custom systems (customer data and scheduling).',
      plan_2_feat_3: 'Extended SLA and active follow-up.',
      plan_3_title: 'Enterprise',
      plan_3_feat_1: 'Advanced AI and API integrations.',
      plan_3_feat_2: '24/7 operation with critical tiers.',
      plan_3_feat_3: 'Multi-site management.',
      showcase_title: 'See the module in action',
      showcase_subtitle: 'Short video showing visual validation and quick response.',
      showcase_cta: 'Request demo on WhatsApp',
      showcase_tag: '20–30s video',
      showcase_placeholder_title: 'Insert the demo video',
      showcase_placeholder_body: 'Send the file and we will replace this area with the real video.',
      cta_title: 'Bring more technology to your service',
      cta_subtitle: 'Talk to our team and discover how to transform your service.',
      cta_button_primary: 'Chat on WhatsApp',
      cta_button_secondary: 'View technical demo',
      cta_button_tertiary: 'Request proposal',
      footer_subtitle: 'Tailored technology for efficiency, profitability, and growth.',
      footer_contact: 'Contact',
      footer_social: 'Social',
      footer_legal: 'Legal',
      footer_cnpj_label: 'CNPJ',
      footer_address_label: 'Address',
      footer_address_value: 'Rua do Aviador, 261 - Carianos. Florianópolis/SC',
      footer_domain: 'Domain',
      footer_domain_value: 'altnixtecnologia.info (soon .com.br)',
      footer_copy: '© 2026 Altnix Tecnologia. All rights reserved.',
      footer_terms: 'Terms',
      footer_privacy: 'Privacy',
      cta_whatsapp: 'Chat on WhatsApp',
      cta_demo_now: 'Talk to a specialist',
      cta_test_bot: 'See how it works',
      cta_schedule_demo: 'Request technical validation',
      cta_buy_now: 'Request proposal',
      cta_talk_team: 'Talk to the team',
      bot_msg_hello: 'Welcome to Altnix. This is a service simulation showing how technology organizes customer contact in real time. To personalize the experience, what is your name?',
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
        body: 'Atendimento organizado, solicitações claras e comunicação contínua.'
      },
      empresa: {
        title: 'Empresas',
        body: 'Organização de pedidos, suporte interno e direcionamento por setor.'
      },
      residencia: {
        title: 'Residências',
        body: 'Agendamentos, solicitações e respostas rápidas com organização.'
      }
    },
    en: {
      condominio: {
        title: 'Condominiums',
        body: 'Organized service, clear requests, and continuous communication.'
      },
      empresa: {
        title: 'Businesses',
        body: 'Order organization, internal support, and team routing.'
      },
      residencia: {
        title: 'Residences',
        body: 'Scheduling, requests, and fast responses with organization.'
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

  const syncBotHeight = () => {
    const botCopy = document.querySelector('.bot-copy');
    const stageGrid = botCopy ? botCopy.querySelector('.stage-grid') : null;
    const botShell = document.querySelector('.bot-shell');
    if (!botCopy || !botShell || !stageGrid) {
      return;
    }
    if (window.innerWidth <= 980) {
      botShell.style.minHeight = '';
      botShell.style.marginTop = '';
      return;
    }
    const copyTop = botCopy.getBoundingClientRect().top;
    const stageTop = stageGrid.getBoundingClientRect().top;
    const offset = Math.max(0, stageTop - copyTop);
    botShell.style.marginTop = `${offset}px`;
    botShell.style.minHeight = `${stageGrid.offsetHeight}px`;
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
  syncBotHeight();
  window.addEventListener('resize', () => {
    updateHeaderOffset();
    syncBotHeight();
  });
  window.addEventListener('load', () => {
    updateHeaderOffset();
    syncBotHeight();
  });
  if (logoImg) {
    logoImg.addEventListener('load', () => {
      updateHeaderOffset();
      syncBotHeight();
    });
  }
});
