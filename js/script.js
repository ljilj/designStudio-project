// Toggle menu
const navToggle = document.querySelector('.js-menu-toggle');
const links = document.querySelector('.c-nav-links__container');

navToggle.addEventListener('click', function() {
    links.classList.toggle("active-menu");
});