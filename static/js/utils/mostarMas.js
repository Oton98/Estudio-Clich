export function mostrarMas(tarjetaId) {
    const listaServicios = document.getElementById(`listaServicios${tarjetaId}`);
    const leerMas = document.getElementById(`leerMas${tarjetaId}`);
    const leerMenos = document.getElementById(`leerMenos${tarjetaId}`);
  
    listaServicios.classList.add('mostrar-todas');
    leerMas.style.display = 'none';
    leerMenos.style.display = 'block';
  }
  