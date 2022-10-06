import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, createSearchParams } from 'react-router-dom';

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
  const navigate = useNavigate();

  const [seatsMovie, setSeatsMovie] = useState([]);
  const [seatsSelected, setSeatsSelected] = useState([]);
  const [seatsSelectedID, setSeatsSelectedID] = useState([]);
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

  console.log('seatsSelected', seatsSelected)
  console.log('seatsSelected', seatsMovie.name)

  const postSeats = async () => {
    try {
      if (seatsSelectedID.length === 0) {
        toast.error('Selecione pelo menos 1 assento');
        return;
      }

      const userFormatted = {
        ids: seatsSelectedID,
        name: nameUser,
        cpf: normalizeString(cpfUser),
      }

      await api.post('seats/book-many', userFormatted);

      navigate({
        pathname: '/success',
        search: createSearchParams({
          nameUser: nameUser,
          cpfUser: cpfUser,
          seatsSelected: [seatsSelected],
          title: seatsMovie.movie.title,
          date: seatsMovie.day.date,
          hours: seatsMovie.name,
        }).toString()
      });

    } catch (error) {
      toast.error('Erro ao reservar assento');
      return;
    }
  }

  const handleInsertSeatSelected = (id, Seat) => {
    console.log('Seat', Seat);
    const newArray = [...seatsSelectedID];
    newArray.push(id);
    setSeatsSelectedID(newArray);

    const newArraySeat = [...seatsSelected];
    newArraySeat.push(Seat);
    setSeatsSelected(newArraySeat);
  }

  const handleRemoveSeatSelected = (id, Seat) => {
    const newArray = [...seatsSelectedID];
    const filterCard = newArray.filter(i => i !== id);
    setSeatsSelectedID(filterCard);
    
    const newArraySeat = [...seatsSelected];
    const filterCardSeat = newArraySeat.filter(i => i !== Seat);
    setSeatsSelected(filterCardSeat);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

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
              seatsSelectedID={seatsSelectedID}
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