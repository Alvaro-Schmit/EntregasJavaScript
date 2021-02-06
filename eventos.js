//DATA01
const key01 = document.getElementById("info01");

function onInput(MetrosPintar) {

    key01.textContent = MetrosPintar.target.value;
    console.log(MetrosPintar.target.value);
    localStorage.setItem('datosLocalStorage', key01.textContent);
    return MetrosPintar;
}

window.addEventListener('load', function(MetrosPintar) {
    const keysearch01 = document.getElementById('keysearch01');
    keysearch01.addEventListener('input', onInput);
})


//DATA02
const key02 = document.getElementById("info02");

function onInput(superficie) {

    key02.textContent = superficie.target.value;
    console.log(superficie.target.value);
    localStorage.setItem('datosLocalStorage', key02.textContent);
    return superficie;
}

window.addEventListener('load', function(Superficie) {
    const keysearch02 = document.getElementById('keysearch02');
    keysearch02.addEventListener('input', onInput);
})

//DATA03
const key03 = document.getElementById("info03");

function onInput(colorOriginal) {

    key03.textContent = colorOriginal.target.value;
    console.log(colorOriginal.target.value);
    localStorage.setItem('datosLocalStorage', key03.textContent);
    return colorOriginal;
}

window.addEventListener('load', function(colorOriginal) {
    const keysearch03 = document.getElementById('keysearch03');
    keysearch03.addEventListener('input', onInput);
})

//DATA04
const key04 = document.getElementById("info04");

function onInput(IntensidadOriginal) {

    key04.textContent = IntensidadOriginal.target.value;
    console.log(IntensidadOriginal.target.value);
    localStorage.setItem('datosLocalStorage', key04.textContent);
    return IntensidadOriginal;
}

window.addEventListener('load', function(IntensidadOriginal) {
    const keysearch04 = document.getElementById('keysearch04');
    keysearch04.addEventListener('input', onInput);
})

//DATA05
const key05 = document.getElementById("info05");

function onInput(colorAAplicar) {

    key05.textContent = colorAAplicar.target.value;
    console.log(colorAAplicar.target.value);
    localStorage.setItem('datosLocalStorage', key05.textContent);
    return colorAAplicar;
}

window.addEventListener('load', function(colorAAplicar) {
    const keysearch05 = document.getElementById('keysearch05');
    keysearch05.addEventListener('input', onInput);
})

//DATA06
const key06 = document.getElementById("info06");

function onInput(colorAAplicarIntensidad) {

    key06.textContent = colorAAplicarIntensidad.target.value;
    console.log(colorAAplicarIntensidad.target.value);
    localStorage.setItem('datosLocalStorage', key06.textContent);
    return colorAAplicarIntensidad;
}

// window.addEventListener('load', function(colorAAplicarIntensidad) {
//     const keysearch06 = document.getElementById('keysearch06');
//     keysearch06.addEventListener('input', onInput);
// })

$(window).load(function(colorAAplicarIntensidad) {
    const keysearch06 = document.getElementById('keysearch06');
    keysearch06.addEventListener('input', onInput);
});