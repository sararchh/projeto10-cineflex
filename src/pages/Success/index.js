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
          <p data-identifier="movie-session-infos-reserve-finished">{searchParams.get('title')}</p>
          <p data-identifier="movie-session-infos-reserve-finished">{searchParams.get('date')}  {searchParams.get('hours')}</p>
        </Content>

        <Content>
          <h3>Ingressos</h3>

          {arraySeat.map((i) => (
            <p data-identifier="seat-infos-reserve-finished">Assento: {i}</p>
          ))}
        </Content>

        <Content>
          <h3>Comprador</h3>
          <p data-identifier="buyer-infos-reserve-finished">Nome: {searchParams.get('nameUser')}</p>
          <p data-identifier="buyer-infos-reserve-finished">CPF: {searchParams.get('cpfUser')}</p>
        </Content>

        <Link to='/'>
          <button data-identifier="back-to-home-btn">Voltar pra Home</button>
        </Link>
      </Container> 
    </>
  )
}

export default Success;