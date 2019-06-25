(function() {
    "use strict";

    var treeviewMenu = $('.app-menu');

    // Toggle Sidebar
    $('[data-toggle="sidebar"]').click(function(event) {
        event.preventDefault();
        $('.app').toggleClass('sidenav-toggled');
    });

    // Activate sidebar treeview toggle
    $("[data-toggle='treeview']").click(function(event) {
        event.preventDefault();
        if (!$(this).parent().hasClass('is-expanded')) {
            treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
        }
        $(this).parent().toggleClass('is-expanded');
    });

    // Set initial active toggle
    $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

    //Activate bootstrip tooltips
    $("[data-toggle='tooltip']").tooltip();

})();

//new js

//cambio de letra y aumento
$(document).ready(function() {

    // Donde queremos cambiar el tamaño de la fuente
    var donde = $('.bs-component');
    var sizeFuenteOriginal = donde.css('font-size');

    // Resetear Font Size
    $(".resetearFont").click(function() {
        donde.css('font-size', sizeFuenteOriginal);
    });

    // Aumentar Font Size
    $(".aumentarFont").click(function() {

        var sizeFuenteActual = donde.css('font-size');
        var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
        var sizeFuenteNuevo = sizeFuenteActualNum = 24;
        donde.css('font-size', sizeFuenteNuevo);
        return false;
    });

    // Disminuir Font Size
    $(".disminuirFont").click(function() {
        var sizeFuenteActual = donde.css('font-size');
        var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
        var sizeFuenteNuevo = sizeFuenteActualNum * 0.8;
        donde.css('font-size', sizeFuenteNuevo);
        return false;
    });

});

//cambiar tipo fuente

$(document).ready(function() {
    $("#cambiar").click(function() {
        $(".section").css({ 'font-family': 'Open Sans' });
    });
    $("#cambiar1").click(function() {
        $(".section").css({ 'font-family': 'Montserrat' });
    });
    $("#cambiar2").click(function() {
        $(".section").css({ 'font-family': 'Ubuntu Condensed' });
    });
});

//cambio de color

$(document).ready(function() {
    $("#color").click(function() {
        $(".container-fluid").css({ 'background-color': 'rgb(189, 202, 219)' });
    });
    $("#color1").click(function() {
        $(".body").css({ 'font-family': 'Montserrat' });
    });
    $("#color2").click(function() {
        $(".body").css({ 'font-family': 'Ubuntu Condensed' });
    });
});


//para cambiar el tema color de la pagina

function cambia(boton) {

    var color = boton.name;
    document.getElementById("prueba").style.background = color;

    var color = boton.name;
    document.getElementById("prueba2").style.background = color;

    var color = boton.name;
    document.getElementById("prueba3").style.background = color;
}

//paginacion para las vistas

function handlePagination(e) {
    if (isModifiedEvent(e) || !isLeftClickEvent(e)) {
        return
    }
    e.stopPropagation();
    e.preventDefault();
    var url = $(this).attr("href ");
    if (url) handleNavigation(url, true)
}

function cargar_pagina() { alert("Bienvenidos!"); }

(function(a) {
    r.event.simulate(b, a.target, r.event.fix(a))
});
(function(b) {
    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
});
(function(a) {
    r.event.simulate(b, a.target, r.event.fix(a))
});
(function(b) {
    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
});
(function() {
    return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0
});
(function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        each(Chart.instances, function(instance) {
            // If the responsive flag is set in the chart instance config
            // Cascade the resize event down to the chart.
            if (instance.options.responsive) {
                instance.resize(instance.render, true);
            }
        });
    }, 50);
});