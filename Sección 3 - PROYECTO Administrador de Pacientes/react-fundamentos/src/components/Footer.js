// Abreviado: imr
import React from 'react';

// Abreviado sfc
const Footer = ({fecha}) => (
    // Si no tenemos logica JS, abreviamos sacando el return y dejando los parentesis
        <footer>
            <p className="footer">Todos los derechos reservados &copy; {fecha}</p>
        </footer>
);

export default Footer;