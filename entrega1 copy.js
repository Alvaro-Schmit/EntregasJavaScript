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
        //     divparrafo(divparrafo) {
        //         const divparrafo = document.createElement('div');

    // }
    // parr(parrafo) {
    //     const pEspecificacion = document.createElement('p');
    //     pEspecificacion.textContent = parrafo;
    //     return pEspecificacion;

    // }



}

////////

function buildSection(product) {


    const flexItemBody = document.createElement('div');
    flexItemBody.classList.add("flexItemBody");

    const h4questionData = dombuilder.h4(product.pregunta);
    const inputData = document.createElement('input');
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




window.addEventListener('load', function() {
    const flexContainerBodyjs = document.getElementById('flexContainerBody02');
    const dombuilder = new DOMBuild();
    console.log(dombuilder);

    pageStructure.forEach(function(product) {
        const card = buildSection(product);

        flexContainerBodyjs.appendChild(card);


    })

})