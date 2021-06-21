import React from 'react'
import styled from '@emotion/styled'
import {css} from '@emotion/react'

const InputText = styled.input`
    border: 1px solid var(--gris3);
    padding: 1rem;
    min-width: 300px;
`;

const InputSubmit = styled.button`
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: 4rem;
    background-image: url('/static/img/buscar.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top: 1px;
    background-color: white;
    border: none;
    text-indent: -9999px;

    &:hover {
        cursor: pointer;
    }
`;

const Position = styled.form`
    position: relative;
`;

const Buscar = () => {
    return(
        <Position>
            <InputText 
                type="text"
                placeholder="Buscar Productos"
            />

            <InputSubmit type="submit">Buscar</InputSubmit>
        </Position>
    );
}

export default Buscar;