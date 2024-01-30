var listaServicios = Array.from(document.querySelectorAll('.servicios-contenedor-tarjetas-tarjeta-text-ul'));
var leerMas = document.querySelectorAll('.leerMas');
var leerMenos = document.querySelectorAll('.leerMenos');
var contenedorTarjetas = document.getElementById('tarjetasServicios');

var widthScreen;

window.addEventListener('resize', saveWidthScreen);

function saveWidthScreen() {
    widthScreen = parseInt(window.innerWidth);
    console.log("Ancho de la pantalla:", widthScreen);
    return widthScreen;
}

export { listaServicios, leerMas, leerMenos, contenedorTarjetas, widthScreen };