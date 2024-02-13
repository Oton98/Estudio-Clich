import { leerMas, leerMenos, contenedorTarjetas } from "../utils/obtenerDatosTarjetas.js";
import { mostrarMas } from "../utils/mostarMas.js";
import { mostrarMenos } from "../utils/mostarMenos.js";
import { chequeoTarjetaServicios, borrarClases } from "../utils/checkClase.js";
import { chequearTamañoContenedorServicios } from "../utils/checkSizePage.js";
// import { agregarClaseImgExtendido, quitarClaseImgExtendido } from "../utils/modificarLogo.js"; habria que probarlo como queda

var widthScreenInital = parseInt(window.innerWidth);
var widthScreenLater;

window.addEventListener('DOMContentLoaded', (event) => {
    chequearTamañoContenedorServicios(widthScreenInital);
});

window.addEventListener('resize', () => {
    // Llamamos a la función dentro de la función anónima del evento de redimensionamiento
    chequearTamañoContenedorServicios(widthScreenLater);
});

window.addEventListener('resize', saveWidthScreen);

function saveWidthScreen() {
    widthScreenLater = parseInt(window.innerWidth);
}

leerMas.forEach(button => {
    button.addEventListener('click', function () {
        const tarjetaId = button.id;
        const tarjetaClass = contenedorTarjetas.classList;
        const id = tarjetaId[7];
        saveWidthScreen();
        if (widthScreenLater >= 810) {
            chequeoTarjetaServicios(tarjetaClass, id, tarjetaId);
            // agregarClaseImgExtendido(id); habria que probarlo como queda
        }
        mostrarMas(id);
    });
});

leerMenos.forEach(button => {
    button.addEventListener('click', function () {
        const tarjetaId = button.id;
        const id = tarjetaId[9];
        borrarClases(contenedorTarjetas);
        mostrarMenos(id);
        // quitarClaseImgExtendido(id); habria que probarlo como queda
    });
});