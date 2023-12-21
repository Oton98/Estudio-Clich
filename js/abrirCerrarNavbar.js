const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');
const navbarLinks = document.querySelector('.navbar-links');
const navbar = document.getElementById("navbar");

iconOpen.addEventListener('click', function() {
    navbarLinks.classList.add('active');
    iconOpen.style.display = 'none';
    iconClose.style.display = 'block';
    navbar.style.height = "100vh";
});

iconClose.addEventListener('click', function() {
    navbarLinks.classList.remove('active');
    iconOpen.style.display = 'block';
    iconClose.style.display = 'none';
    navbar.style.height = "20vh";
});

