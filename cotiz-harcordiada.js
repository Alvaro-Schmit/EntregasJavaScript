///////////////COTIZACION HARCODEADA//////////////

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
        this.litrosDePintura = 0;
    }

    calcularLitrosDePintura() {
        this.litrosDePintura = +this.metros / 10 * this.superficie * this.color;
        console.log('Usted necesita ' + this.litrosDePintura + ' litros de pintura');

    }

    precioDePintura() {
        if (this.litrosDePintura < 3) {
            return ('El costo de la Pintura a comprar es  de ' +
                this.metros / 10 * this.superficie * this.color * this.precio1litro + ' $');
        } else if (this.litrosDePintura > 3 && this.litrosDePintura < 20) {
            return ('El costo de la Pintura a comprar es  de ' +
                this.metros / 10 * this.superficie * this.color * this.precio1litro * 0.6 + ' $');
        } else if (this.litrosDePintura >= 20) {
            return ('El costo de la Pintura a comprar es  de ' +
                this.metros / 10 * this.superficie * this.color * this.precio1litro * 0.4 + ' $');
        }

    }

}


let cotizacion1 = new Datos(200, 1, 2, 560)
cotizacion1.calcularLitrosDePintura();
console.log(cotizacion1.precioDePintura());

let cotizacion2 = new Datos(300, 1.4, 1, 560);
cotizacion2.calcularLitrosDePintura();
console.log(cotizacion2.precioDePintura());

let cotizacion3 = new Datos(25, 1.2, 3, 640);
cotizacion3.calcularLitrosDePintura();
console.log(cotizacion3.precioDePintura());