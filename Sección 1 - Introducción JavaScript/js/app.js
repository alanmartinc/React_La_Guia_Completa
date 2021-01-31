const nombre = 'Alan';
const trabajo = 'Desarrollador Web';

// Concatenar JavaScript
console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

// Concatenar con múltiples lineas
const contenedorApp1 = document.querySelector('#app1');
let html1 = '<ul>' +
                '<li> Nombre: ' + nombre + '</li>' +
                '<li> Trabajo: ' + trabajo + '</li>' +
            '</ul>';

contenedorApp1.innerHTML = html1;

const contenedorApp2 = document.querySelector('#app2');
let html = `
            <ul>
                <li>Nombre: ${nombre} </li>
                <li>Trabajo: ${trabajo} </li>
            </ul>
`;

contenedorApp2.innerHTML = html;