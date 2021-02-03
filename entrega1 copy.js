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



function buildSection() {


    const flexItemBody = document.createElement('div');

    const h4questionData = document.createElement('h4');
    h4questionData.textContent = 'aqui va la pregunta';

    const inputData = document.createElement('input');

    const image = document.createElement('img');

    const divparrafo = document.createElement('div');
    const pEspecificacion = document.createElement('p');
    pEspecificacion.textContent = 'aqui va la especificacion de la pregunta pabajo de la imagen y centrada con espcio equilibrado'


    flexItemBody.appendChild(h4questionData);


    return flexItemBody;

}


window.addEventListener('load', function() {
    const flexContainerBodyjs = document.getElementById('flexContainerBody');

    pageStructure.forEach(function(pageStructureElement) {
        const card = buildSection();
        console.log(card);
        flexContainerBodyjs.childElementCount(buildSection);


    })

})