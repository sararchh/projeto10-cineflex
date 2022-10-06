import styled from "styled-components";

export const Container = styled.div`
    max-width: 375px;
    width: 375px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button {
        height: 42px;
        width: 225px;
        left: 72px;
        top: 688px;
        border-radius: 3px;

        background: var(--orange);
        border-radius: 3px;

        margin-top: 50px;

        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: var(--white);
    }
`;

export const CardTitle = styled.div`
    width: 180px;
    height: 110px;

    display: flex;
    align-items: center;
    justify-content: center;
  
  h1 {
    color: var(--green-title);
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: center;
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: 15px 0;

  h3 {
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: left;
  }

  p {
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
  }
`;