import { borrarClases } from "./checkClase.js";
import { mostrarMenos } from "./mostarMenos.js";
import { contenedorTarjetas, widthScreen } from "./obtenerDatosTarjetas.js";

export function chequearTamañoContenedorServicios() {

    console.log(widthScreen)

    if (widthScreen > 810) {
        contenedorTarjetas.classList.add("normal");
        contenedorTarjetas.classList.remove("mobile");
        for (var i = 1; i <= 4; i++) {
            contenedorTarjetas.classList.remove(`extendido${i}`);
            mostrarMenos(i)
        }


    } else {
        contenedorTarjetas.classList.add("mobile");
        contenedorTarjetas.classList.remove("normal");
        for (var i = 1; i <= 4; i++) {
            contenedorTarjetas.classList.remove(`extendido${i}`);
            mostrarMenos(i)
        }

    }
}