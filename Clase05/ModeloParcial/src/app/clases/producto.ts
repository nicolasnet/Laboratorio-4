export class Producto {
    id: number;
    descripcion: string;
    tipo: number;
    fechaDeVencimiento: Date;
    precio: number;
    rutaDeFoto: string;

    constructor(id: number, descripcion: string, tipo: number, fechaDeVencimiento: Date, precio: number, rutaDeFoto: string) {
      this.id = id;
      this.descripcion = descripcion;
      this.tipo = tipo;
      this.fechaDeVencimiento = fechaDeVencimiento;
      this.precio = precio;
      this.rutaDeFoto = rutaDeFoto;

    }




}
