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