import React from 'react';

import { Container, Content, ContentDate, Text } from './styles';

function Footer({ posterURL, title, weekday, date }) {
  
  return (
    <Container data-identifier="movie-img-preview">
      <Content>
        <img src={posterURL} alt='imagem do filme' />
      </Content>

      <ContentDate>
        <Text data-identifier="movie-and-session-infos-preview">{title}</Text>
        <Text data-identifier="movie-and-session-infos-preview">{date}</Text>
        <Text data-identifier="movie-and-session-infos-preview">{weekday}</Text>
      </ContentDate>
    </Container>
  );
}

export default Footer;