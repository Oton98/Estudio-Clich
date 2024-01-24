import { leerMas, leerMenos } from "../utils/obtenerDatosTarjetas.js";
import { selectorTarjeta } from "../utils/selectorTarjeta.js";
import { mostrarMas } from "../utils/mostarMas.js";
import { mostrarMenos } from "../utils/mostarMenos.js";

leerMas.forEach(button => {
    button.addEventListener('click', function () {
        const tarjetaId = button.id;
        const id = tarjetaId[7]
        selectorTarjeta(tarjetaId);
        mostrarMas(id);
    });
});

leerMenos.forEach(button => {
    button.addEventListener('click', function () {
        const tarjetaId = button.id;
        const id = tarjetaId[9]
        selectorTarjeta(tarjetaId);
        mostrarMenos(id);
    });
});

/* Necesito una funcion que cuando hay un click en

*/