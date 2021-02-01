// Escribir Clases
class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar() {
        return(`${this.nombre}, tiene una prioridad de ${this.prioridad}`);
    }
}

// Heredando Clases
class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        // Hacemos referencia al constructor Padre
        super(nombre, prioridad);

        this.cantidad = cantidad;
    }   
    mostrar(){
        return(`${this.nombre}, tiene una prioridad de ${this.prioridad} y la cantidad de ${this.cantidad}`);
    }
    Descripcion(){
        return `Soy un ${this.nombre}`;
    }
}

// Crear los objetos
let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
let tarea2 = new Tarea('Pasear al perro', 'Media');
let tarea3 = new Tarea('Conocer a mis suegros', 'Baja');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());

// Compras
let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);

// Ademas de heredar clases, tambien podemos heredar metodos
console.log(compra1.mostrar());

console.log(compra1.Descripcion());