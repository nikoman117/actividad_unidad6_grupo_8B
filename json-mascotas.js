fetch("datos-mascotas.json")
.then(response => response.json())
.then(mascotas => {
    const tablaMascotas = document.getElementById("tabla-mascotas")
    const cuerpoTabla = tablaMascotas.getElementsByTagName("tbody")[0]
    for (let i = 0; i < mascotas.length; i++) {

        const mascota=mascotas[i]
        console.log(mascota)
        const fila = cuerpoTabla.insertRow();

        const celdaNombreMascota = fila.insertCell()
        celdaNombreMascota.textContent= mascota.nombreMascota
        const celdaNombreDueno = fila.insertCell();
        celdaNombreDueno.textContent=mascota.nombreDuenio
        const celdaCedulas = fila.insertCell();
        celdaCedulas.textContent=mascota.cedulaDuenio
        const celdaEdades = fila.insertCell();
        celdaEdades.textContent=mascota.edadMascota
        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent=mascota.telefonoDuenio
        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent=mascota.especialidad
        const celdaDoctor = fila.insertCell();
        celdaDoctor.textContent=mascota.doctor
    }
})
.catch(error => console.error(error))