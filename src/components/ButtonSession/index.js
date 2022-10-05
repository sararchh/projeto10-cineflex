import React from 'react';

import { Button } from './styles';

function ButtonSession({ text, idSession }) {


  return (
    <Button
      to={`/session/${idSession}`}
    >
      {text}
    </Button>
  )
}

export default ButtonSession;