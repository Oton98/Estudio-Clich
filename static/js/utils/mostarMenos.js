import { contenedorTarjetas } from "./obtenerDatosTarjetas.js";

export function mostrarMenos(tarjetaId) {
  const listaServicios = document.getElementById(`listaServicios${tarjetaId}`);
  const leerMas = document.getElementById(`leerMas${tarjetaId}`);
  const leerMenos = document.getElementById(`leerMenos${tarjetaId}`);

  var width = parseInt(window.innerWidth)

  listaServicios.classList.remove('mostrar-todas');
  leerMas.style.display = 'block';
  leerMenos.style.display = 'none';

  if (width > 810) {
    
    contenedorTarjetas.style.gridTemplateColumns = "1f 1fr";
    contenedorTarjetas.style.gridTemplateRows = "1fr 1fr";
    contenedorTarjetas.style.gridTemplateAreas = `
              'tarjeta1 tarjeta3'
              'tarjeta2 tarjeta4'
            `
  }



}

