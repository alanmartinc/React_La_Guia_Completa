export default function validarCrearProducto(valores) {
    let errores = {};

    // Validar el nombre del usuario
    if(!valores.nombre) {
        errores.nombre = "El Nombre es Obligatorio"
    }

    // Validar empresa
    if(!valores.empresa) {
        errores.empresa = "Nombre de Empresa es obligatorio"
    }

    // Validar la url
    if(!valores.url) {
        errores.url = "La URL del producto es obligatoria";
    } else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
        errores.url = "URL mal formateada o no válida"
    }

    // Validar descripción
    if(!valores.descripcion) {
        errores.descripcion = "Agrega una descripción de tu producto"
    }

    return errores;
}