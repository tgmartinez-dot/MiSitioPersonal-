let contador = 0;

function contarClicks() {

    contador++;

    document.getElementById("contador").textContent =
        "Número de clics: " + contador;

}


function mostrarProyecto() {

    let detalle = document.getElementById("detalleProyecto");

    if (detalle.style.display === "none" || detalle.style.display === "") {

        detalle.style.display = "block";

    } else {

        detalle.style.display = "none";

    }



const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if(nombre === "" || correo === "" || mensaje === ""){

        alert("Por favor completa todos los campos.");

        return;

    }

    alert("¡Gracias por tu mensaje, " + nombre + "! Me pondré en contacto contigo pronto.");

    formulario.reset();

});
    return false;
}
