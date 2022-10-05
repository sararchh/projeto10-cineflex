import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../../services/api';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardSeat from '../../components/CardSeat';

import { Container, Content } from './styles';

function Seats() {
  const params = useParams();

  const [seatsMovie, setSeatsMovie] = useState([]);
  const [seatsSelected, setSeatsSelected] = useState([]);

  useEffect(() => {
    fetchSeats(params.id);
    // eslint-disable-next-line
  }, [])

  const fetchSeats = async (id) => {
    try {
      const { data } = await api.get(`showtimes/${id}/seats`);
      setSeatsMovie(data);
    } catch (error) {
      toast.error('Erro ao buscar sessão');
    }
  }

  const handleRemoveSeatSelected = (id) => {
    const newArray = [...seatsSelected];

    const filterCard = newArray.filter(i => i !== id);
    setSeatsSelected(filterCard);
  }

  const handleInsertSeatSelected = (id) => {
    const newArray = [...seatsSelected];
    newArray.push(id);
    setSeatsSelected(newArray);
  }

  return (
    <>
      <Header />

      <Container>
        <h1>Selecione o(s) assento(s)</h1>

        <Content>
          {seatsMovie.length !== 0 && seatsMovie.seats.map((i) => (
            <CardSeat
              key={i.id}
              idSeat={i.id}
              Seat={i.name}
              isAvailable={i.isAvailable}
              seatsSelected={seatsSelected}
              handleInsertSeatSelected={handleInsertSeatSelected}
              handleRemoveSeatSelected={handleRemoveSeatSelected}
            />
          ))}
        </Content>

      </Container>

      {seatsMovie.length !== 0 && (
        <Footer
          posterURL={seatsMovie.movie.posterURL}
          title={seatsMovie.movie.title}
          date={seatsMovie.day.date}
          weekday={seatsMovie.day.weekday}
        />
      )}
    </>
  );
}

export default Seats;