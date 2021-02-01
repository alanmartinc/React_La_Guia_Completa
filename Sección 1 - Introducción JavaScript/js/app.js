// Object literal enhancement
const banda = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master Of Puppets', 'Seek & Destroy', 'Enter Sandman'];

// Versión anterior
const metallica1 = {
    banda: banda,
    genero: genero,
    canciones: canciones
}

console.log(metallica1);

// Versión nueva
const metallica2 = {banda, genero, canciones};
console.log(metallica2);

/* 
Object destructuring: Extraer valores de un objeto.
Object literal enhancement: Para ponerlos juntos en un solo objeto.
*/