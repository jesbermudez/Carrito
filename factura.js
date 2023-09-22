class ItemFactura {
    nombre;
    precio;
    cantidad;
    subtotal;

    constructor(nombre,precio,cantidad,stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.stock = stock;
        this.subtotal = this.precio*this.cantidad;
    }
}