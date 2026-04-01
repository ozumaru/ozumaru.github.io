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


// // =============================================
// // main.js - Ozumaru Portfolio
// // =============================================

// // Animações de entrada do Hero + Terminal Typewriter
// document.addEventListener("DOMContentLoaded", () => {

//     // Elementos do Hero
//     const heroTag = document.getElementById('hero-tag');
//     const heroName = document.getElementById('hero-name');
//     const heroTitle = document.getElementById('hero-title');
//     const heroDesc = document.getElementById('hero-desc');
//     const heroBtns = document.getElementById('hero-btns');
//     const terminal = document.getElementById('terminal');

//     if (!heroTag) return; // Proteção caso esteja em outra página

//     // Sequência de animações
//     setTimeout(() => { heroTag.style.opacity = 1; }, 400);
//     setTimeout(() => { heroName.style.opacity = 1; }, 800);
//     setTimeout(() => { heroTitle.style.opacity = 1; }, 1200);
//     setTimeout(() => { heroDesc.style.opacity = 1; }, 1600);
//     setTimeout(() => { heroBtns.style.opacity = 1; }, 2000);

//     // Terminal aparece depois
//     setTimeout(() => {
//         terminal.style.transition = "all 0.8s ease-out";
//         terminal.style.opacity = 1;
//         terminal.style.transform = "translateY(0)";

//         // Inicia o efeito de digitação
//         startTypewriter();
//     }, 2800);
// });

// // ======================
// // Typewriter Effect
// // ======================
// function startTypewriter() {
//     const whoamiText = "Network Engineer → Python Developer → NetDevOps Practitioner";
//     const certText   = "CCNA Routing & Switching | CCNA DevNet";

//     const whoamiEl = document.getElementById('whoami-output');
//     const certEl   = document.getElementById('cert-output');
//     const cursor   = document.getElementById('cursor');

//     if (!whoamiEl || !certEl) return;

//     let i = 0;
//     let j = 0;

//     function typeWhoami() {
//         if (i < whoamiText.length) {
//             whoamiEl.textContent += whoamiText.charAt(i);
//             i++;
//             setTimeout(typeWhoami, 35);
//         } else {
//             setTimeout(typeCert, 600);
//         }
//     }

//     function typeCert() {
//         if (j < certText.length) {
//             certEl.textContent += certText.charAt(j);
//             j++;
//             setTimeout(typeCert, 28);
//         } else {
//             // Mantém o cursor piscando no final
//             cursor.style.animation = "blink 1s step-end infinite";
//         }
//     }

//     typeWhoami();
// }

// // ======================
// // Intersection Observer (para fade-in das seções)
// // ======================
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//             // observer.unobserve(entry.target); // opcional: remover após animar
//         }
//     });
// }, {
//     threshold: 0.15,
//     rootMargin: "0px 0px -50px 0px"
// });

// document.querySelectorAll('.fade-in').forEach(el => {
//     observer.observe(el);
// });

// // ======================
// // Nav Active State
// // ======================
// window.addEventListener('scroll', () => {
//     const sections = document.querySelectorAll('section[id]');
//     const navLinks = document.querySelectorAll('.nav-links a');
//     let current = '';

//     sections.forEach(section => {
//         if (window.scrollY >= section.offsetTop - 200) {
//             current = section.getAttribute('id');
//         }
//     });

//     navLinks.forEach(link => {
//         link.style.color = (link.getAttribute('href') === '#' + current) 
//             ? 'var(--cyan)' 
//             : '';
//     });
// });

// ======================
// Terminal Bash Realista - Typewriter Sequencial
// ======================
function startTypewriter() {
    const terminal = document.getElementById('terminal');
    if (!terminal) return;

    // Textos
    const cmdWhoami = "whoami";
    const outputWhoami = "Network Engineer → Python Developer → NetDevOps Practitioner";

    const cmdCert = "cat certifications.txt";
    const outputCert = "CCNA Routing & Switching | CCNA DevNet";

    // Elementos
    const cmd1El = document.getElementById('cmd1');
    const output1El = document.getElementById('output1');
    const cmd2El = document.getElementById('cmd2');
    const output2El = document.getElementById('output2');
    const cmd3El = document.getElementById('cmd3');

    let delay = 0;

    // Passo 1: Aparece primeira linha (prompt + comando whoami)
    setTimeout(() => {
        typeText(cmd1El, cmdWhoami, 40, () => {
            // Depois de digitar o comando, mostra o output
            setTimeout(() => {
                output1El.textContent = outputWhoami;
                output1El.style.opacity = 1;
            }, 300);
        });
    }, delay += 800);

    // Passo 2: Segunda linha (prompt + cat certifications.txt)
    setTimeout(() => {
        typeText(cmd2El, cmdCert, 35, () => {
            setTimeout(() => {
                output2El.textContent = outputCert;
                output2El.style.opacity = 1;
            }, 400);
        });
    }, delay += 1600);

    // Passo 3: Terceira linha (prompt final com cursor piscando)
    setTimeout(() => {
        cmd3El.textContent = "";
        cmd3El.classList.add('cursor');
        cmd3El.style.animation = "blink 1s step-end infinite";
    }, delay += 1400);
}

// Função auxiliar para digitar texto letra por letra
function typeText(element, text, speed, callback) {
    let i = 0;
    element.textContent = "";

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}