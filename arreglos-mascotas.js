// Se crean los arreglos con la informacion de las mascotas
const nombresMascotas = ["Clinton", "Lulu", "Simba", "Suerto", "Isis"]
const nombresDueno= ["Sonia", "Laura", "Carlos", "Liliana", "Carolina"]
const cedulasDueno = [1234, 4567, 7890, 7894, 1452]
const edadesMascotas=[8, 12, 3, 5, 1]
const telefonosDuenos =[321, 654, 987, 785, 145]
const especialidades = ["Medicina General", "Dermatologia", "Etologia", "Odontologia", "Oncologia"]
const doctores = ["Matheo", "Diana", "Mary", "Jose", "Elio"]

// Se comienza a manipular HTML 
// Se identifica la tabla donde se guardan las mascotas
let tablaMascotas = document.getElementById("tabla-mascotas")
let cuerpoTabla = tablaMascotas.getElementsByTagName("tbody")[0];

for (let i = 0; i < nombresMascotas.length; i++) {
    // Se crea una fila y se añade al cuerpo de la tabla
    let fila = cuerpoTabla.insertRow()
    // Añadir las celdas
    let celdaNombreMascota = fila.insertCell();
    let celdaNombreDueno = fila.insertCell();
    let celdaCedulas = fila.insertCell();
    let celdaEdades = fila.insertCell();
    let celdaTelefono = fila.insertCell();
    let celdaEspecialidad = fila.insertCell();
    let celdaDoctor = fila.insertCell();

    // Añade la informacion a las celdas
    celdaNombreMascota.textContent = nombresMascotas[i]
    celdaNombreDueno.textContent = nombresDueno[i]
    celdaCedulas.textContent = cedulasDueno[i]
    celdaEdades.textContent = edadesMascotas[i]
    celdaTelefono.textContent = telefonosDuenos[i]
    celdaEspecialidad.textContent = especialidades[i]
    celdaDoctor.textContent = doctores[i]
}