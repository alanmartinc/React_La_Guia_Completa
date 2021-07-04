import React, {useEffect, useContext, useState} from 'react'
import {useRouter} from 'next/router'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import {es} from 'date-fns/locale'
import {FirebaseContext} from '../../firebase'
import Layout from '../../components/layouts/Layout'
import Error404 from '../../components/layouts/404'
import styled from '@emotion/styled'
import {Campo, InputSubmit} from '../../components/ui/Formulario'

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

const EspaciadoComentario = styled.h2`
    margin: 2rem 0;
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
                    <p>Publicado hace: {formatDistanceToNow(new Date(creado), {locale: es})}</p>
                    <img src={urlimagen}/>
                    <p>{descripcion}</p>

                    <h2>Agrega tu comentario</h2>
                    <form>
                        <Campo>
                            <input
                                type="text"
                                name="mensaje"
                            />
                        </Campo>

                        <InputSubmit
                            type="submit"
                            value="Agregar Comentario"
                        />
                    </form>

                    <EspaciadoComentario>Comentarios</EspaciadoComentario>
                    {comentarios.map(comentario => (
                        <li>
                            <p>{comentario.nombre}</p>
                            <p>Escrito por: {comentario.usuarioNombre}</p>
                        </li>
                    ))}
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