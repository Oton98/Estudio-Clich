export function mostrarMenos(tarjetaId) {

  const leerMas = document.getElementById(`leerMas${tarjetaId}`);
  const leerMenos = document.getElementById(`leerMenos${tarjetaId}`);
  document.getElementById(`listaServicios${tarjetaId}`).classList.remove('mostrar-todas');

  leerMas.style.display = 'block';
  leerMenos.style.display = 'none';

}

