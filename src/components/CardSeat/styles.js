import styled from "styled-components";

export const Card = styled.button`
  height: 26px;
  width: 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 4px;
  cursor: pointer;

  background: ${({isAvailable, selected}) => selected ? 'var(--green)' : isAvailable  ? 'var(--gray)' :  'var(--yellow)'};
  border: 1px solid ${({isAvailable, selected}) => isAvailable  ? '#808F9D'  : '#F7C52B'};
  
  border-radius: 12px;
`;

