function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

function toggleSubmenu() {
    let sub = document.getElementById("submenu");
    sub.style.display = sub.style.display === "none" ? "block" : "none";
}

function mostrarFormulario() {
    document.getElementById("formulario").style.display = "block";
}

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;
    let control = document.getElementById("control").value;
    let edad = document.getElementById("edad").value;

    if (nombre === "") {
        alert("Nombre requerido");
        return;
    }
    if (!validarCorreo(correo)) {
        alert("Correo inválido");
        return;
    }
    if (!validarPassword(password)) {
        alert("Password inválido");
        return;
    }
    if (!/^\d{6}$/.test(control)) {
        alert("Número de control debe tener 6 dígitos");
        return;
    }
    mostrarModal(edad);
}
