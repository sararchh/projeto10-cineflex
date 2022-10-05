import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../../services/api';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardSeat from '../../components/CardSeat';

import { Container, Content, FormData, ContentForm } from './styles';
import CardSubtitle from '../../components/CardSubtitle';

function Seats() {
  const params = useParams();

  const [seatsMovie, setSeatsMovie] = useState([]);
  const [seatsSelected, setSeatsSelected] = useState([]);
  const [nameUser, setNameUser] = useState();
  const [cpfUser, setCpfUser] = useState();

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

  const handleInsertSeatSelected = (id) => {
    const newArray = [...seatsSelected];
    newArray.push(id);
    setSeatsSelected(newArray);
  }

  const handleRemoveSeatSelected = (id) => {
    const newArray = [...seatsSelected];
    const filterCard = newArray.filter(i => i !== id);
    setSeatsSelected(filterCard);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('nameUser', nameUser)
    console.log('cpfUser', cpfUser)
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

        <CardSubtitle />

        <FormData onSubmit={handleSubmit}>
          <ContentForm>
            <p>Nome do comprador:</p>
            <input
              type='text'
              value={nameUser}
              onChange={(e) => { setNameUser(e.target.value) }}
              placeholder='Digite seu nome...'
            />
          </ContentForm>

          <ContentForm>
            <p>CPF do comprador:</p>
            <input
              value={cpfUser}
              onChange={(e) => { setCpfUser(e.target.value) }}
              placeholder='Digite seu CPF...'
            />
          </ContentForm>

          <button type='submit'>Reservar assento(s)</button>
        </FormData>

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