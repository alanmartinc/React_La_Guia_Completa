// Spread operator
let lenguajes = ['JavaScript', 'PHP', 'Python'];
let frameworks = ['VueJS', 'Laravel', 'Django'];

// Unir los arreglos en uno solo

// Versión anterior
let combinacion1 = lenguajes.concat(frameworks);
console.log(combinacion1);

// Versión nueva
let combinacion2 = [...lenguajes,...frameworks];
console.log(combinacion2);

// Con Spread
let [ultimoSpread] = [...lenguajes].reverse();
console.log(lenguajes);
console.log(ultimoSpread);

// Otro ejemplo con Spread
function suma(a,b,c){
    console.log(a+b+c);
}

const numeros = [1,2,3];
suma(...numeros);
