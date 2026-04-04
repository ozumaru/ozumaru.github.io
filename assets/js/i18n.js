// =============================================
// i18n.js — Language Toggle System
// Ozumaru Portfolio · 2026
// Covers: index.html + all projects/ pages
// =============================================

const TRANSLATIONS = {
  en: {
    // ── NAV ──────────────────────────────────
    "nav.home":          "HOME",
    "nav.about":         "ABOUT",
    "nav.skills":        "SKILLS",
    "nav.projects":      "PROJECTS",
    "nav.certs":         "CERTS",
    "nav.contact":       "CONTACT",

    // ── HERO (index) ─────────────────────────
    "hero.title":        "Infrastructure Analyst &amp; Network Automation",
    "hero.desc":         "Networks meet code. I build tools that automate the impossible —<br>from the command line to production dashboards.",
    "hero.btn_projects": "▸ VIEW PROJECTS",

    // ── ABOUT (index) ────────────────────────
    "about.tag":         "ABOUT",
    "about.title":       "Who is <span>Ozumaru</span>?",
    "about.p1":          "Working with network infrastructure since <strong>2017</strong> — constantly evolving in the world of <strong>automation and programming</strong>. I learned Python to solve real day-to-day problems and now I share that journey.",
    "about.p2":          "My focus is the <strong>NetDevOps</strong> space: combining network knowledge with software development to build solutions that scale. Ansible, Netmiko, FastAPI, NetBox — tools I use at work every day.",
    "about.p3":          "Beyond projects, I run a <strong>YouTube channel</strong> where I share technical content about network automation — because the best way to learn is by teaching.",
    "about.quote":       "\"I am reborn with every challenge. The world may try to bring me down, but every fall is just the moment I awaken a new power. I don't walk… I advance.\"<br><br>— inspired by Sung Jin-Woo, Shadow Monarch",
    "about.stat1":       "Years in Networking",
    "about.stat2":       "Cisco Certifications",
    "about.stat3":       "GitHub Followers",
    "about.stat4":       "Repositories",

    // ── PROJECTS (index) ─────────────────────
    "projects.tag":      "CODE",
    "projects.title":    "Featured <span>Projects</span>",
    "projects.p1":       "Complete Cisco automation toolkit with Python + Netmiko. From the basics (SSH, simple commands) to CDP collection and CSV export.",
    "projects.p2":       "Automated backup, JSON interface reports and bulk VLAN creation. Strong emphasis on refactoring and coding best practices (OOP).",
    "projects.p3":       "Automatic inventory reconciliation engine. Syncs CSV ↔ NetBox with full hierarchical validations (Manufacturers, Roles, Models, Sites, Devices, MGMT IP, etc).",
    "projects.p4":       "Collection of shortcuts, snippets and optimized settings for developers working with Python and network automation.",

    // ── CERTS (index) ────────────────────────
    "certs.title":       "Cisco <span>Certifications</span>",

    // ── CONTACT (index) ──────────────────────
    "contact.tag":       "CONTACT",
    "contact.title":     "Let's <span>Connect</span>",
    "contact.h3":        "Want to talk about NetDevOps?",
    "contact.p":         "Whether to collaborate on projects, discuss network automation or simply connect with someone from the same field — I'm here.",

    // ── FOOTER ───────────────────────────────
    "footer.copy":       "© 2026 · José Osmar Caitano · São Paulo, BR · NetDevOps 🐦‍🔥",
    "footer.back":       "← Back to Home",

    // ── PROJECT: cisco-devnet-python ─────────
    "cdp.hero.title":    "Network automation from basics to advanced",
    "cdp.hero.desc":     "Complete repository to learn and apply Python in practice on Cisco infrastructure. From SSH access to structured data collection in CSV.",
    "cdp.hero.btn":      "VIEW ON GITHUB",
    "cdp.hero.back":     "← BACK TO PROJECTS",
    "cdp.section.tag":   "THE PROJECT",
    "cdp.section.title": "What you'll <span>find</span> here",
    "cdp.p1":            "This repository is a <strong>complete practical guide</strong> to Cisco network automation using Python. It was built for Network Engineers who want to move beyond the CLI and start automating real tasks.",
    "cdp.p2":            "You'll learn from the basics (file creation, timestamps, SSH connections) to more advanced scripts such as bulk VLAN creation, Loopbacks, P2P links and CDP data collection exported to CSV.",
    "cdp.struct.title":  "📁 Repository structure",
    "cdp.struct.li1":    "<strong>Documents/</strong> → Step-by-step guides in .md (basic to advanced)",
    "cdp.struct.li2":    "<strong>Projects/</strong> → Ready-to-use practical mini-projects",
    "cdp.struct.li3":    "Netmiko + pure Python",
    "cdp.feat.title":    "🚀 Main features",
    "cdp.feat1.title":   "SSH connection with Netmiko",
    "cdp.feat1.desc":    "Automated access to multiple switches/routers",
    "cdp.feat2.title":   "Bulk VLAN creation",
    "cdp.feat2.desc":    "Single command for dozens of VLANs",
    "cdp.feat3.title":   "Automatic Loopbacks & P2P",
    "cdp.feat3.desc":    "Full configuration and validation",
    "cdp.feat4.title":   "CDP Collection → CSV",
    "cdp.feat4.desc":    "Structured export of neighbor data",
    "cdp.btn.repo":      "ACCESS THE FULL REPOSITORY →",

    // ── PROJECT: cisco-first-project ─────────
    "cfp.hero.title":    "Project — Backup, Interfaces & VLANs",
    "cfp.hero.desc":     "Practical project: backup automation, interface reports and VLAN creation with strong emphasis on refactoring and reusable code.",
    "cfp.hero.btn":      "REPOSITORY ON GITHUB",
    "cfp.hero.btn2":     "VIEW \"PRIMEIRO\" FOLDER",
    "cfp.hero.back":     "← BACK",
    "cfp.section.tag":   "PROJECT 01",
    "cfp.section.title": "First <span>Practical Project</span>",
    "cfp.p1":            "This mini-project demonstrates the automation of three essential tasks on Cisco networks, with a focus on <strong>code refactoring</strong> to create clean, reusable and maintainable solutions.",
    "cfp.p2":            "Developed during Cisco's <strong>Women Rock IT (WRIT)</strong> initiative, the project teaches how to evolve from messy scripts to professional code using functions and instances (classes).",
    "cfp.tasks.title":   "🚀 The 3 Project Tasks",
    "cfp.task1.tag":     "// BACKUP",
    "cfp.task1.title":   "Backup Routine",
    "cfp.task1.desc":    "Automates configuration backup of Cisco devices in an organized and reusable way.",
    "cfp.task2.tag":     "// INTERFACE",
    "cfp.task2.title":   "Interface Report",
    "cfp.task2.desc":    "Generates detailed interface status report (GigabitEthernet, Loopback, VLAN) with JSON output.",
    "cfp.task3.tag":     "// VLAN",
    "cfp.task3.title":   "Bulk VLAN Creation",
    "cfp.task3.desc":    "Automatically applies VLANs and collects switch state before and after the configuration.",
    "cfp.refactor.title":"🔄 Refactoring Process",
    "cfp.refactor.li1":  "→ Creation of reusable functions",
    "cfp.refactor.li2":  "→ Use of instances (classes) to group common operations",
    "cfp.refactor.li3":  "→ Processing Cisco command output into structured JSON",
    "cfp.refactor.li4":  "→ State collection before/after changes",
    "cfp.refactor.li5":  "→ Reduced duplicate code and improved readability",
    "cfp.btn.repo":      "ACCESS THE PROJECT REPOSITORY →",

    // ── PROJECT: netbox-inventory-sync ────────
    "nbs.hero.title":    "Automatic Corporate Inventory Synchronization",
    "nbs.hero.desc":     "A reconciliation engine that keeps NetBox always consistent with the real network state, automatically syncing data from a CSV database with full hierarchical validations.",
    "nbs.hero.back":     "← BACK TO PROJECTS",
    "nbs.section.tag":   "INTERNAL PROJECT",
    "nbs.section.title": "NetBox <span>Inventory Reconciliation</span>",
    "nbs.p1":            "Advanced internal automation project developed to ensure <strong>full consistency</strong> of the network inventory in NetBox. It compares the desired state (CSV) with the current state in NetBox and performs all necessary creates and updates in a hierarchical and idempotent way.",
    "nbs.feat.title":    "✅ What the system does automatically",
    "nbs.feat1.title":   "Manufacturers",
    "nbs.feat1.desc":    "Creates manufacturers if they don't exist",
    "nbs.feat2.title":   "Device Roles",
    "nbs.feat2.desc":    "Creates roles (Switch, Router, etc.)",
    "nbs.feat3.title":   "Device Types (Models)",
    "nbs.feat3.desc":    "Creates equipment models",
    "nbs.feat4.title":   "Sites & Locations",
    "nbs.feat4.desc":    "Manages sites and locations",
    "nbs.feat5.title":   "Devices + MGMT Interface",
    "nbs.feat5.desc":    "Registers devices and management interface",
    "nbs.feat6.title":   "IPv4 Management",
    "nbs.feat6.desc":    "Configures management IP and sets it as Primary",
    "nbs.arch.title":    "🏗️ Layered Architecture",
    "nbs.arch.intro":    "<strong>Main project layers:</strong>",
    "nbs.arch.li1":      "<strong>API Connection</strong> — Secure and standardized REST requests",
    "nbs.arch.li2":      "<strong>Data Collection</strong> — CSV reading + full NetBox query",
    "nbs.arch.li3":      "<strong>Hierarchical Validation</strong> — Checks existence before creating (idempotent)",
    "nbs.arch.li4":      "<strong>Orchestration</strong> — Controlled flow in `main_netbox.py`",
    "nbs.status":        "STATUS: ACTIVE INTERNAL PROJECT",
    "nbs.status.desc":   "This project demonstrates my ability to build robust automation solutions with modular architecture, strong validations and deep NetBox integration.",
    "nbs.btn.back":      "BACK TO PROJECTS",

    // ── PROJECT: sublime-text-shortcuts ──────
    "sts.hero.title":    "Collection of Shortcuts and Settings for Network Engineers",
    "sts.hero.desc":     "Shortcuts I use daily to work faster with Python, network automation, device configuration and code editing.",
    "sts.hero.btn":      "VIEW ON GITHUB",
    "sts.hero.back":     "← BACK TO PROJECTS",
    "sts.section.tag":   "SHORTCUTS",
    "sts.section.title": "My Essential <span>Shortcuts</span>",
    "sts.p1":            "This is my personal collection of Sublime Text shortcuts, accumulated over the years working with Python, Ansible, network configurations and automation scripts.",
    "sts.p2":            "They were organized to make daily life easier for those who work with code and infrastructure.",
    "sts.col.shortcut":  "Shortcut",
    "sts.col.action":    "What it does",
    "sts.col.tip":       "Tip",
    "sts.col.desc":      "Description",
    "sts.basic.title":   "📋 Basic Editing",
    "sts.basic.1":       "Cut line or selection",
    "sts.basic.2":       "Copy",
    "sts.basic.3":       "Paste",
    "sts.basic.4":       "Duplicate line (loose cursor) or word (selected)",
    "sts.basic.5":       "Undo",
    "sts.basic.6":       "Redo (restore what was undone)",
    "sts.basic.7":       "Delete entire line (no selection needed)",
    "sts.search.title":  "🔍 Search, Multi-Selection and Cursors",
    "sts.search.1":      "Open search in current file",
    "sts.search.2":      "Select all occurrences of the word under cursor",
    "sts.search.3":      "Create cursors at all occurrences found in search",
    "sts.search.4":      "Create additional cursors at specific points (or open files in Side Bar)",
    "sts.search.5":      "Create cursor in line above/below",
    "sts.search.6":      "Vertical block selection (column mode)",
    "sts.nav.title":     "🎯 Advanced Selection and Navigation",
    "sts.nav.1":         "Select character by character",
    "sts.nav.2":         "Select whole word (jumps words)",
    "sts.nav.3":         "Move line (or block) up/down",
    "sts.sidebar.title": "📁 Side Bar and Groups",
    "sts.sidebar.1":     "Toggle Side Bar visibility",
    "sts.sidebar.2":     "Single group (back to single column)",
    "sts.sidebar.3":     "Split into 2 side groups (columns)",
    "sts.sidebar.4":     "Split into 3 side groups",
    "sts.sidebar.5":     "Split into 4 side groups",
    "sts.format.title":  "🔠 Formatting and Zoom",
    "sts.format.1":      "Transform selection to UPPERCASE",
    "sts.format.2":      "Transform selection to lowercase",
    "sts.format.3":      "Zoom in / Zoom out (increase/decrease font size)",
    "sts.tips.title":    "💡 Productivity Tips",
    "sts.tips.1":        "Auto-complete words already in the text (use arrows to choose)",
    "sts.tips.2":        "Space = single character; Tab = cell advance (useful for tabular data)",
    "sts.tips.3":        "With Side Bar open, click files with CTRL to open in new tab",
    "sts.btn.repo":      "VIEW FULL LIST ON GITHUB →"
  },

  pt: {
    // ── NAV ──────────────────────────────────
    "nav.home":          "HOME",
    "nav.about":         "SOBRE",
    "nav.skills":        "SKILLS",
    "nav.projects":      "PROJETOS",
    "nav.certs":         "CERTS",
    "nav.contact":       "CONTATO",

    // ── HERO (index) ─────────────────────────
    "hero.title":        "Analista de Infraestrutura &amp; Automação de Redes",
    "hero.desc":         "Infraestrutura de redes encontra código. Construo ferramentas que automatizam<br>o impossível — da linha de comando ao dashboard em produção.",
    "hero.btn_projects": "▸ VER PROJETOS",

    // ── ABOUT (index) ────────────────────────
    "about.tag":         "SOBRE",
    "about.title":       "Quem é o <span>Ozumaru</span>?",
    "about.p1":          "Desde <strong>2017</strong> trabalhando com infraestrutura de redes — e em constante evolução no mundo da <strong>automação e programação</strong>. Aprendi Python para resolver problemas reais do dia a dia e agora compartilho essa jornada.",
    "about.p2":          "Meu foco é o universo <strong>NetDevOps</strong>: unir o conhecimento de redes com desenvolvimento de software para criar soluções que escalam. Ansible, Netmiko, FastAPI, NetBox — ferramentas que uso no trabalho todo dia.",
    "about.p3":          "Além dos projetos, mantenho um <strong>canal no YouTube</strong> onde compartilho conteúdo técnico sobre automação de redes — porque o melhor jeito de aprender é ensinando.",
    "about.quote":       "\"Eu renasço a cada desafio. O mundo pode tentar me derrubar, mas toda queda é apenas o momento em que desperto um novo poder. Eu não caminho… eu avanço.\"<br><br>— inspirado em Sung Jin-Woo, Shadow Monarch",
    "about.stat1":       "Anos em Redes",
    "about.stat2":       "Certificações Cisco",
    "about.stat3":       "GitHub Followers",
    "about.stat4":       "Repositórios",

    // ── PROJECTS (index) ─────────────────────
    "projects.tag":      "CÓDIGO",
    "projects.title":    "Projetos em <span>Destaque</span>",
    "projects.p1":       "Ferramentas completas de automação Cisco com Python + Netmiko. Do básico (SSH, comandos simples) até coleta de CDP e exportação em CSV.",
    "projects.p2":       "Backup automático, relatório de interfaces em JSON e criação de VLANs em massa. Forte ênfase em refatoração e boas práticas de código (POO).",
    "projects.p3":       "Motor de reconciliação automática de inventário. Sincroniza CSV ↔ NetBox com validações hierárquicas completas (Manufacturers, Roles, Models, Sites, Devices, MGMT IP, etc).",
    "projects.p4":       "Coleção de atalhos, snippets e configurações otimizadas para quem trabalha com Python e automação de redes.",

    // ── CERTS (index) ────────────────────────
    "certs.title":       "Certificações <span>Cisco</span>",

    // ── CONTACT (index) ──────────────────────
    "contact.tag":       "CONTATO",
    "contact.title":     "Vamos <span>Conectar</span>",
    "contact.h3":        "Bora trocar ideia sobre NetDevOps?",
    "contact.p":         "Seja para colaborar em projetos, tirar dúvidas sobre automação de redes ou simplesmente conectar com alguém da mesma área — estou por aqui.",

    // ── FOOTER ───────────────────────────────
    "footer.copy":       "© 2026 · José Osmar Caitano · São Paulo, BR · NetDevOps 🐦‍🔥",
    "footer.back":       "← Voltar para Home",

    // ── PROJECT: cisco-devnet-python ─────────
    "cdp.hero.title":    "Automação de redes do básico ao avançado",
    "cdp.hero.desc":     "Repositório completo para aprender e aplicar Python na prática em infraestrutura Cisco. Do acesso SSH até coleta estruturada de dados em CSV.",
    "cdp.hero.btn":      "VER NO GITHUB",
    "cdp.hero.back":     "← VOLTAR AOS PROJETOS",
    "cdp.section.tag":   "O PROJETO",
    "cdp.section.title": "O que você vai <span>encontrar</span> aqui",
    "cdp.p1":            "Este repositório é um <strong>guia prático completo</strong> de automação de redes Cisco usando Python. Foi feito pensando em Network Engineers que querem sair do \"clicar no CLI\" e começar a automatizar tarefas reais.",
    "cdp.p2":            "Você vai aprender desde o básico (criar arquivos, usar data/hora, conexão SSH) até scripts mais avançados como criação de VLANs em massa, Loopbacks, links P2P e coleta de informações CDP exportadas em CSV.",
    "cdp.struct.title":  "📁 Estrutura do repositório",
    "cdp.struct.li1":    "<strong>Documents/</strong> → Passo a passo em .md (do básico ao avançado)",
    "cdp.struct.li2":    "<strong>Projetos/</strong> → Mini-projetos práticos prontos para usar",
    "cdp.struct.li3":    "Netmiko + Python puro",
    "cdp.feat.title":    "🚀 Principais funcionalidades",
    "cdp.feat1.title":   "Conexão SSH com Netmiko",
    "cdp.feat1.desc":    "Acesso automático a múltiplos switches/routers",
    "cdp.feat2.title":   "Criação de VLANs em massa",
    "cdp.feat2.desc":    "Comando único para dezenas de VLANs",
    "cdp.feat3.title":   "Loopbacks e P2P automáticos",
    "cdp.feat3.desc":    "Configuração e validação completa",
    "cdp.feat4.title":   "Coleta de CDP → CSV",
    "cdp.feat4.desc":    "Exportação estruturada de vizinhança",
    "cdp.btn.repo":      "ACESSAR O REPOSITÓRIO COMPLETO →",

    // ── PROJECT: cisco-first-project ─────────
    "cfp.hero.title":    "Projeto — Backup, Interfaces & VLANs",
    "cfp.hero.desc":     "Projeto prático: automação de backup, relatório de interfaces e criação de VLANs com forte ênfase em refatoração e código reutilizável.",
    "cfp.hero.btn":      "REPOSITÓRIO NO GITHUB",
    "cfp.hero.btn2":     "VER PASTA \"PRIMEIRO\"",
    "cfp.hero.back":     "← VOLTAR",
    "cfp.section.tag":   "PROJETO 01",
    "cfp.section.title": "Primeiro <span>Projeto Prático</span>",
    "cfp.p1":            "Este mini-projeto demonstra a automação de três tarefas essenciais em redes Cisco, com foco em <strong>refatoração de código</strong> para criar soluções limpas, reutilizáveis e fáceis de manter.",
    "cfp.p2":            "Desenvolvido durante a iniciativa <strong>Women Rock IT (WRIT)</strong> da Cisco, o projeto ensina a passar de scripts \"bagunçados\" para código profissional usando funções e instâncias (classes).",
    "cfp.tasks.title":   "🚀 As 3 Tarefas do Projeto",
    "cfp.task1.tag":     "// BACKUP",
    "cfp.task1.title":   "Rotina de Backup",
    "cfp.task1.desc":    "Automatiza o backup de configuração de dispositivos Cisco de forma organizada e reutilizável.",
    "cfp.task2.tag":     "// INTERFACE",
    "cfp.task2.title":   "Relatório de Interfaces",
    "cfp.task2.desc":    "Gera relatório detalhado de status de interfaces (GigabitEthernet, Loopback, VLAN) com saída em JSON.",
    "cfp.task3.tag":     "// VLAN",
    "cfp.task3.title":   "Criação de VLANs em Massa",
    "cfp.task3.desc":    "Aplica VLANs automaticamente e coleta o estado do switch antes e depois da configuração.",
    "cfp.refactor.title":"🔄 Processo de Refatoração",
    "cfp.refactor.li1":  "→ Criação de funções reutilizáveis",
    "cfp.refactor.li2":  "→ Uso de instâncias (classes) para agrupar operações comuns",
    "cfp.refactor.li3":  "→ Tratamento de saída de comandos Cisco para JSON estruturado",
    "cfp.refactor.li4":  "→ Coleta de estado antes/depois das alterações",
    "cfp.refactor.li5":  "→ Redução de código duplicado e melhoria na legibilidade",
    "cfp.btn.repo":      "ACESSAR O REPOSITÓRIO DO PROJETO →",

    // ── PROJECT: netbox-inventory-sync ────────
    "nbs.hero.title":    "Sincronização Automática de Inventário Corporativo",
    "nbs.hero.desc":     "Motor de reconciliação que mantém o NetBox sempre consistente com a realidade da rede, sincronizando automaticamente dados de um banco CSV com validações hierárquicas completas.",
    "nbs.hero.back":     "← VOLTAR AOS PROJETOS",
    "nbs.section.tag":   "PROJETO INTERNO",
    "nbs.section.title": "Reconciliação de <span>Inventário NetBox</span>",
    "nbs.p1":            "Projeto interno de automação avançada desenvolvido para garantir <strong>consistência total</strong> do inventário de rede no NetBox. Ele compara o estado desejado (CSV) com o estado atual no NetBox e realiza todas as criações e atualizações necessárias de forma hierárquica e idempotente.",
    "nbs.feat.title":    "✅ O que o sistema faz automaticamente",
    "nbs.feat1.title":   "Manufacturers",
    "nbs.feat1.desc":    "Cria fabricantes se não existirem",
    "nbs.feat2.title":   "Device Roles",
    "nbs.feat2.desc":    "Cria papéis (Switch, Router, etc.)",
    "nbs.feat3.title":   "Device Types (Models)",
    "nbs.feat3.desc":    "Cria modelos de equipamentos",
    "nbs.feat4.title":   "Sites & Locations",
    "nbs.feat4.desc":    "Gerencia sites e localidades",
    "nbs.feat5.title":   "Devices + MGMT Interface",
    "nbs.feat5.desc":    "Cadastra dispositivos e interface de gerenciamento",
    "nbs.feat6.title":   "IPv4 Management",
    "nbs.feat6.desc":    "Configura IP de gerenciamento e define como Primary",
    "nbs.arch.title":    "🏗️ Arquitetura em Camadas",
    "nbs.arch.intro":    "<strong>Camadas principais do projeto:</strong>",
    "nbs.arch.li1":      "<strong>Conexão API</strong> — Requisições REST seguras e padronizadas",
    "nbs.arch.li2":      "<strong>Coleta de Dados</strong> — Leitura do CSV + consulta completa no NetBox",
    "nbs.arch.li3":      "<strong>Validação Hierárquica</strong> — Verifica existência antes de criar (idempotente)",
    "nbs.arch.li4":      "<strong>Orquestração</strong> — Fluxo controlado em `main_netbox.py`",
    "nbs.status":        "STATUS: PROJETO INTERNO ATIVO",
    "nbs.status.desc":   "Este projeto demonstra minha capacidade de construir soluções de automação robustas, com arquitetura modular, validações fortes e integração profunda com NetBox.",
    "nbs.btn.back":      "VOLTAR PARA PROJETOS",

    // ── PROJECT: sublime-text-shortcuts ──────
    "sts.hero.title":    "Coleção de Atalhos e Configurações para Network Engineers",
    "sts.hero.desc":     "Atalhos que uso no dia a dia para trabalhar mais rápido com Python, automação de redes, configuração de dispositivos e edição de código.",
    "sts.hero.btn":      "VER NO GITHUB",
    "sts.hero.back":     "← VOLTAR AOS PROJETOS",
    "sts.section.tag":   "ATALHOS",
    "sts.section.title": "Meus Atalhos <span>Essenciais</span>",
    "sts.p1":            "Esta é a minha coleção pessoal de atalhos do Sublime Text, acumulada ao longo dos anos trabalhando com Python, Ansible, configurações de rede e scripts de automação.",
    "sts.p2":            "Eles foram organizados para facilitar o dia a dia de quem trabalha com código e infraestrutura.",
    "sts.col.shortcut":  "Atalho",
    "sts.col.action":    "O que faz",
    "sts.col.tip":       "Dica",
    "sts.col.desc":      "Descrição",
    "sts.basic.title":   "📋 Edição Básica",
    "sts.basic.1":       "Recortar linha ou seleção",
    "sts.basic.2":       "Copiar",
    "sts.basic.3":       "Colar",
    "sts.basic.4":       "Duplicar linha (cursor solto) ou palavra (selecionada)",
    "sts.basic.5":       "Desfazer",
    "sts.basic.6":       "Refazer (retornar o que foi desfeito)",
    "sts.basic.7":       "Apagar linha inteira (sem seleção)",
    "sts.search.title":  "🔍 Busca, Seleção Múltipla e Cursores",
    "sts.search.1":      "Abrir busca no arquivo atual",
    "sts.search.2":      "Seleciona todas as ocorrências da palavra sob o cursor",
    "sts.search.3":      "Cria cursores em todas as ocorrências encontradas na busca",
    "sts.search.4":      "Cria cursores adicionais em pontos específicos (ou abre arquivos na Side Bar)",
    "sts.search.5":      "Cria cursor na linha acima/abaixo",
    "sts.search.6":      "Seleção vertical em bloco (modo coluna)",
    "sts.nav.title":     "🎯 Seleção e Movimentação Avançada",
    "sts.nav.1":         "Selecionar caractere a caractere",
    "sts.nav.2":         "Selecionar palavra inteira (pula palavras)",
    "sts.nav.3":         "Mover linha (ou bloco) para cima/baixo",
    "sts.sidebar.title": "📁 Side Bar e Grupos",
    "sts.sidebar.1":     "Alternar visibilidade da Side Bar",
    "sts.sidebar.2":     "Grupo único (voltar para única coluna)",
    "sts.sidebar.3":     "Dividir em 2 grupos laterais (colunas)",
    "sts.sidebar.4":     "Dividir em 3 grupos laterais",
    "sts.sidebar.5":     "Dividir em 4 grupos laterais",
    "sts.format.title":  "🔠 Formatação e Zoom",
    "sts.format.1":      "Transformar seleção em MAIÚSCULAS (Uppercase)",
    "sts.format.2":      "Transformar seleção em minúsculas (Lowercase)",
    "sts.format.3":      "Zoom in / Zoom out (aumenta/diminui fonte)",
    "sts.tips.title":    "💡 Dicas de Produtividade",
    "sts.tips.1":        "Auto-completar palavras já existentes no texto (usar setas para escolher)",
    "sts.tips.2":        "Espaço = caractere simples; Tab = avanço de célula (útil para dados tabulares)",
    "sts.tips.3":        "Com Side Bar aberta, clique em arquivos com CTRL para abrir em nova guia",
    "sts.btn.repo":      "VER LISTA COMPLETA NO GITHUB →"
  }
};

// ─────────────────────────────────────────────
// Core
// ─────────────────────────────────────────────
let currentLang = localStorage.getItem('ozumaru_lang') || 'en';

function applyLanguage(lang) {
  const t = TRANSLATIONS[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.documentElement.lang = lang;

  const btn = document.getElementById('lang-toggle');
  if (btn) {
    if (lang === 'en') {
      btn.innerHTML = '<span class="lang-flag">🇧🇷</span><span class="lang-label">PT</span>';
      btn.title = 'Mudar para Português';
    } else {
      btn.innerHTML = '<span class="lang-flag">🇺🇸</span><span class="lang-label">EN</span>';
      btn.title = 'Switch to English';
    }
  }

  currentLang = lang;
  localStorage.setItem('ozumaru_lang', lang);
}

function initLangToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'pt' : 'en');
  });
  applyLanguage(currentLang);
}

document.addEventListener('DOMContentLoaded', initLangToggle);
