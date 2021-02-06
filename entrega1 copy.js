//crear targetas desde el DOM

class DOMBuild {
    //metodo que crea un tag h4 y le agrega texto.
    h4(preguntaClass) {
        const h4 = document.createElement('h4');
        h4.textContent = preguntaClass;
        return h4;
    }

    //metodo que crea un tag img y le agrega el src.
    img(imgClass) {
        const imgConst = document.createElement('img');
        imgConst.src = imgClass;
        return imgConst;
    }

    //metodo que crea un tag input:text ye le asigna el id que recive por parametro.
    inputText(id) {
        const inputData = document.createElement('input');
        inputData.classList.add('input');
        inputData.setAttribute("type", "text[]");
        inputData.setAttribute("data-id", id);
        return inputData;
    }

    //metodo que crea un parrafo con especificaciones.
    divParrafo(especificaciones) {
        const divparrafo = document.createElement('div');
        const pEspecificacion = document.createElement('p');
        pEspecificacion.textContent = especificaciones;
        pEspecificacion.classList.add("descripcion");
        divparrafo.appendChild(pEspecificacion);
        return divparrafo;
    }
}

function buildSection(product) {

    const flexItemBody = document.createElement('div');
    flexItemBody.classList.add("flexItemBody");

    const h4questionData = dombuilder.h4(product.pregunta);
    const inputData = dombuilder.inputText(product.id);
    const image = dombuilder.img(product.img);
    const divparrafo = dombuilder.divParrafo(product.especificaciones);

    flexItemBody.appendChild(h4questionData);
    flexItemBody.appendChild(inputData);
    flexItemBody.appendChild(image);
    flexItemBody.appendChild(divparrafo);

    return flexItemBody;
}


function onselectclick(event) {
    console.log(event.target.value);
}

window.addEventListener('load', function() {
    const flexContainerBodyjs = document.getElementById('flexContainerBody02');

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