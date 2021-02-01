// Promises con Ajax
const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // Llamado a Ajax
    const xhr = new XMLHttpRequest();

    // Abrir la conexión
    xhr.open('GET', api, true);

    // On load
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }

    // Opcional on error
    xhr.onerror = (error) => reject(error);

    // Send
    xhr.send();
});

// Me muestra 20 usuarios
descargarUsuarios(20).then(
    miembros => imprimirHTML(miembros),
    error => console.error(new Error('Hubo un error' + error))
)

// Me los muestra de forma individual
function imprimirHTML(usuarios){
    let html = '';
    usuarios.forEach(usuario => {
        html += `
            <li>Nombre: ${usuario.name.first} ${usuario.name.last}</li>
            <li>Pais: ${usuario.nat}</li>
            <li>Imagen: <img src="${usuario.picture.medium}"></li>
        `;
    });

    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
}