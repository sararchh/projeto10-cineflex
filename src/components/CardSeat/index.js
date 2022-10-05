import React, { useState } from 'react';

import { Card } from './styles';

import { toast } from 'react-toastify';

function CardSeat({ Seat, idSeat, isAvailable, seatsSelected, handleInsertSeatSelected, handleRemoveSeatSelected }) {


  const handleSeatAvailable = () => {
    if (isAvailable === false) {
      toast.error("Esse assento não está disponível");
      return;
    }

    const hasAdded = seatsSelected.includes(idSeat);

    if(!hasAdded) {
      handleInsertSeatSelected(idSeat);
    } else {
      handleRemoveSeatSelected(idSeat);
    }

  }

  return (
    <Card
      isAvailable={isAvailable}
      selected={seatsSelected.includes(idSeat)}
      onClick={() => handleSeatAvailable()}
    >
      {Seat}
    </Card>
  )
}

export default CardSeat;