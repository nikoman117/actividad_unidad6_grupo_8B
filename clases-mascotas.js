class Mascota{
    constructor(nombreMascota, nombreDuenio, cedulaDuenio, edadMascota, telefonoDuenio, especialidad, doctor){
        this.nombreMascota=nombreMascota
        this.nombreDuenio=nombreDuenio
        this.cedulaDuenio=cedulaDuenio
        this.edadMascota=edadMascota
        this.telefonoDuenio=telefonoDuenio
        this.especialidad=especialidad
        this.doctor=doctor
    }
}

const clinton= new Mascota("Clinton", "Sonia", 123456, 3, 36547895, "Medicina General", "Diana")
const lulu = new Mascota("Lulu", "Laura", 78945, 6, 32459856, "Odontologia", "Carlos")
const simba = new Mascota("Simba", "Carlos", 45697, 2, 32124468, "Conducta", "Matheo")
const isis = new Mascota("Isis", "Maria", 12347899, 4, 3245657, "Odontologia", "José")

const tablaMascotas= document.getElementById("tabla-mascotas");
const cuerpoTabla= document.getElementsByTagName("tbody")[0]

function agregarFila(mascota){
    // Se insertan las filas
    const fila= cuerpoTabla.insertRow()
    const celdaNombreMascota=fila.insertCell()
    celdaNombreMascota.textContent=mascota.nombreMascota
    const celdaNombreDuenio=fila.insertCell()
    celdaNombreDuenio.textContent=mascota.nombreDuenio
    const celdaCedula=fila.insertCell()
    celdaCedula.textContent=mascota.cedulaDuenio
    const celdaEdad=fila.insertCell()
    celdaEdad.textContent=mascota.edadMascota
    const celdaTelefono=fila.insertCell()
    celdaTelefono.textContent=mascota.telefonoDuenio
    const celdaEspecialidad=fila.insertCell()
    celdaEspecialidad.textContent=mascota.especialidad
    const celdaMedico=fila.insertCell()
    celdaMedico.textContent=mascota.doctor
}

agregarFila(clinton)
agregarFila(lulu)
agregarFila(simba)
agregarFila(isis)