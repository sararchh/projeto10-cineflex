import React from 'react';

import { Card } from './styles';

import { toast } from 'react-toastify';

function CardSeat({ Seat, idSeat, isAvailable, seatsSelectedID, handleInsertSeatSelected, handleRemoveSeatSelected }) {


  const handleSeatAvailable = () => {
    if (isAvailable === false) {
      toast.error("Esse assento não está disponível");
      return;
    }

    const hasAdded = seatsSelectedID.includes(idSeat);

    if(!hasAdded) {
      handleInsertSeatSelected(idSeat, Seat);
    } else {
      handleRemoveSeatSelected(idSeat, Seat);
    }

  }

  return (
    <Card
      isAvailable={isAvailable}
      selected={seatsSelectedID.includes(idSeat)}
      onClick={() => handleSeatAvailable()}
    >
      {Seat}
    </Card>
  )
}

export default CardSeat;