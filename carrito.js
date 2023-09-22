const productos = [
    {nombreProducto: "Camisa Blanca", precio: 25, stock: 30},
    {nombreProducto: "Camisa Negra", precio: 35, stock: 15},
    {nombreProducto: "Camisa Beige", precio: 15, stock: 10},
    {nombreProducto: "Pantalon Negro", precio: 60, stock: 32},
    {nombreProducto: "Pantalon Beige", precio: 55, stock: 24},
    {nombreProducto: "Short Azul", precio: 10, stock: 5}
];

const FACTURA = []; 


let decision;
let salir; 
let total; 
let cantidad; 
let cantidadInvalida;

function menu() {
    do {
        alert("Bienvenido a mi carrito :)")
        const listaProductos = productos.map((objeto,index) =>
            `${index + 1} - ${objeto.nombreProducto} $ ${objeto.precio}`);
        decision = parseInt(prompt('Que producto desea elegir?' + '\n' + listaProductos.join('\n')));

        while (decision <= 0 || decision > productos.length || isNaN(decision) || decision == undefined) {
            decision = parseInt(prompt('Que producto desea elegir?' + '\n' + listaProductos.join('\n')));
        }

        cantidad = parseInt(prompt('Ingrese la cantidad que desea:'));
        while(cantidad > productos[decision-1].stock || cantidad == undefined || isNaN(cantidad) || cantidad <= 0) {
            cantidad = +prompt(`para ese producto solo tenemos disponibilidad de ${productos[decision-1].stock} vuelva a ingresar cuantos desea`)
            if (cantidad < productos[decision-1].stock && cantidad > 0) {
                stockRestante = productos[decision-1].stock - cantidad;
            }
            else cantidad;
        }

        FACTURA.push(new ItemFactura(productos[decision-1].nombreProducto, productos[decision-1].precio, cantidad));

        salir = prompt('desea salir? si/no');

    }while(salir != 'si');
}

menu();

total = FACTURA.reduce((acc,item) => acc + item.subtotal,0);

alert(`El total a pagar de su compra es de: $${total}`);
