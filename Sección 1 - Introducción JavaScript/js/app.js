// Function declaration
function actividad1(nombre, actividad){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad1('Alan', 'Aprender JavaScript');
actividad1();

// Function expression
const actividad2 = function(nombre='Lucas', actividad='Aprender Python'){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad2();