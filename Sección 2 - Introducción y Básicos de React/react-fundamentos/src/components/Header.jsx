import React from 'react';

function Header(){
    // Lógica JavaScript
    const edad = 18;
    let mensaje;

    if(edad >= 18){
        mensaje = 'Eres mayor de edad';
    } else {
        mensaje = 'Eres menor de edad';
    }

    // Lo que este en el return es lo que se ve en pantalla
    return(
        <h1 className="header">{mensaje}</h1>
    )
}

export default Header;