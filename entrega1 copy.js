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

//crear targetas desde el DOM



function buildSection(product) {


    const flexItemBody = document.createElement('div');
    flexItemBody.classList.add("flexItemBody");

    const h4questionData = document.createElement('h4');
    h4questionData.textContent = product.pregunta;

    const inputData = document.createElement('input');
    inputData.classList.add('input');

    const image = document.createElement('img');
    image.src = product.img;

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


window.addEventListener('load', function() {
    const flexContainerBodyjs = document.getElementById('flexContainerBody02');

    pageStructure.forEach(function(product) {
        const card = buildSection(product);
        console.log(card);
        flexContainerBodyjs.appendChild(card);


    })

})