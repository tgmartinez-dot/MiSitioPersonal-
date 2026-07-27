let contador = 0;

function cambiarMensaje() {
    const mensaje = document.getElementById("mensaje");

    if (mensaje.innerHTML.includes("Bienvenido")) {
        mensaje.innerHTML = "¡Gracias por visitar mi portafolio! Espero que disfrutes conocer más sobre mí y mis proyectos.";
    } else {
        mensaje.innerHTML = "Bienvenido(a) a mi sitio web personal. Aquí conocerás un poco sobre mi formación y mis proyectos.";
    }
}

function contarClicks() {
    contador++;
    document.getElementById("contador").innerHTML = "Número de clics: " + contador;
}

function mostrarProyecto() {
    const detalle = document.getElementById("detalleProyecto");

    if (detalle.style.display === "none") {
        detalle.style.display = "block";
    } else {
        detalle.style.display = "none";
    }
}

function validarFormulario() {

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();

    if (nombre === "" || correo === "") {
        alert("Por favor completa todos los campos.");
        return false;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        alert("Ingresa un correo electrónico válido.");
        return false;
    }

    alert("¡Gracias, " + nombre + "! Tu mensaje fue enviado correctamente.");

    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";

    return false;
}
