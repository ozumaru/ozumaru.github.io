// =============================================
// main.js - Ozumaru Portfolio
// Versão Refatorada - 2026
// =============================================

document.addEventListener("DOMContentLoaded", () => {
    
    initHeroAnimations();
    initTerminal();          // Agora aguarda o término do hero
    initIntersectionObserver();
    initNavActiveState();
    initStarfield();   // <--- NOVA LINHA
});

// =============================================
// 1. Animações do Hero
// =============================================
function initHeroAnimations() {
    const heroTag   = document.getElementById('hero-tag');
    const heroName  = document.getElementById('hero-name');
    const heroTitle = document.getElementById('hero-title');
    const heroDesc  = document.getElementById('hero-desc');
    const heroBtns  = document.getElementById('hero-btns');

    if (!heroTag) return; // Proteção para outras páginas

    // Sequência suave de aparição
    setTimeout(() => heroTag.style.opacity   = 1,  400);
    setTimeout(() => heroName.style.opacity  = 1,  800);
    setTimeout(() => heroTitle.style.opacity = 1, 1200);
    setTimeout(() => heroDesc.style.opacity  = 1, 1600);
    setTimeout(() => heroBtns.style.opacity  = 1, 2000);
}

// =============================================
// 2. Terminal Bash Realista
// Agora só aparece depois que o hero terminar
// =============================================
function initTerminal() {
    const terminal = document.getElementById('terminal');
    if (!terminal) return;

    // Aguarda as animações do hero terminarem (último em 2000ms)
    setTimeout(() => {
        // 1. Torna o terminal visível
        terminal.style.opacity = '1';
        terminal.style.transform = 'translateY(0)';

        // 2. Inicia a digitação linha a linha
        startTerminalLines();
    }, 1200); // pequena folga após o último elemento do hero
}

function startTerminalLines() {
    const line1 = document.getElementById('line1');
    const cmdWhoami = document.getElementById('cmd-whoami');
    const outputWhoami = document.getElementById('output-whoami');

    const line2 = document.getElementById('line2');
    const cmdCert = document.getElementById('cmd-cert');
    const outputCert = document.getElementById('output-cert');

    const line3 = document.getElementById('line3');
    const finalCursor = document.getElementById('final-cursor');

    // Textos do terminal
    const textWhoami = "whoami";
    const resultWhoami = "Network Engineer → Python Developer → NetDevOps Practitioner";

    const textCert = "cat certifications.txt";
    const resultCert = "CCNA Routing & Switching | CCNA DevNet";

    let delay = 300;
    // let delay = 600;

    // 1. Primeira linha
    setTimeout(() => {
        line1.style.opacity = "1";
        typeText(cmdWhoami, textWhoami, 45, () => {
            setTimeout(() => {
                outputWhoami.textContent = resultWhoami;
                outputWhoami.style.opacity = "1";
            }, 450);
        });
    }, delay);

    // 2. Segunda linha
    delay += 1900;
    setTimeout(() => {
        line2.style.opacity = "1";
        typeText(cmdCert, textCert, 42, () => {
            setTimeout(() => {
                outputCert.textContent = resultCert;
                outputCert.style.opacity = "1";
            }, 480);
        });
    }, delay);

    // 3. Linha final com cursor piscando
    delay += 1850;
    setTimeout(() => {
        line3.style.opacity = "1";
        finalCursor.style.animation = "blink 1s step-end infinite";
    }, delay);
}

// =============================================
// Função auxiliar para efeito typewriter
// =============================================
function typeText(element, text, speed, callback) {
    let i = 0;
    element.textContent = "";

    const interval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            if (callback) callback();
        }
    }, speed);
}

// =============================================
// 3. Intersection Observer - Fade-in das seções
// =============================================
function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px"
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// =============================================
// 4. Nav Active State no Scroll
// =============================================
function initNavActiveState() {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        let current = '';

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 220) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = (link.getAttribute('href') === '#' + current) 
                ? 'var(--cyan)' 
                : '';
        });
    });
}

// =============================================
// 5. Starfield com estrelas cadentes
// =============================================
function initStarfield() {
    // Cria o canvas e insere antes do grid-bg
    const canvas = document.createElement('canvas');
    canvas.id = 'star-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    
    // Insere no início do body (antes do grid-bg)
    const body = document.body;
    body.insertBefore(canvas, body.firstChild);
    
    const ctx = canvas.getContext('2d');
    let width, height;
    let stars = [];
    let shootingStars = [];
    
    // Configurações
    const STAR_COUNT = 300;
    const SHOOTING_STAR_PROB = 0.02; // chance por frame de gerar uma cadente
    
    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initStars();
    }
    
    function initStars() {
        stars = [];
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 2 + 1,
                alpha: Math.random() * 0.6 + 0.2
            });
        }
    }
    
    function drawStars() {
        for (let s of stars) {
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
            ctx.fill();
        }
    }
    
    function addShootingStar() {
        // Origem aleatória no topo ou laterais
        const fromX = Math.random() * width;
        const fromY = Math.random() * height * 0.3; // só na parte superior
        const angle = Math.PI / 4 + (Math.random() - 0.5) * Math.PI / 6; // ~45° com variação
        const speed = Math.random() * 8 + 5;
        const length = Math.random() * 60 + 40;
        shootingStars.push({
            x: fromX,
            y: fromY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            length: length,
            life: 1.0,
            maxLife: 1.0
        });
    }
    
    function updateShootingStars() {
        for (let i = shootingStars.length-1; i >= 0; i--) {
            const s = shootingStars[i];
            s.x += s.vx;
            s.y += s.vy;
            s.life -= 0.02;
            if (s.x > width + 200 || s.x < -200 || s.y > height + 200 || s.life <= 0) {
                shootingStars.splice(i,1);
                continue;
            }
            // Desenha a estrela cadente (linha com gradiente)
            const tailX = s.x - s.vx * (s.length / Math.hypot(s.vx, s.vy));
            const tailY = s.y - s.vy * (s.length / Math.hypot(s.vx, s.vy));
            const gradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
            gradient.addColorStop(0, `rgba(255, 255, 255, ${s.life * 0.9})`);
            gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(tailX, tailY);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.stroke();
            // Ponto brilhante na cabeça
            ctx.beginPath();
            ctx.arc(s.x, s.y, 2, 0, Math.PI*2);
            ctx.fillStyle = `rgba(255, 255, 200, ${s.life})`;
            ctx.fill();
        }
    }
    
    function animate() {
        if (!canvas.isConnected) return;
        ctx.clearRect(0, 0, width, height);
        drawStars();
        updateShootingStars();
        
        // Gerar novas cadentes aleatoriamente
        if (Math.random() < SHOOTING_STAR_PROB && shootingStars.length < 5) {
            addShootingStar();
        }
        
        requestAnimationFrame(animate);
    }
    
    window.addEventListener('resize', () => {
        resizeCanvas();
    });
    resizeCanvas();
    animate();
}

// Adicione a chamada no DOMContentLoaded
// (dentro do event listener existente, adicione a linha:)
// initStarfield();

