import React from 'react'
import styled from '@emotion/styled'

const TextoCentrado = styled.h1`
    margin-top: 5rem;
    text-align: center;
`;

const Error404 = () => {
    return(
        <TextoCentrado>No se puede mostrar</TextoCentrado>
    );
}

export default Error404;