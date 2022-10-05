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
    flex-direction: column;

    h1 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    margin: 20px 0;
    }
`;

export const Content = styled.div`
    width: 350px;
    height: auto;

    display: flex;
    flex-wrap: wrap;
`;