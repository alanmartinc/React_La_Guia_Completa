import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import {css} from '@emotion/react'
import Buscar from '../ui/Buscar'
import Navegacion from './Navegacion'
import Boton from '../ui/Boton'


const Cabecera = styled.header`
    border-bottom: 2px solid var(--gris3);
    padding: 1rem 0;
`;

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    color: var(--naranja);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
    cursor: pointer;
`;

const CentrarElemento = styled.div`
    display: flex;
    align-items: center;
`;

const SepararElemento = styled.p`
    margin-right: 2rem;
`;

const Header = () => {
    const usuario = false;

    return(
        <Cabecera>
            <ContenedorHeader>
                <CentrarElemento>
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>

                    <Buscar/>

                    <Navegacion/>
                </CentrarElemento>

                <CentrarElemento>
                    {usuario ? (
                        <>
                            <SepararElemento>Hola: Alan</SepararElemento>

                            <Boton
                                bgColor="true"
                            >Cerrar Sesión</Boton>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <Boton
                                    bgColor="true"
                                >Login</Boton>
                            </Link>
                            <Link href="/crear-cuenta">
                                <Boton>Crear Cuenta</Boton>
                            </Link>
                        </>
                    )}
                </CentrarElemento>
            </ContenedorHeader>
        </Cabecera>
    );
}

export default Header;