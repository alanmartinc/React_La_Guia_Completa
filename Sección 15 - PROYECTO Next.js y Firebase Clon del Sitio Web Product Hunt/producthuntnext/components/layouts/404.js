import React from 'react'
import styled from '@emotion/styled'

const TextoCentrado = styled.h1`
    margin-top: 5rem;
    text-align: center;
`;

const Error404 = () => {
    return(
        <TextoCentrado>Producto no existente</TextoCentrado>
    );
}

export default Error404;