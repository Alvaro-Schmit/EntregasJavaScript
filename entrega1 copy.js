//crear targetas desde el DOM


class DOMBuild {
    constructor() {

    }
    h4(preguntaClass) {
        const h4 = document.createElement('h4');
        h4.textContent = preguntaClass;

        return h4;
    }



    img(imgClass) {
        const imgConst = document.createElement('img');
        imgConst.src = imgClass;
        return imgConst;
    }
}

////////

function buildSection(product) {


    const flexItemBody = document.createElement('div');
    flexItemBody.classList.add("flexItemBody");

    const h4questionData = dombuilder.h4(product.pregunta);
    const inputData = document.createElement('input');
    inputData.classList.add('input');
    inputData.setAttribute("type", "text[]");
    inputData.setAttribute("data-id", product.id);

    console.log(inputData.value);






    const image = dombuilder.img(product.img);


    const divparrafo = document.createElement('div');
    const pEspecificacion = document.createElement('p');
    pEspecificacion.textContent = product.especificaciones;
    pEspecificacion.classList.add("descripcion");
    divparrafo.appendChild(pEspecificacion);

    flexItemBody.appendChild(h4questionData);
    flexItemBody.appendChild(inputData);
    flexItemBody.appendChild(image);
    flexItemBody.appendChild(divparrafo);

    return flexItemBody;

}



const dombuilder = new DOMBuild();
console.log(dombuilder);

function onselectclick(event) {
    console.log(event.target.value);
}

window.addEventListener('load', function() {
    const flexContainerBodyjs = document.getElementById('flexContainerBody02');
    const dombuilder = new DOMBuild();
    console.log(dombuilder);

    pageStructure.forEach(function(product) {
        const card = buildSection(product);

        flexContainerBodyjs.appendChild(card);


    })
    const inputDataUser = document.querySelectorAll('.input');
    inputDataUser.forEach(function(inputDataUserfunc) {

        console.log(inputDataUserfunc);
    })

})




//////////   TITULO Y SUBTITULO   ///////
function crearTitulo() {
    let tituloSubtitulo = document.getElementById('encabezado');
    let title = document.createElement('h1')
    title.textContent = 'Bienvenido';
    tituloSubtitulo.appendChild(title);

    let subtituloCotizar = document.createElement('h2');
    subtituloCotizar.textContent = 'Utiliza esta plantilla para cotizar tu trabajo';
    tituloSubtitulo.appendChild(subtituloCotizar);

    title.style.textAlign = 'center';
    subtituloCotizar.style.textAlign = 'center';

}
window.addEventListener('load', function() {
        crearTitulo();
    })
    //////////////////////////////////////////

function onInput(datosQueIngreso) {
    key.textContent = datosQueIngreso.target.value;
    console.log(key.textContent);
    localStorage.setItem('datosLocalStorage', key.textContent);

}


window.addEventListener('load', function(datosQueIngreso) {
    const keysearch = document.querySelectorAll('.input');
    keysearch.addEventListener('input', onInput);

})