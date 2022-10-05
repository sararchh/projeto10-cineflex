import React from 'react';

import { Container, Card, Content } from './styles';

function CardSubtitle() {
  return (
    <Container>
      <Content>
        <Card color={'var(--green)'} border={'#0E7D71'} />
        <p>Selecionado</p>
      </Content>

      <Content>
        <Card color={'var(--gray)'} border={'#808F9D'}/>
        <p>Disponível</p>
      </Content>

      <Content>
        <Card color={'var(--yellow)'} border={'#F7C52B'}/>
        <p>Indisponível</p>
      </Content>
    </Container>
  )
}

export default CardSubtitle;