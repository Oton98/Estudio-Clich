// import { obtenerDatosForm } from "./obtenerDatosForm.js";

// document.getElementById("buttonForm").addEventListener("click", function() {
//     var dataForm = obtenerDatosForm();
//     enviarDatos(dataForm);
// });

// async function enviarDatos(dataForm) {
//     await fetch('http://localhost:5000/enviar_correo', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             nombre: dataForm.get('name'),
//             asunto: dataForm.get('subject'),
//             correo: dataForm.get('email'),
//             mensaje: dataForm.get('message'),
//         }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         // Puedes realizar alguna acción adicional después de enviar el correo
//     })
//     .catch(error => {
//         console.error('Error al enviar el formulario:', error);
//     });
// }