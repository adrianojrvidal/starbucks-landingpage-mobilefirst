// Botão Menu Mobile do Header
const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.querySelector('#nav-links');
const icon = document.querySelector('.btn-mobile i');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});


// Efeito de Box Shadow no Header a partir do scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
})


// Corrijor o scroll da Navbar para o conteúdo, considerando a altura do header
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link

    const targetId = this.getAttribute('href'); // Obtém o ID da seção
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const headerOffset = 96; // Altura do cabeçalho
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Scroll suave
      });
    }
  });
});