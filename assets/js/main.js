// // Intersection Observer for fade-in
// const observer = new IntersectionObserver((entries) => {
// entries.forEach(e => {
//     if (e.isIntersecting) {
//     e.target.classList.add('visible');
//     observer.unobserve(e.target);
//     }
// });
// }, { threshold: 0.15 });

// document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// // Nav active state
// const sections = document.querySelectorAll('section[id]');
// const navLinks = document.querySelectorAll('.nav-links a');

// window.addEventListener('scroll', () => {
// let current = '';
// sections.forEach(s => {
//     if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id');
// });
// navLinks.forEach(a => {
//     a.style.color = a.getAttribute('href') === '#' + current
//     ? 'var(--cyan)' : '';
// });
// });


// =============================================
// main.js - Ozumaru Portfolio
// =============================================

// Animações de entrada do Hero + Terminal Typewriter
document.addEventListener("DOMContentLoaded", () => {

    // Elementos do Hero
    const heroTag = document.getElementById('hero-tag');
    const heroName = document.getElementById('hero-name');
    const heroTitle = document.getElementById('hero-title');
    const heroDesc = document.getElementById('hero-desc');
    const heroBtns = document.getElementById('hero-btns');
    const terminal = document.getElementById('terminal');

    if (!heroTag) return; // Proteção caso esteja em outra página

    // Sequência de animações
    setTimeout(() => { heroTag.style.opacity = 1; }, 400);
    setTimeout(() => { heroName.style.opacity = 1; }, 800);
    setTimeout(() => { heroTitle.style.opacity = 1; }, 1200);
    setTimeout(() => { heroDesc.style.opacity = 1; }, 1600);
    setTimeout(() => { heroBtns.style.opacity = 1; }, 2000);

    // Terminal aparece depois
    setTimeout(() => {
        terminal.style.transition = "all 0.8s ease-out";
        terminal.style.opacity = 1;
        terminal.style.transform = "translateY(0)";

        // Inicia o efeito de digitação
        startTypewriter();
    }, 2800);
});

// ======================
// TERMINAL BASH REALISTA - Sequencial
// ======================
function startTypewriter() {
    const terminal = document.getElementById('terminal');
    if (!terminal) return;

    // Elementos
    const cmdWhoami = document.getElementById('cmd-whoami');
    const outputWhoami = document.getElementById('output-whoami');
    const cmdCert = document.getElementById('cmd-cert');
    const outputCert = document.getElementById('output-cert');
    const finalCursor = document.getElementById('final-cursor');

    const textWhoami = "whoami";
    const resultWhoami = "Network Engineer → Python Developer → NetDevOps Practitioner";

    const textCert = "cat certifications.txt";
    const resultCert = "CCNA Routing & Switching | CCNA DevNet";

    let delay = 0;

    // 1. Digita primeiro comando: whoami
    setTimeout(() => {
        typeText(cmdWhoami, textWhoami, 40, () => {
            setTimeout(() => {
                outputWhoami.textContent = resultWhoami;
                outputWhoami.style.opacity = "1";
            }, 300);
        });
    }, delay += 600);

    // 2. Digita segundo comando: cat certifications.txt
    setTimeout(() => {
        typeText(cmdCert, textCert, 38, () => {
            setTimeout(() => {
                outputCert.textContent = resultCert;
                outputCert.style.opacity = "1";
            }, 350);
        });
    }, delay += 1800);

    // 3. Mostra prompt final com cursor piscando
    setTimeout(() => {
        finalCursor.style.animation = "blink 1s step-end infinite";
    }, delay += 1400);

}

// ======================
// Intersection Observer (para fade-in das seções)
// ======================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // observer.unobserve(entry.target); // opcional: remover após animar
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ======================
// Nav Active State
// ======================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    let current = '';

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = (link.getAttribute('href') === '#' + current) 
            ? 'var(--cyan)' 
            : '';
    });
});



// Função auxiliar para digitar texto letra por letra
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