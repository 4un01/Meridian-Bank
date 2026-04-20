const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
    hamburger.textContent = navLinks.classList.contains('nav-open') ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-open');
        hamburger.textContent = '☰';
    });
});