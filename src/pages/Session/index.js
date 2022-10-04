import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../../services/api';
import { toast } from 'react-toastify';

import Header from '../../components/Header';

import { Container, Content, CardTitle } from './styles';

function Session() {
  const params = useParams();

  const [sessionMovie, setSessionMovie] = useState([]);

  useEffect(() => {
    fetchMovie(params.id);
    // eslint-disable-next-line
  }, [])

  const fetchMovie = async (id) => {
    try {
      const { data } = await api.get(`movies/${id}/showtimes`);
      setSessionMovie(data);
    } catch (error) {
      toast.error('Erro ao buscar o filme');
    }
  }


  return (
    <>
      <Header />
      <Container>

        <h1>Selecione o horário</h1>

        <Content>
          {Boolean(sessionMovie.days) && sessionMovie.days.map((i) => (
            <>
              <CardTitle key={i.id}>
                <p>{i.weekday}</p> <span>-</span> <p>{i.date}</p>
              </CardTitle>

              {i.showtimes.map((item) => (
                <button>{item.name}</button>
             ))}
            </>
          ))}
        </Content>
      </Container>
    </>
  )
}

export default Session;