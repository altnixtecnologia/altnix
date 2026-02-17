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
      hero_eyebrow: 'Tecnologia para segurança e conversão',
      hero_title: 'Proteção e automação que vendem antes da concorrência.',
      hero_subtitle: 'Informática, segurança eletrônica e sistemas inteligentes com bots de WhatsApp. Do primeiro contato ao fechamento — com velocidade e confiança.',
      hero_stat_1: 'Resposta rápida',
      hero_stat_2: 'Instalação e manutenção',
      hero_stat_3: 'Soluções sob medida',
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
      bot_hint: 'Clique em iniciar e escolha uma opção numerada.',
      bot_start: 'Iniciar teste',
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
      process_step_2_title: 'Projeto',
      process_step_2_body: 'Desenhamos a solução sob medida.',
      process_step_3_title: 'Instalação',
      process_step_3_body: 'Implementação rápida com mínimo impacto.',
      process_step_4_title: 'Suporte contínuo',
      process_step_4_body: 'Monitoramento, ajustes e evolução.',
      cta_title: 'Pronto para vender e proteger melhor?',
      cta_subtitle: 'Ative sua estrutura agora e coloque o cliente em movimento.',
      cta_button_primary: 'Falar no WhatsApp',
      cta_button_secondary: 'Agendar demo',
      cta_button_tertiary: 'Comprar agora',
      footer_subtitle: 'Tecnologia aplicada à segurança e à conversão.',
      footer_contact: 'Contato',
      footer_domain: 'Domínio',
      cta_whatsapp: 'Falar no WhatsApp',
      cta_test_bot: 'Testar o bot',
      cta_schedule_demo: 'Agendar demo',
      cta_buy_now: 'Comprar agora',
      cta_talk_team: 'Falar com a equipe',
      bot_msg_hello: 'Olá! Sou o bot teste da Altnix.',
      bot_msg_prompt: 'Escolha uma opção numerada para simular o atendimento.',
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
      hero_eyebrow: 'Technology for security and conversion',
      hero_title: 'Protection and automation that sell before the competition.',
      hero_subtitle: 'IT, electronic security, and intelligent systems with WhatsApp bots. From first contact to close — fast and reliable.',
      hero_stat_1: 'Fast response',
      hero_stat_2: 'Install & maintenance',
      hero_stat_3: 'Tailored solutions',
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
      bot_hint: 'Click start and choose a numbered option.',
      bot_start: 'Start test',
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
      process_step_2_title: 'Project',
      process_step_2_body: 'We design a tailored solution.',
      process_step_3_title: 'Installation',
      process_step_3_body: 'Fast implementation with minimal impact.',
      process_step_4_title: 'Continuous support',
      process_step_4_body: 'Monitoring, adjustments, and evolution.',
      cta_title: 'Ready to sell and protect better?',
      cta_subtitle: 'Activate your structure now and keep the customer moving.',
      cta_button_primary: 'Chat on WhatsApp',
      cta_button_secondary: 'Schedule demo',
      cta_button_tertiary: 'Buy now',
      footer_subtitle: 'Technology applied to security and conversion.',
      footer_contact: 'Contact',
      footer_domain: 'Domain',
      cta_whatsapp: 'Chat on WhatsApp',
      cta_test_bot: 'Test the bot',
      cta_schedule_demo: 'Schedule demo',
      cta_buy_now: 'Buy now',
      cta_talk_team: 'Talk to the team',
      bot_msg_hello: 'Hi! I am the Altnix test bot.',
      bot_msg_prompt: 'Choose a numbered option to simulate the service.',
      bot_reply_human: 'Connecting you to a specialist. WhatsApp or call?'
    }
  };

  const menus = {
    pt: {
      main: [
        { key: 'food', label: '1 - Pedido de comida' },
        { key: 'support', label: '2 - Suporte técnico' },
        { key: 'security', label: '3 - Segurança/alarme' },
        { key: 'human', label: '4 - Falar com humano' }
      ],
      food: [
        { key: 'food_pizza', label: '1 - Pizza' },
        { key: 'food_burger', label: '2 - Hambúrguer' },
        { key: 'food_sushi', label: '3 - Sushi' },
        { key: 'back', label: '4 - Voltar' }
      ],
      food_confirm: [
        { key: 'food_confirm', label: '1 - Confirmar no WhatsApp' },
        { key: 'food_change', label: '2 - Trocar item' },
        { key: 'human', label: '3 - Falar com humano' },
        { key: 'back', label: '4 - Voltar ao menu' }
      ],
      support: [
        { key: 'support_internet', label: '1 - Internet lenta' },
        { key: 'support_system', label: '2 - Sistema parou' },
        { key: 'support_cameras', label: '3 - Câmeras offline' },
        { key: 'back', label: '4 - Voltar' }
      ],
      support_confirm: [
        { key: 'support_confirm', label: '1 - Abrir chamado no WhatsApp' },
        { key: 'support_change', label: '2 - Descrever outro problema' },
        { key: 'human', label: '3 - Falar com humano' },
        { key: 'back', label: '4 - Voltar ao menu' }
      ],
      security: [
        { key: 'sec_alarm', label: '1 - Disparo de alarme' },
        { key: 'sec_camera', label: '2 - Câmera com falha' },
        { key: 'sec_install', label: '3 - Nova instalação' },
        { key: 'back', label: '4 - Voltar' }
      ],
      security_confirm: [
        { key: 'sec_confirm', label: '1 - Solicitar atendimento' },
        { key: 'sec_change', label: '2 - Outro assunto' },
        { key: 'human', label: '3 - Falar com humano' },
        { key: 'back', label: '4 - Voltar ao menu' }
      ]
    },
    en: {
      main: [
        { key: 'food', label: '1 - Food order' },
        { key: 'support', label: '2 - Tech support' },
        { key: 'security', label: '3 - Security/alarm' },
        { key: 'human', label: '4 - Talk to a person' }
      ],
      food: [
        { key: 'food_pizza', label: '1 - Pizza' },
        { key: 'food_burger', label: '2 - Burger' },
        { key: 'food_sushi', label: '3 - Sushi' },
        { key: 'back', label: '4 - Back' }
      ],
      food_confirm: [
        { key: 'food_confirm', label: '1 - Confirm on WhatsApp' },
        { key: 'food_change', label: '2 - Change item' },
        { key: 'human', label: '3 - Talk to a person' },
        { key: 'back', label: '4 - Back to menu' }
      ],
      support: [
        { key: 'support_internet', label: '1 - Slow internet' },
        { key: 'support_system', label: '2 - System down' },
        { key: 'support_cameras', label: '3 - Cameras offline' },
        { key: 'back', label: '4 - Back' }
      ],
      support_confirm: [
        { key: 'support_confirm', label: '1 - Open ticket on WhatsApp' },
        { key: 'support_change', label: '2 - Describe another issue' },
        { key: 'human', label: '3 - Talk to a person' },
        { key: 'back', label: '4 - Back to menu' }
      ],
      security: [
        { key: 'sec_alarm', label: '1 - Alarm triggered' },
        { key: 'sec_camera', label: '2 - Camera failure' },
        { key: 'sec_install', label: '3 - New installation' },
        { key: 'back', label: '4 - Back' }
      ],
      security_confirm: [
        { key: 'sec_confirm', label: '1 - Request service' },
        { key: 'sec_change', label: '2 - Another topic' },
        { key: 'human', label: '3 - Talk to a person' },
        { key: 'back', label: '4 - Back to menu' }
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
  const menuButtons = Array.from(document.querySelectorAll('[data-bot-index]'));
  const revealTargets = document.querySelectorAll(
    '.card, .stage-card, .step, .segment-panel, .mvi-panel, .hero-card, .bot-shell, .cta-card'
  );

  let currentLang = localStorage.getItem('altnix-lang') || 'pt';
  const whatsAppNumber = '5548991004780';
  let botStarted = false;
  let currentMenu = 'main';
  const botState = {
    flow: null,
    item: null
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

  const setMenu = (menuKey) => {
    const options = (menus[currentLang] && menus[currentLang][menuKey]) || [];
    currentMenu = menuKey;
    menuButtons.forEach((btn, idx) => {
      const option = options[idx];
      if (!option) {
        btn.style.display = 'none';
        btn.dataset.action = '';
        return;
      }
      btn.style.display = 'inline-flex';
      btn.textContent = option.label;
      btn.dataset.action = option.key;
    });
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
    setBotStatus('bot_status_ready');
    setMenu('main');
    appendMessage(i18n[currentLang].bot_msg_prompt, 'bot', true);
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
    setTimeout(() => {
      setBotStatus('bot_status_live');
      setMenu('main');
      queueMessages([
        { text: i18n[currentLang].bot_msg_hello, who: 'bot' },
        { text: i18n[currentLang].bot_msg_prompt, who: 'bot' }
      ]);
    }, 400);
  };

  const openWhatsApp = (text) => {
    const url = `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
  };

  const handleAction = (action) => {
    const run = () => {
      appendMessage(getOptionLabel(action), 'user');

      if (action === 'back') {
        queueMessages([{ text: currentLang === 'pt' ? 'Voltando ao menu principal.' : 'Back to main menu.', who: 'bot' }]);
        setMenu('main');
        return;
      }

      if (action === 'human') {
        queueMessages([{ text: i18n[currentLang].bot_reply_human, who: 'bot' }]);
        openWhatsApp(currentLang === 'pt' ? 'Quero falar com um especialista.' : 'I want to talk to a specialist.');
        setMenu('main');
        return;
      }

      if (action === 'food') {
        botState.flow = 'food';
        botState.item = null;
        queueMessages([{ text: currentLang === 'pt' ? 'Pedido de comida selecionado. Escolha o item:' : 'Food order selected. Choose an item:', who: 'bot' }]);
        setMenu('food');
        return;
      }

      if (action.startsWith('food_')) {
        const itemMap = {
          food_pizza: currentLang === 'pt' ? 'Pizza' : 'Pizza',
          food_burger: currentLang === 'pt' ? 'Hambúrguer' : 'Burger',
          food_sushi: currentLang === 'pt' ? 'Sushi' : 'Sushi'
        };
        botState.flow = 'food';
        botState.item = itemMap[action] || 'Item';
        const reply = currentLang === 'pt'
          ? `Pedido simulado: ${botState.item} + bebida. Tempo estimado 35 min.`
          : `Simulated order: ${botState.item} + drink. Estimated time 35 min.`;
        queueMessages([{ text: reply, who: 'bot' }]);
        setMenu('food_confirm');
        return;
      }

      if (action === 'food_confirm') {
        const text = currentLang === 'pt'
          ? `Pedido teste: ${botState.item || 'Item'} + bebida. Pode seguir?`
          : `Test order: ${botState.item || 'Item'} + drink. Can we proceed?`;
        queueMessages([{ text: currentLang === 'pt' ? 'Abrindo WhatsApp para confirmar o pedido.' : 'Opening WhatsApp to confirm the order.', who: 'bot' }]);
        openWhatsApp(text);
        setMenu('main');
        return;
      }

      if (action === 'food_change') {
        queueMessages([{ text: currentLang === 'pt' ? 'Tudo bem. Escolha outro item.' : 'Okay. Choose another item.', who: 'bot' }]);
        setMenu('food');
        return;
      }

      if (action === 'support') {
        botState.flow = 'support';
        botState.item = null;
        queueMessages([{ text: currentLang === 'pt' ? 'Suporte técnico selecionado. Qual problema?' : 'Tech support selected. What issue?', who: 'bot' }]);
        setMenu('support');
        return;
      }

      if (action.startsWith('support_') && action !== 'support_confirm' && action !== 'support_change') {
        const issueMap = {
          support_internet: currentLang === 'pt' ? 'Internet lenta' : 'Slow internet',
          support_system: currentLang === 'pt' ? 'Sistema parou' : 'System down',
          support_cameras: currentLang === 'pt' ? 'Câmeras offline' : 'Cameras offline'
        };
        botState.flow = 'support';
        botState.item = issueMap[action] || (currentLang === 'pt' ? 'Problema' : 'Issue');
        const reply = currentLang === 'pt'
          ? `Entendi. Abriremos um chamado para: ${botState.item}.`
          : `Got it. We'll open a ticket for: ${botState.item}.`;
        queueMessages([{ text: reply, who: 'bot' }]);
        setMenu('support_confirm');
        return;
      }

      if (action === 'support_confirm') {
        const text = currentLang === 'pt'
          ? `Suporte teste: ${botState.item || 'Problema'}.`
          : `Test support: ${botState.item || 'Issue'}.`;
        queueMessages([{ text: currentLang === 'pt' ? 'Abrindo WhatsApp para o chamado.' : 'Opening WhatsApp for the ticket.', who: 'bot' }]);
        openWhatsApp(text);
        setMenu('main');
        return;
      }

      if (action === 'support_change') {
        queueMessages([{ text: currentLang === 'pt' ? 'Descreva outro problema.' : 'Describe another issue.', who: 'bot' }]);
        setMenu('support');
        return;
      }

      if (action === 'security') {
        botState.flow = 'security';
        botState.item = null;
        queueMessages([{ text: currentLang === 'pt' ? 'Segurança selecionada. Qual situação?' : 'Security selected. Which situation?', who: 'bot' }]);
        setMenu('security');
        return;
      }

      if (action.startsWith('sec_') && action !== 'sec_confirm' && action !== 'sec_change') {
        const secMap = {
          sec_alarm: currentLang === 'pt' ? 'Disparo de alarme' : 'Alarm triggered',
          sec_camera: currentLang === 'pt' ? 'Câmera com falha' : 'Camera failure',
          sec_install: currentLang === 'pt' ? 'Nova instalação' : 'New installation'
        };
        botState.flow = 'security';
        botState.item = secMap[action] || (currentLang === 'pt' ? 'Solicitação' : 'Request');
        const reply = currentLang === 'pt'
          ? `Registro simulado: ${botState.item}.`
          : `Simulated ticket: ${botState.item}.`;
        queueMessages([{ text: reply, who: 'bot' }]);
        setMenu('security_confirm');
        return;
      }

      if (action === 'sec_confirm') {
        const text = currentLang === 'pt'
          ? `Segurança teste: ${botState.item || 'Solicitação'}.`
          : `Security test: ${botState.item || 'Request'}.`;
        queueMessages([{ text: currentLang === 'pt' ? 'Abrindo WhatsApp para atendimento.' : 'Opening WhatsApp for service.', who: 'bot' }]);
        openWhatsApp(text);
        setMenu('main');
        return;
      }

      if (action === 'sec_change') {
        queueMessages([{ text: currentLang === 'pt' ? 'Escolha outra opção de segurança.' : 'Choose another security option.', who: 'bot' }]);
        setMenu('security');
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

  setLang(currentLang);
  setupReveal();
  updateHeaderOffset();
  window.addEventListener('resize', updateHeaderOffset);
  window.addEventListener('load', updateHeaderOffset);
  if (logoImg) {
    logoImg.addEventListener('load', updateHeaderOffset);
  }
});
