var width = parseInt(window.innerWidth);

export function selectorTarjetaPC(event) {
  if (width > 810) {
    switch (event) {
      case "leerMas1":
        document.getElementById('tarjetasServicios').classList.add('extendido1');
        break;

      case "leerMas2":
        document.getElementById('tarjetasServicios').classList.add('extendido2');
        break;

      case "leerMas3":
        document.getElementById('tarjetasServicios').classList.add('extendido3');
        break;

      case "leerMas4":
        document.getElementById('tarjetasServicios').classList.add('extendido4');
        break;
    }
  }
}







