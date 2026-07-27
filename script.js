function mostrarMensaje() {
    document.getElementById("mensaje").innerHTML =
        "¡Gracias por visitar mi sitio web! Espero que conozcas un poco más sobre mí y mis avances en la materia.";
}
unction mostrarProyecto() {

    let detalle = document.getElementById("detalleProyecto");

    if (detalle.innerHTML === "") {

        detalle.innerHTML =
        "Actualmente estoy desarrollando proyectos académicos utilizando HTML, CSS y JavaScript. Este portafolio seguirá creciendo con nuevos proyectos durante el curso.";

    } else {

        detalle.innerHTML = "";

    }

}
