
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.style.transform = 'translateX(0%)';
});

closeIcon.addEventListener('click', () => {
    navLinks.style.transform = 'translateX(100%)';
});
