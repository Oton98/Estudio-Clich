import { leerMas, leerMenos, contenedorTarjetas } from "../utils/obtenerDatosTarjetas.js";
import { mostrarMas } from "../utils/mostarMas.js";
import { mostrarMenos } from "../utils/mostarMenos.js";
import { chequeoTarjetaServicios, borrarClases } from "../utils/checkClase.js";
import { chequearTamañoContenedorServicios } from "../utils/checkSizePage.js";
import { widthScreen } from "../utils/obtenerDatosTarjetas.js";

window.addEventListener('resize', chequearTamañoContenedorServicios);

chequearTamañoContenedorServicios();

leerMas.forEach(button => {
    button.addEventListener('click', function () {
        const tarjetaId = button.id;
        const tarjetaClass = contenedorTarjetas.classList;
        const id = tarjetaId[7];
        if (widthScreen >= 810) {
            chequeoTarjetaServicios(tarjetaClass, id, tarjetaId);
        }
        mostrarMas(id);

    });
});

leerMenos.forEach(button => {
    button.addEventListener('click', function () {
        const tarjetaId = button.id;
        const id = tarjetaId[9];
        // Pasa el elemento contenedorTarjetas como parámetro
        borrarClases(contenedorTarjetas);
        mostrarMenos(id);

    });
});