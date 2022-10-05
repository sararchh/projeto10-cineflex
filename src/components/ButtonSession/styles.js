import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  width: 83px;
  height: 43px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--orange);

  border-radius: 3px;
  margin: 15px 22px;

  cursor: pointer;
  font-size: 18px;
  color: var(--white);
`;