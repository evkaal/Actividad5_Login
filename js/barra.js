

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
        alert("Número de control debe tener 8 dígitos");
        return;
    }
    mostrarModal(edad);
}

function mostrarModal(edad) {
    let texto = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
    document.getElementById("resultadoEdad").innerText = texto;
    document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

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

function mostrarModal(edad) {
    let texto = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
    document.getElementById("resultadoEdad").innerText = texto;
    document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

