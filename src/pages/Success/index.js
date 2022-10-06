import React from 'react';
import Header from '../../components/Header';

import { useSearchParams } from 'react-router-dom';

// import { Container } from './styles';

function Success() {
  const [searchParams] = useSearchParams();

  return (
    <>
      <Header />
      <p>{searchParams.get('seatsSelected')}</p>
    </>
  )
}

export default Success;