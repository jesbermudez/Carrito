///EMITIR la factura de una lista de productos de un usuario que realizo una compra
///-> DETALLE_FACTURA  lista de items de factura
///-> total

const productos = [
    { nombre: "Gomitas", precio: 25, marca: "Mogul" },
    { nombre: "Chicle", precio: 50, marca: "Topline" },
    { nombre: "Chocolate", precio: 75, marca: "Block" }
];
const detalleFactura = []; ////array de tipo ItemsFactura de mi factura

let opcion;
let salir;
let total /// valor total de la factura
let cantidad;


/* 
1 - Gomitas $25
2 - Chicle $50
3 - Chocolate $75
*/

function menu() {
    alert('Bienvenido a nuestro sistema facturador, presione aceptar para comenzar!');
    do {
        const listaStringProductos = productos.map((product,index) =>
            `${index + 1} - ${product.nombre} $${product.precio}`);
        opcion = parseInt(prompt('Que producto desea elegir?' + '\n' + listaStringProductos.join('\n')));

        ///si ingresa una opcion incorrecta voy a entrar al while
        while (opcion <= 0 || opcion > productos.length || isNaN(opcion) || opcion == undefined) {
            opcion = parseInt(prompt('Que producto desea elegir?' + '\n' + listaStringProductos.join('\n')));
        }

        cantidad = parseInt(prompt('Ingrese la cantidad que desea:'));

        ///aca podriamos validar nuevamente la cantidad ( si ingresa un numero menor a 0 o NaN o undefined)

        //generamos un nuevo item de factura para agregar a nuestro detalle

        detalleFactura.push(new ItemFactura(productos[opcion-1].nombre,productos[opcion-1].precio,cantidad));

        salir = prompt('Desea salir? si/no');

    }while(salir != 'si');
}


menu();

///aca para mostrar el detalle de factura hacemos lo mismo que hicimos arriba con map y luego join

total = detalleFactura.reduce((acc,item) => acc + item.subtotal,0);

alert(`El total a pagar de su compra es de: $${total}`);