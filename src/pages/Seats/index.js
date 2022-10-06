import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../../services/api';
import { toast } from 'react-toastify';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardSeat from '../../components/CardSeat';

import { Container, Content, FormData, ContentForm } from './styles';
import CardSubtitle from '../../components/CardSubtitle';
import { formatCPF } from '../../utils/formatCPF';
import { normalizeString } from '../../utils/normalizeString';

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

  const postSeats = async () => {
    try {
      const userFormatted = {
        ids: seatsSelected,
        name: nameUser,
        cpf: normalizeString(cpfUser),
      }

      await api.post('seats/book-many', userFormatted);

    } catch (error) {
      toast.error('Erro ao reservar assento');
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

    console.log('nameUser', nameUser);
    console.log('cpfUser', cpfUser);
    console.log('seatsSelected', seatsSelected);

    postSeats();
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
              required={true}
            />
          </ContentForm>

          <ContentForm>
            <p>CPF do comprador:</p>
            <input
              value={formatCPF(cpfUser)}
              onChange={(e) => { setCpfUser(e.target.value) }}
              placeholder='Digite seu CPF...'
              required={true}
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