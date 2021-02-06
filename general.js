let tituloSubtitulo = document.getElementById('encabezado');
let title = document.createElement('h1')
title.textContent = 'Bienvenido';
tituloSubtitulo.appendChild(title);


let subtituloCotizar = document.createElement('h2');
subtituloCotizar.textContent = 'Utiliza esta plantilla para cotizar tu trabajo';
tituloSubtitulo.appendChild(subtituloCotizar);

title.style.textAlign = 'center';


subtituloCotizar.style.textAlign = 'center';



//DATA01
const key01 = $("#info01-id");

function onInput(MetrosPintar) {

    key01.textContent = MetrosPintar.target.val();
    console.log(MetrosPintar.target.val());
    localStorage.setItem('datosLocalStorage', key01.textContent);
    return MetrosPintar;
}

$(window).load(function(MetrosPintar) {
    const keysearch01 = $('#keysearch01-id');
    keysearch01.input(onInput);
})


//DATA02
const key02 = $("#info02-id");

function onInput(superficie) {

    key02.textContent = superficie.target.val();
    console.log(superficie.target.val());
    localStorage.setItem('datosLocalStorage', key02.textContent);
    return superficie;
}

$(window).load(function(Superficie) {
    const keysearch02 = $('#keysearch02-id');
    keysearch02.input(onInput);
})

//DATA03
const key03 = $("#info03-id");

function onInput(colorOriginal) {

    key03.textContent = colorOriginal.target.val();
    console.log(colorOriginal.target.val());
    localStorage.setItem('datosLocalStorage', key03.textContent);
    return colorOriginal;
}

$(window).load(function(colorOriginal) {
    const keysearch03 = $('#keysearch03-id');
    keysearch03.input(onInput);
})

//DATA04
const key04 = $("#info04-id");

function onInput(IntensidadOriginal) {

    key04.textContent = IntensidadOriginal.target.val();
    console.log(IntensidadOriginal.target.val());
    localStorage.setItem('datosLocalStorage', key04.textContent);
    return IntensidadOriginal;
}

$(window).load(function(IntensidadOriginal) {
    const keysearch04 = $('#keysearch04-id');
    keysearch04.input(onInput);
})

//DATA05
const key05 = $("#info05-id");

function onInput(colorAAplicar) {

    key05.textContent = colorAAplicar.target.val();
    console.log(colorAAplicar.target.val());
    localStorage.setItem('datosLocalStorage', key05.textContent);
    return colorAAplicar;
}

$(window).load(function(colorAAplicar) {
    const keysearch05 = $('#keysearch05-id');
    keysearch05.input(onInput);
})

//DATA06
const key06 = $("#info06-id");

function onInput(colorAAplicarIntensidad) {

    key06.textContent = colorAAplicarIntensidad.target.val();
    console.log(colorAAplicarIntensidad.target.val());
    localStorage.setItem('datosLocalStorage', key06.textContent);
    return colorAAplicarIntensidad;
}

// window.addEventListener('load', function(colorAAplicarIntensidad) {
//     const keysearch06 = $('#keysearch06-id');
//     keysearch06.input(onInput);
// })

$(window).load(function(colorAAplicarIntensidad) {
    const keysearch06 = $('#keysearch06-id');
    keysearch06.input(onInput);
})