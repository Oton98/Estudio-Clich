var listaServicios = Array.from(document.querySelectorAll('.servicios-contenedor-tarjetas-tarjeta-text-ul'));
var leerMas = document.querySelectorAll('.leerMas');
var leerMenos = document.querySelectorAll('.leerMenos');
var contenedorTarjetas = document.getElementById('tarjetasServicios');

var widthScreenLater;

window.addEventListener('resize', saveWidthScreen);

function saveWidthScreen() {
    widthScreenLater = parseInt(window.innerWidth);
    return widthScreenLater;
}

export { listaServicios, leerMas, leerMenos, contenedorTarjetas};