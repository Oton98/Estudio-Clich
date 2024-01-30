
export function mostrarMas(tarjetaId) {
    const leerMas = document.getElementById(`leerMas${tarjetaId}`);
    const leerMenos = document.getElementById(`leerMenos${tarjetaId}`);
    document.getElementById(`listaServicios${tarjetaId}`).classList.add('mostrar-todas');

    leerMas.style.display = 'none';
    leerMenos.style.display = 'block';
  }
  