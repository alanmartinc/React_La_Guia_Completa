import React from 'react'
import {css} from '@emotion/react'
import Layout from '../components/layouts/Layout'
import {Formulario, Campo, InputSubmit, Error} from '../components/ui/Formulario'
import styled from '@emotion/styled'
import firebase from '../firebase'

// Validaciones
import useValidacion from '../hooks/useValidacion'
import validarCrearCuenta from '../validacion/validarCrearCuenta'

const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}

const Centrar = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const CrearCuenta = () => {
  const {valores, errores, handleSubmit, handleChange, handleBlur} = useValidacion(STATE_INICIAL, validarCrearCuenta, CrearCuenta);

  const {nombre, email, password} = valores;

  async function CrearCuenta() {
    try {
      await firebase.registrar(nombre, email, password);
    } catch (error) {
      console.log('Hubo un error al crear el usuario ', error);
    }
  }

  return (
    <div>
      <Layout>
        <>
          <Centrar>Crear Cuenta</Centrar>
  
          <Formulario
            onSubmit={handleSubmit}
            noValidate
          >
            <Campo>
              <label htmlFor="nombre">Nombre</label>
              <input 
                type="text"
                id="nombre"
                placeholder="Tu Nombre"
                name="nombre"
                value={nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>

            {errores.nombre && <Error>{errores.nombre}</Error>}
  
            <Campo>
              <label htmlFor="email">Email</label>
              <input 
                type="email"
                id="email"
                placeholder="Tu Email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>

            {errores.email && <Error>{errores.email}</Error>}
  
            <Campo>
              <label htmlFor="password">Password</label>
              <input 
                type="password"
                id="password"
                placeholder="Tu Password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>

            {errores.password && <Error>{errores.password}</Error>}
  
            <InputSubmit 
              type="submit"
              value="Crear Cuenta"
            />
          </Formulario>
        </>
      </Layout>
    </div> 
  )
}

export default CrearCuenta