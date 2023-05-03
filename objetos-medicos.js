const medicos =[
    {
        nombre: "David",
        apellido: "Castro",
        numeroCedula: 123456789,
        especialidad: "Medicina General",
        consultorio: 102,
        correo: "david@medico.com",
        paciente: "Clinton"
    },
    {
        nombre: "Angie",
        apellido: "Parra",
        numeroCedula: 789946,
        especialidad: "Dermatologia",
        consultorio: 103,
        correo: "angie@medico.com",
        paciente: "Lulu"
    },
    {
        nombre: "Cristian",
        apellido: "Triana",
        numeroCedula: 45254,
        especialidad: "Odonología",
        consultorio: 104,
        correo: "cristian@medico.com",
        paciente: "Isis"
    }
]

const tablaMedicos = document.getElementById("tabla-medicos")
const cuerpoTabla = document.getElementsByTagName("tbody")[0]

for(let i = 0; i< medicos.length; i++){
    let medico = medicos[i]

    // Crear una nueva fila y se le añaden las celdas a la fila
    let fila = cuerpoTabla.insertRow()
    let celdaNombreMedico = fila.insertCell()
    let celdaApellido = fila.insertCell()
    let celdaNumeroCedula = fila.insertCell()
    let celdaEspecialidad = fila.insertCell()
    let celdaConsultorio = fila.insertCell()
    let celdaCorreo = fila.insertCell()
    let celdaPacientes = fila.insertCell()

    celdaNombreMedico.textContent = medico.nombre
    celdaApellido.textContent = medico.apellido
    celdaNumeroCedula.textContent = medico.numeroCedula
    celdaEspecialidad.textContent = medico.especialidad
    celdaConsultorio.textContent = medico.consultorio
    celdaCorreo.textContent = medico.correo
    celdaPacientes.textContent = medico.paciente
}