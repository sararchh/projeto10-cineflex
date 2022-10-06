import React from 'react';
import Header from '../../components/Header';

import { Link, useSearchParams } from 'react-router-dom';

import { Container, CardTitle, Content } from './styles';

function Success() {
  const [searchParams] = useSearchParams();

  const arraySeat = searchParams.get('seatsSelected').split(',');

  return (
    <>
      <Header />

      <Container>
        <CardTitle>
          <h1>Pedido feito
            com sucesso!</h1>
        </CardTitle>

        <Content>
          <h3>Filme e sessão</h3>
          <p>{searchParams.get('title')}</p>
          <p>{searchParams.get('date')}  {searchParams.get('hours')}</p>
        </Content>

        <Content>
          <h3>Ingressos</h3>

          {arraySeat.map((i) => (
            <p>Assento: {i}</p>
          ))}
        </Content>

        <Content>
          <h3>Comprador</h3>
          <p>Nome: {searchParams.get('nameUser')}</p>
          <p>CPF: {searchParams.get('cpfUser')}</p>
        </Content>

        <Link to='/'>
          <button>Voltar pra Home</button>
        </Link>
      </Container>
    </>
  )
}

export default Success;