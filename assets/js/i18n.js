// =============================================
// i18n.js — Language Toggle System
// Ozumaru Portfolio · 2026
// =============================================

const TRANSLATIONS = {
  en: {
    "nav.about":         "ABOUT",
    "nav.skills":        "SKILLS",
    "nav.projects":      "PROJECTS",
    "nav.certs":         "CERTS",
    "nav.contact":       "CONTACT",
    "hero.title":        "Infrastructure Analyst &amp; Network Automation",
    "hero.desc":         "Networks meet code. I build tools that automate the impossible —<br>from the command line to production dashboards.",
    "hero.btn_projects": "▸ VIEW PROJECTS",
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
    "projects.tag":      "CODE",
    "projects.title":    "Featured <span>Projects</span>",
    "projects.p1":       "Complete Cisco automation toolkit with Python + Netmiko. From the basics (SSH, simple commands) to CDP collection and CSV export.",
    "projects.p2":       "Automated backup, JSON interface reports and bulk VLAN creation. Strong emphasis on refactoring and coding best practices (OOP).",
    "projects.p3":       "Automatic inventory reconciliation engine. Syncs CSV ↔ NetBox with full hierarchical validations (Manufacturers, Roles, Models, Sites, Devices, MGMT IP, etc).",
    "projects.p4":       "Collection of shortcuts, snippets and optimized settings for developers working with Python and network automation.",
    "certs.title":       "Cisco <span>Certifications</span>",
    "contact.tag":       "CONTACT",
    "contact.title":     "Let's <span>Connect</span>",
    "contact.h3":        "Want to talk about NetDevOps?",
    "contact.p":         "Whether to collaborate on projects, discuss network automation or simply connect with someone from the same field — I'm here.",
    "footer.copy":       "© 2026 · José Osmar Caitano · São Paulo, BR · NetDevOps 🐦‍🔥"
  },
  pt: {
    "nav.about":         "SOBRE",
    "nav.skills":        "SKILLS",
    "nav.projects":      "PROJETOS",
    "nav.certs":         "CERTS",
    "nav.contact":       "CONTATO",
    "hero.title":        "Analista de Infraestrutura &amp; Automação de Redes",
    "hero.desc":         "Infraestrutura de redes encontra código. Construo ferramentas que automatizam<br>o impossível — da linha de comando ao dashboard em produção.",
    "hero.btn_projects": "▸ VER PROJETOS",
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
    "projects.tag":      "CÓDIGO",
    "projects.title":    "Projetos em <span>Destaque</span>",
    "projects.p1":       "Ferramentas completas de automação Cisco com Python + Netmiko. Do básico (SSH, comandos simples) até coleta de CDP e exportação em CSV.",
    "projects.p2":       "Backup automático, relatório de interfaces em JSON e criação de VLANs em massa. Forte ênfase em refatoração e boas práticas de código (POO).",
    "projects.p3":       "Motor de reconciliação automática de inventário. Sincroniza CSV ↔ NetBox com validações hierárquicas completas (Manufacturers, Roles, Models, Sites, Devices, MGMT IP, etc).",
    "projects.p4":       "Coleção de atalhos, snippets e configurações otimizadas para quem trabalha com Python e automação de redes.",
    "certs.title":       "Certificações <span>Cisco</span>",
    "contact.tag":       "CONTATO",
    "contact.title":     "Vamos <span>Conectar</span>",
    "contact.h3":        "Bora trocar ideia sobre NetDevOps?",
    "contact.p":         "Seja para colaborar em projetos, tirar dúvidas sobre automação de redes ou simplesmente conectar com alguém da mesma área — estou por aqui.",
    "footer.copy":       "© 2026 · José Osmar Caitano · São Paulo, BR · NetDevOps 🐦‍🔥"
  }
};

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
