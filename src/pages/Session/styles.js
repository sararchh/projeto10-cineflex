import styled from "styled-components";

export const Container = styled.div`
    max-width: 375px;
    width: 375px;
    max-height:669px;
    height: 669px;

    overflow: scroll;
    overflow-y: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    margin: 40px;
    margin-top: 220px;
    }
`;

export const Content = styled.div`
   max-width: 375px;
   width: 375px;

   span {
    display: flex;
   }
`;

export const CardTitle = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: row;

  span {
    margin: 0 10px;
  }

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
  }
`;