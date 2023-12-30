const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');
const navbarLinks = document.querySelector('.navbar-links');
const navbar = document.getElementById('navbar');

let isIconOpenVisible = true;

function checkSize() {
  var width = window.innerWidth;

  if (width > 810 && isIconOpenVisible) {
    navbarLinks.classList.remove('active');
    iconOpen.style.display = 'none';
    iconClose.style.display = 'none';
    navbar.style.height = 'auto';
  } else {
    iconOpen.style.display = 'block';
    iconClose.style.display = 'none';
    navbar.style.height = '20vh';
  }
}

window.addEventListener('resize', checkSize);

iconOpen.addEventListener('click', function () {
  navbarLinks.classList.add('active');
  iconOpen.style.display = 'none';
  iconClose.style.display = 'block';
  navbar.style.height = '100vh';
  isIconOpenVisible = false;
});

iconClose.addEventListener('click', function () {
  navbarLinks.classList.remove('active');
  iconOpen.style.display = 'block';
  iconClose.style.display = 'none';
  navbar.style.height = '20vh';
  isIconOpenVisible = true;
});

// Llamada inicial para configurar el estado inicial
checkSize();


/* tengo que si se cambia el tamaño 
del screen y supera los 810 px, tengo que ocultar tanto
el iconClose y el iconOpen y poner el display en none.
*/

