console.log('prueba');



class Datos {


    metros = 0;
    superficie = 0;
    color = 0;
    precio1litro = 0;

    constructor(metros, superficie, color, precio1litro) {
        this.metros = metros;
        this.superficie = superficie;
        this.color = color;
        this.precio1litro = precio1litro;
    }

    litrosDePintura() {
        console.log('Usted necesita ' + this.metros / 10 * this.superficie * this.color + ' litros de pintura')
    }
    precioDePintura() {
        if (this.litrosDePintura < 3) {
            return ('El costo de la Pintura a comprar es  de ' +
                this.metros / 10 * this.superficie * this.color * this.precio1litro + ' $');
        } else if (this.litrosDePintura > 3 && this.litrosDePintura < 20) {
            return ('El costo de la Pintura a comprar es  de ' +
                this.metros / 10 * this.superficie * this.color * this.precio1litro * 0.6 + ' $');
        } else(this.litrosDePintura >= 20); {
            return ('El costo de la Pintura a comprar es  de ' +
                this.metros / 10 * this.superficie * this.color * this.precio1litro * 0.4 + ' $');
        }




    }

}


let cotizacion1 = new Datos(200, 1, 2, 560)
cotizacion1.litrosDePintura();
console.log(cotizacion1.precioDePintura());

let cotizacion2 = new Datos(300, 1.4, 1, 560);
cotizacion2.litrosDePintura();
console.log(cotizacion2.precioDePintura());

let cotizacion3 = new Datos(25, 1.2, 3, 640);
cotizacion3.litrosDePintura();
console.log(cotizacion3.precioDePintura());

//crear titulo y subtitulo desde el DOM



let tituloSubtitulo = document.getElementById('encabezado');
let title = document.createElement('h1')
title.textContent = 'Bienvenido';
tituloSubtitulo.appendChild(title);


let subtituloCotizar = document.createElement('h2');
subtituloCotizar.textContent = 'Utiliza esta plantilla para cotizar tu trabajo';
tituloSubtitulo.appendChild(subtituloCotizar);

title.style.textAlign = 'center';


subtituloCotizar.style.textAlign = 'center';

let ingresaMetros = 0;

const key = document.getElementById("info");



function onInput(datosQueIngreso) {

    key.textContent = datosQueIngreso.target.value;
    console.log(datosQueIngreso.target.value);
    localStorage.setItem('datosLocalStorage', key.textContent);

}

window.addEventListener('load', function(datosQueIngreso) {
    const keysearch = document.getElementById('keysearch01');
    keysearch.addEventListener('input', onInput);

})