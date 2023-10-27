$(document).ready(function () {
    // Cuando el mouse entra en el botón
    $("#btn-send").mouseenter(function () {
        // Muestra el comentario emergente
        $("#comment1").fadeIn();
    });

    // Cuando el mouse sale del botón
    $("#btn-send").mouseleave(function () {
        // Oculta el comentario emergente
        $("#comment1").fadeOut();
    });
});

$(document).ready(function () {
    // Cuando el mouse entra en el botón
    $("#btn-add").mouseenter(function () {
        // Muestra el comentario emergente
        $("#comment2").fadeIn();
    });

    // Cuando el mouse sale del botón
    $("#btn-add").mouseleave(function () {
        // Oculta el comentario emergente
        $("#comment2").fadeOut();
    });
});