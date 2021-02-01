// Métodos o funciones en un objeto
const persona = {
    nombre: 'Alan',
    edad: 24,
    mostrarInformacion(){
        console.log(`${this.nombre} tiene ${this.edad} años.`);
    }
}

persona.mostrarInformacion();