class Medico{
    constructor(nombre, apellido, numeroCedula,especialidad, consultorio, correo, paciente){
        this.nombre=nombre
        this.apellido=apellido
        this.numeroCedula=numeroCedula
        this.especialidad=especialidad
        this.consultorio=consultorio
        this.correo=correo
        this.paciente=paciente
    }
}

const medicoDavid= new Medico("David", "Castro", 154125,"Medicina General",101,"david@medico.com", "Simba")
const medicoAngie= new Medico("Angie", "Parra", 789946,"Dermatologia",102,"angie@medico.com", "Lulu")
const medicoCristian= new Medico("Cristian", "Triana", 452547,"Odontología",103,"cristian@medico.com", "Isis")

const medicos =[
    medicoDavid,
    medicoAngie,
    medicoCristian
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