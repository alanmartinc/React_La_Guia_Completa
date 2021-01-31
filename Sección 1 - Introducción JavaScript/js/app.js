// Object Destructuring: extraer valores de un objeto
const aprendiendoJS = {
    version: {
        nueva: 'ES6',
        anterior: 'ES5'
    },
    framework: ['VueJS', 'AngularJS']
}

console.log(aprendiendoJS);

// Versión anterior
let Version = aprendiendoJS.version.nueva;
let Framework = aprendiendoJS.framework[0];
console.log(Version, Framework);

// Versión nueva: Se debe pasar el mismo nombre de las propiedades del objeto
let {anterior} = aprendiendoJS.version;
console.log(anterior);