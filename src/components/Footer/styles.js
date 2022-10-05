import styled from "styled-components";

export const Container = styled.footer`
  max-width: 375px;
  width: 375px;
  height: 117px;

  padding: 0 15px;

  display: flex;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 0;

  background: var(--background);
  border: 1px solid #9EADBA;  
`;

export const Content = styled.div`
  width: 64px;
  height: 89px;

  border-radius: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--white);

  img{
    width: 48px;
    height: 72px;
  }

`;

export const Text = styled.p`
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;

    margin-left: 10px;
`;

export const ContentDate = styled.div`
  display: flex;
  flex-direction: column;
`;