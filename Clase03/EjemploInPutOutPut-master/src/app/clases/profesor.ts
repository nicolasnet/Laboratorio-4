export class Profesor {
    legajo:number;
    apellido:string;
    nombre:string;
    materia:string;
    index:number;
    public constructor(apellido:string, nombre:string,materia:string,legajo:number)
    {
        this.apellido=apellido;
        this.nombre=nombre;
        this.legajo=legajo;
        this.materia=materia;
    }
}
