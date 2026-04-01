// // =============================================
// // main.js - Ozumaru Portfolio
// // Versão Refatorada - 2026
// // =============================================

// document.addEventListener("DOMContentLoaded", () => {
    
//     initHeroAnimations();
//     initTerminal();
//     initIntersectionObserver();
//     initNavActiveState();

// });

// // =============================================
// // 1. Animações do Hero
// // =============================================
// function initHeroAnimations() {
//     const heroTag   = document.getElementById('hero-tag');
//     const heroName  = document.getElementById('hero-name');
//     const heroTitle = document.getElementById('hero-title');
//     const heroDesc  = document.getElementById('hero-desc');
//     const heroBtns  = document.getElementById('hero-btns');

//     if (!heroTag) return; // Proteção para outras páginas

//     // Sequência suave de aparição
//     setTimeout(() => heroTag.style.opacity   = 1,  400);
//     setTimeout(() => heroName.style.opacity  = 1,  800);
//     setTimeout(() => heroTitle.style.opacity = 1, 1200);
//     setTimeout(() => heroDesc.style.opacity  = 1, 1600);
//     setTimeout(() => heroBtns.style.opacity  = 1, 2000);
// }

// // =============================================
// // 2. Terminal Bash Realista (Linhas aparecem uma por uma)
// // =============================================
// function initTerminal() {
//     const terminal = document.getElementById('terminal');
//     if (!terminal) return;

//     // Torna o terminal visível e remove o deslocamento inicial
//     // terminal.style.opacity = '1';
//     // terminal.style.transform = 'translateY(0)';

//     const line1 = document.getElementById('line1');
//     const cmdWhoami = document.getElementById('cmd-whoami');
//     const outputWhoami = document.getElementById('output-whoami');

//     const line2 = document.getElementById('line2');
//     const cmdCert = document.getElementById('cmd-cert');
//     const outputCert = document.getElementById('output-cert');

//     const line3 = document.getElementById('line3');
//     const finalCursor = document.getElementById('final-cursor');

//     const textWhoami = "whoami";
//     const resultWhoami = "Network Engineer → Python Developer → NetDevOps Practitioner";

//     const textCert = "cat certifications.txt";
//     const resultCert = "CCNA Routing & Switching | CCNA DevNet";

//     let delay = 600;

//     // 1. Primeira linha
//     setTimeout(() => {
//         line1.style.opacity = "1";
//         typeText(cmdWhoami, textWhoami, 45, () => {
//             setTimeout(() => {
//                 outputWhoami.textContent = resultWhoami;
//                 outputWhoami.style.opacity = "1";
//             }, 450);
//         });
//     }, delay);

//     // 2. Segunda linha
//     delay += 1900;
//     setTimeout(() => {
//         line2.style.opacity = "1";
//         typeText(cmdCert, textCert, 42, () => {
//             setTimeout(() => {
//                 outputCert.textContent = resultCert;
//                 outputCert.style.opacity = "1";
//             }, 480);
//         });
//     }, delay);

//     // 3. Linha final com cursor
//     delay += 1850;
//     setTimeout(() => {
//         line3.style.opacity = "1";
//         finalCursor.style.animation = "blink 1s step-end infinite";
//     }, delay);
// }

// // =============================================
// // Função auxiliar para efeito typewriter
// // =============================================
// function typeText(element, text, speed, callback) {
//     let i = 0;
//     element.textContent = "";

//     const interval = setInterval(() => {
//         if (i < text.length) {
//             element.textContent += text.charAt(i);
//             i++;
//         } else {
//             clearInterval(interval);
//             if (callback) callback();
//         }
//     }, speed);
// }

// // =============================================
// // 3. Intersection Observer - Fade-in das seções
// // =============================================
// function initIntersectionObserver() {
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//             }
//         });
//     }, {
//         threshold: 0.15,
//         rootMargin: "0px 0px -60px 0px"
//     });

//     document.querySelectorAll('.fade-in').forEach(el => {
//         observer.observe(el);
//     });
// }

// // =============================================
// // 4. Nav Active State no Scroll
// // =============================================
// function initNavActiveState() {
//     window.addEventListener('scroll', () => {
//         const sections = document.querySelectorAll('section[id]');
//         const navLinks = document.querySelectorAll('.nav-links a');
//         let current = '';

//         sections.forEach(section => {
//             if (window.scrollY >= section.offsetTop - 220) {
//                 current = section.getAttribute('id');
//             }
//         });

//         navLinks.forEach(link => {
//             link.style.color = (link.getAttribute('href') === '#' + current) 
//                 ? 'var(--cyan)' 
//                 : '';
//         });
//     });
// }

// =============================================
// main.js - Ozumaru Portfolio
// Versão Refatorada - 2026
// =============================================

document.addEventListener("DOMContentLoaded", () => {
    
    initHeroAnimations();
    initTerminal();          // Agora aguarda o término do hero
    initIntersectionObserver();
    initNavActiveState();

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
    }, 1900); // pequena folga após o último elemento do hero
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

    let delay = 600;

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