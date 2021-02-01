// Arreglos, Map y Object.Keys
const carrito1 = ['Producto 1', 'Producto 2', 'Producto 3'];
console.log(carrito1);

// Arreglos
const appContenedor = document.querySelector('#app');

let html = '';
carrito1.forEach(producto => {
    html += `<li>${producto}</li>`;
});
appContenedor.innerHTML = html;

// Map
carrito2 = ['Producto 1', 'Producto 2', 'Producto 3'];

carrito2.map(producto => {
    return 'El producto es ' + producto;
});

// Object.Keys
const persona = {
    nombre: 'Alan',
    edad: 24
}

console.log(Object.keys(persona));