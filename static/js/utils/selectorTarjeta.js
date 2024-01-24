import { contenedorTarjetas } from "./obtenerDatosTarjetas.js";

export function selectorTarjeta(event) {

  var width = parseInt(window.innerWidth);

  if (width > 810) {
    
    switch (event) {

      case "leerMas1":
        contenedorTarjetas.style.gridTemplateColumns = "1f 1fr";
        contenedorTarjetas.style.gridTemplateRows = "1fr 1fr 1fr";
        contenedorTarjetas.style.gridTemplateAreas = `
            'tarjeta1 tarjeta2'
            'tarjeta1 tarjeta3'
            'tarjeta1 tarjeta4'
           `
        break;

      case "leerMas2":
        contenedorTarjetas.style.gridTemplateColumns = "1f 1fr";
        contenedorTarjetas.style.gridTemplateRows = "1fr 1fr 1fr";
        contenedorTarjetas.style.gridTemplateAreas = `
            'tarjeta2 tarjeta1'
            'tarjeta2 tarjeta3'
            'tarjeta2 tarjeta4'
          `
        break;

      case "leerMas3":
        contenedorTarjetas.style.gridTemplateColumns = "1f 1fr";
        contenedorTarjetas.style.gridTemplateRows = "1fr 1fr 1fr";
        contenedorTarjetas.style.gridTemplateAreas = `
            'tarjeta1 tarjeta3'
            'tarjeta2 tarjeta3'
            'tarjeta4 tarjeta3'
          `
        break;

      case "leerMas4":
        contenedorTarjetas.style.gridTemplateColumns = "1f 1fr";
        contenedorTarjetas.style.gridTemplateRows = "1fr 1fr 1fr";
        contenedorTarjetas.style.gridTemplateAreas = `
            'tarjeta1 tarjeta4'
            'tarjeta2 tarjeta4'
            'tarjeta3 tarjeta4'
          `
        break;
    }
  } else {

  }



}





