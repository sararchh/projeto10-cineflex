import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 10px 20px;

    p {
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
  }
`;

export const Card = styled.button`
  height: 25px;
  width: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 4px;
  cursor: pointer;

  background-color: ${({ color }) => color};

  border: 1px solid ${({ border }) => border};
  border-radius: 17px;
`;

