function mostrarPersonas() {
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes)
    }
    const tablaPacientes = document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablaPacientes.getElementsByTagName("tbody")[0]

    pacientes.forEach(Paciente => {
        let fila = cuerpoTabla.insertRow()
        const celdaNombrepaciente = fila.insertCell()
        celdaNombrepaciente.textContent= Paciente.nombrePaciente
        const  celdaapellidoPaciente = fila.insertCell()
        celdaapellidoPaciente.textContent=Paciente.apellidoPaciente
        const  celdaCedulas = fila.insertCell()
        celdaCedulas.textContent=Paciente.cedula
        const celdaEdades = fila.insertCell();
        celdaEdades.textContent=Paciente.edad
        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent=Paciente.telefono
        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent=Paciente.especialidad
        const celdaDoctor = fila.insertCell();
        celdaDoctor.textContent="Por asignar"
    });
}

mostrarPersonas()