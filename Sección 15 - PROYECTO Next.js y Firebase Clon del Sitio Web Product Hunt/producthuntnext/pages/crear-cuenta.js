import React from 'react'
import {css} from '@emotion/react'
import Layout from '../components/layouts/Layout'
import {Formulario, Campo, InputSubmit} from '../components/ui/Formulario'
import styled from '@emotion/styled'

const Centrar = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

const CrearCuenta = () => (
  <div>
    <Layout>
      <>
        <Centrar>Crear Cuenta</Centrar>

        <Formulario>
          <Campo>
            <label htmlFor="nombre">Nombre</label>
            <input 
              type="text"
              id="nombre"
              placeholder="Tu Nombre"
              name="nombre"
            />
          </Campo>

          <Campo>
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              id="email"
              placeholder="Tu Email"
              name="email"
            />
          </Campo>

          <Campo>
            <label htmlFor="password">Password</label>
            <input 
              type="password"
              id="password"
              placeholder="Tu Password"
              name="password"
            />
          </Campo>

          <InputSubmit 
            type="submit"
            value="Crear Cuenta"
          />
        </Formulario>
      </>
    </Layout>
  </div> 
)

export default CrearCuenta