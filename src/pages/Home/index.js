import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import CardMovie from '../../components/Movie';

import { api } from '../../services/api';

import { Container } from './styles';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const { data } = await api.get('movies');
      setMovies(data);
    } catch (error) {
      toast.error('Erro ao buscar filmes');
    }
  }

  return (
    <>
      <Header />

      <Container>
        <h1>Selecione o filme</h1>
        {movies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} />
        ))}
      </Container>

    </>
  )
}

