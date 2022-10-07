import React from 'react';

import { Container, Card, Content } from './styles';

function CardSubtitle() {
  return (
    <Container data-identifier="seat-available-subtitle">
      <Content>
        <Card color={'var(--green)'} border={'#0E7D71'} />
        <p>Selecionado</p>
      </Content>

      <Content>
        <Card color={'var(--gray)'} border={'#808F9D'} data-identifier="seat-available-subtitle"/>
        <p>Disponível</p>
      </Content>

      <Content>
        <Card color={'var(--yellow)'} border={'#F7C52B'} data-identifier="seat-unavailable-subtitle"/>
        <p>Indisponível</p>
      </Content>
    </Container>
  )
}

export default CardSubtitle;