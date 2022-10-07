import React from 'react';

import { Content } from './styles';

export default function CardMovie({ movie }) {

  return (
    <Content data-identifier="movie-outdoor" to={`/movie/${movie.id}`}>
      <img src={movie.posterURL} alt='imagem do filme' />
    </Content>

  )
}

