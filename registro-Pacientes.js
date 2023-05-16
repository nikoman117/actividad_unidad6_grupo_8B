
const nombrePaciente = document.getElementById("PacienteName")
const apellidoPaciente = document.getElementById("apellido") 
const cedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")
const formularioRegistros = document.getElementById("registro-Pacientes")


formularioRegistros.addEventListener("submit", function (event) {
    event.preventDefault();

    const Paciente ={
        nombrePaciente: nombrePaciente.value,
        apellidoPaciente: apellidoPaciente.value,
        cedula: cedula.value,
        edad: edad.value,
        telefono: telefono.value,
        especialidad: especialidad.value,
    }
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    pacientes.push(Paciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formularioRegistros.reset()
    alert("paciente registrado con exito")
})