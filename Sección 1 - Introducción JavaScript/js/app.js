// .Filter .Find y .Reduce y Métodos para Arreglos
const personas = [
    { nombre: 'Alan', edad: 24, aprendiendo: 'JavaScript'},
    { nombre: 'Lucas', edad: 26, aprendiendo: 'PHP'},
    { nombre: 'Jose', edad: 35, aprendiendo: 'Python'},
    { nombre: 'Carlos', edad: 50, aprendiendo: 'Java'},
    { nombre: 'Alicia', edad: 70, aprendiendo: 'C++'},
]
                
console.log(personas);

// Mayores de 30 años
const mayores = personas.filter(persona => {
    return persona.edad > 30;
});

console.log(mayores);

// Que aprende Alan y su edad
const alan = personas.find(persona => {
    return persona.nombre === 'Alan';
});

console.log("Alan esta aprendiendo " + alan.aprendiendo);

// Total de las edades
let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total);