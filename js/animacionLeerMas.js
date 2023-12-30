// Obtén todas las tarjetas
var tarjetas = document.querySelectorAll('.servicios-contenedor-tarjetas-tarjeta');
console.log(tarjetas)

// Asigna eventos a cada botón Leer más y Leer menos de cada tarjeta
tarjetas.forEach(function (tarjeta) {
    var leerMas = tarjeta.querySelector('.leerMas');
    var leerMenos = tarjeta.querySelector('.leerMenos');
    var topics = tarjeta.querySelector('.topics');
    var descripcion = tarjeta.querySelector('.descripcion');

    leerMas.addEventListener('click', function () {
        mostrarMas(topics, descripcion);
    });

    leerMenos.addEventListener('click', function () {
        mostrarMenos(topics, descripcion);
    });
});

// Funciones de mostrarMas y mostrarMenos
function mostrarMas(topics, descripcion) {
    topics.style.display = "flex";
    descripcion.style.display = "none";
    topics.classList.add('mostrar-topics');
}

function mostrarMenos(topics, descripcion) {
    topics.style.display = "none";
    descripcion.style.display = "flex";
    topics.classList.remove('mostrar-topics');
}
