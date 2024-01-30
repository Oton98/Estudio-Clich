import { selectorTarjetaPC} from "./selectorTarjeta.js";
import { contenedorTarjetas, listaServicios  } from "./obtenerDatosTarjetas.js";
import { mostrarMenos } from "./mostarMenos.js";

export function chequeoTarjetaServicios(tarjetaClass, id, tarjetaId) {

    var className = `extendido${id}`;

    if (
        tarjetaClass.contains("extendido1") ||
        tarjetaClass.contains("extendido2") ||
        tarjetaClass.contains("extendido3") ||
        tarjetaClass.contains("extendido4")
    ) {
        // Eliminar todas las clases que comienzan con "extendido"
        for (var i = 1; i <= 4; i++) {
            tarjetaClass.remove(`extendido${i}`);
            listaServicios[i - 1].classList.remove('mostrar-todas');
            mostrarMenos(i);
        }

        // Agregar la clase específica que necesitas
        contenedorTarjetas.classList.add(className);

        // Llamar a la función selectorTarjetaPC
        selectorTarjetaPC(tarjetaId);
    } else {
        // Llamar a la función selectorTarjetaPC
        selectorTarjetaPC(tarjetaId);
    }
}

export function borrarClases(contenedorTarjetas) {
    if (
        contenedorTarjetas.classList.contains("extendido1") ||
        contenedorTarjetas.classList.contains("extendido2") ||
        contenedorTarjetas.classList.contains("extendido3") ||
        contenedorTarjetas.classList.contains("extendido4")
    ) {
        // Eliminar todas las clases que comienzan con "extendido"
        for (var i = 1; i <= 4; i++) {
            contenedorTarjetas.classList.remove(`extendido${i}`);
        }

    }
}