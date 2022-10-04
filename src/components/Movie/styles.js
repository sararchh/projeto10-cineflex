import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Content = styled(Link)`
  width: 145px;
  height: 209px;

  margin: 5px 15px;

  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 129px;
    height: 193px;
  }
`;