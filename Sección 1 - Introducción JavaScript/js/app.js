let viajando1 = function(destino){
    return `Viajando a la ciudad de: ${destino}`;
}

let viaje1;
viaje1 = viajando1('Buenos Aires');

console.log(viaje1);

// Arrow functions simplificado
let viajando2 = destino => `Viajando a la ciudad de: ${destino}`;

let viaje2;
viaje2 = viajando2('Londres');

console.log(viaje2);