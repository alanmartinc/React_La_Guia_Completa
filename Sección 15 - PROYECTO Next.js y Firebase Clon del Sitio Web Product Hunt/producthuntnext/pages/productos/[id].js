import React, {useEffect, useContext, useState} from 'react'
import {useRouter} from 'next/router'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import {es} from 'date-fns/locale'
import {FirebaseContext} from '../../firebase'
import Layout from '../../components/layouts/Layout'
import Error404 from '../../components/layouts/404'
import styled from '@emotion/styled'
import {Campo, InputSubmit} from '../../components/ui/Formulario'
import Boton from '../../components/ui/Boton'

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

const EspaciadoVotos = styled.div`
    margin-top: 5rem;
    text-align: center;
`;

const CentrarParrafo = styled.p`
    text-align: center;
`;

const BorderList = styled.li`
    border: 1px solid #e1e1e1;
    padding: 2rem;
    margin-top: 1rem;
`;

const NegritaSpan = styled.span`
    font-weight: bold;
`;

const CreadorProducto = styled.p`
    padding: .5rem 2rem;
    background-color: #DA552F;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    text-align: center;
`;

const Producto = () => {
    // State del componente
    const [producto, guardarProducto] = useState({});
    const [error, guardarError] = useState(false);
    const [comentario, guardarComentario] = useState({});
    const [consultarDB, guardarConsultarDB] = useState(true);

    // Routing para obtener el id actual
    const router = useRouter();
    const {query: {id}} = router;

    // Context de firebase
    const {firebase, usuario} = useContext(FirebaseContext);

    useEffect(() => {
        if(id && consultarDB) {
            const obtenerProducto = async () => {
                const productoQuery = await firebase.db.collection('productos').doc(id);
                const producto = await productoQuery.get();
                if(producto.exists) {
                    guardarProducto(producto.data());
                    guardarConsultarDB(false);
                } else {
                    guardarError(true);
                    guardarConsultarDB(false);
                }
            }
            obtenerProducto();
        }
    }, [id]);

    if(Object.keys(producto).length === 0 && !error) return 'Cargando...';

    const {comentarios, creado, descripcion, empresa, nombre, url, urlimagen, votos, creador, haVotado} = producto;

    // Administrar y validar los votos
    const votarProducto = () => {
        if(!usuario) {
            return router.push('/login');
        }

        // Obtener y sumar un nuevo voto
        const nuevoTotal = votos + 1;
        
        // Verificar si el usuario actual a votado
        if(haVotado.includes(usuario.uid)) return;

        // Guardar el ID del usuario que ha votado
        const nuevoHaVotado = [...haVotado, usuario.uid];

        // Actualizar en la BD
        firebase.db.collection('productos').doc(id).update({votos: nuevoTotal, haVotado: nuevoHaVotado});

        // Actualizar el state
        guardarProducto({
            ...producto,
            votos: nuevoTotal
        });

        guardarConsultarDB(true); // Hay un voto, por lo tanto consultar a la BD
    }

    // Funciones para crear comentarios
    const comentarioChange = e => {
        guardarComentario({
            ...comentario,
            [e.target.name] : e.target.value
        });
    }

    // Identifica si el comentario es del creador del producto
    const esCreador = id => {
        if(creador.id == id) {
            return true;
        }
    }

    const agregarComentario = e => {
        e.preventDefault();

        if(!usuario) {
            return router.push('/login');
        }

        // Información extra al comentario
        comentario.usuarioId = usuario.uid;
        comentario.usuarioNombre = usuario.displayName;

        // Tomar copia de comentarios y agregarlos al arreglo
        const nuevosComentarios = [...comentarios, comentario];

        // Actualizar la BD
        firebase.db.collection('productos').doc(id).update({
            comentarios: nuevosComentarios
        });

        // Actualizar el state
        guardarProducto({
            ...producto,
            comentarios: nuevosComentarios
        });

        guardarConsultarDB(true); // Hay un comentario, por lo tanto consultar a la BD
    }

    // Función que revisa que el creador del producto sea el mismo que esta autenticado
    const puedeBorrar = () => {
        if(!usuario) return false;

        if(creador.id === usuario.uid) {
            return true
        }
    }

    // Elimina un producto de la bd
    const eliminarProducto = async () => {
        if(!usuario) {
            return router.push('/login');
        }

        if(creador.id !== usuario.uid) {
            return router.push('/');
        }

        try {
            await firebase.db.collection('productos').doc(id).delete();
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Layout>
            <>
            {error ? <Error404/> : (
                <div className="contenedor">
                    <TextoCentrado>
                        {nombre}
                    </TextoCentrado>
                
                    <ContenedorProducto>
                        <div>
                            <p>Publicado hace: {formatDistanceToNow(new Date(creado), {locale: es})}</p>
                            <p>Por: {creador.nombre} de {empresa}</p>
                            <img src={urlimagen}/>
                            <p>{descripcion}</p>

                            {usuario && (
                                <>
                                    <h2>Agrega tu comentario</h2>
                                    <form
                                        onSubmit={agregarComentario}
                                    >
                                        <Campo>
                                            <input
                                                type="text"
                                                name="mensaje"
                                                onChange={comentarioChange}
                                            />
                                        </Campo>
                
                                        <InputSubmit
                                            type="submit"
                                            value="Agregar Comentario"
                                        />
                                    </form>
                                </>
                            )}

                            <EspaciadoComentario>Comentarios</EspaciadoComentario>

                            {comentarios.length === 0 ? "Aún no hay comentarios" : (
                                <ul>
                                    {comentarios.map((comentario, i) => (
                                        <BorderList
                                            key={`${comentario.usuarioId}-${i}`}
                                        >
                                            <p>{comentario.mensaje}</p>
                                            <p>Escrito por:
                                                <NegritaSpan>
                                                    {''} {comentario.usuarioNombre}
                                                </NegritaSpan>
                                            </p>

                                            {esCreador(comentario.usuarioId) && 
                                                <CreadorProducto>Es Creador</CreadorProducto>
                                            }
                                        </BorderList>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <aside>
                            <Boton
                                target="_blank"
                                bgColor="true"
                                href={url}
                            >Visitar URL</Boton>

                            <EspaciadoVotos>
                                <CentrarParrafo>{votos} Votos</CentrarParrafo>
                                {usuario && (
                                    <Boton
                                        onClick={votarProducto}
                                    >Votar</Boton>
                                )}
                            </EspaciadoVotos>
                        </aside>
                    </ContenedorProducto>

                    {puedeBorrar() &&
                        <Boton
                            onClick={eliminarProducto}
                        >Eliminar Producto</Boton>
                    }
                </div>
            )}
            </>
        </Layout>
    );
}

export default Producto;