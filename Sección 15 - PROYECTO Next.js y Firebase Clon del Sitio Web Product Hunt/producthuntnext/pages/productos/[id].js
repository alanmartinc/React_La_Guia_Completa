import React, {useEffect, useContext, useState} from 'react'
import {useRouter} from 'next/router'

import Layout from '../../components/layouts/Layout'
import {FirebaseContext} from '../../firebase'
import Error404 from '../../components/layouts/404'
import styled from '@emotion/styled'

const TextoCentrado = styled.h1`
    margin-top: 5rem;
    text-align: center;
`;

const ContenedorProducto = styled.div`
    @media (min-width:768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
    }
`;

const Producto = () => {
    // State del componente
    const [producto, guardarProducto] = useState({});
    const [error, guardarError] = useState(false);

    // Routing para obtener el id actual
    const router = useRouter();
    const {query: {id}} = router;

    // Context de firebase
    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
        if(id) {
            const obtenerProducto = async () => {
                const productoQuery = await firebase.db.collection('productos').doc(id);
                const producto = await productoQuery.get();
                if(producto.exists) {
                    guardarProducto(producto.data());
                } else {
                    guardarError(true);
                }
            }
            obtenerProducto();
        }
    }, [id]);

    if(Object.keys(producto).length === 0) return 'Cargando...';

    const {comentarios, creado, descripcion, empresa, nombre, url, urlimagen, votos} = producto;

    return(
        <Layout>
            <>
            {error && <Error404/>}

            <div className="contenedor">
                <TextoCentrado>
                    {nombre}
                </TextoCentrado>
            </div>

            <ContenedorProducto>
                <div>
                    1
                </div>

                <aside>
                    2
                </aside>
            </ContenedorProducto>
            </>
        </Layout>
    );
}

export default Producto;