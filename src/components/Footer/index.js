import React from 'react';

import { Container, Content, ContentDate, Text } from './styles';

function Footer({ posterURL, title, weekday, date }) {
  
  return (
    <Container>
      <Content>
        <img src={posterURL} alt='imagem do filme' />
      </Content>

      <ContentDate>
        <Text>{title}</Text>
        <Text>{date}</Text>
        <Text>{weekday}</Text>
      </ContentDate>
    </Container>
  );
}

export default Footer;