// scripts.js

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mostrar botão "Voltar ao Topo" quando rolar
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Voltar ao topo ao clicar no botão
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animações leves ao aparecer seções
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.2
});

function setLanguage(lang) {
  document.querySelectorAll('.lang-section').forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(lang).classList.remove('hidden');
}

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

console.log('Francesinha Portuguesa - Site interativo e carregado!');
