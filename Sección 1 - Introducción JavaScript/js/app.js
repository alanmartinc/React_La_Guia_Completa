// Function declaration
saludar('Alan');
function saludar(nombre){
    console.log('Bienvenido ' + nombre);
}

// Function expression
const cliente = function(nombreCliente){
    console.log('Mostrando datos del cliente: ' + nombreCliente);
}
cliente('Alan');