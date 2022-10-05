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

export const FormData = styled.form`
    width: 340px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 30px 0;

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

export const ContentForm = styled.div`
    margin: 15px 0;

    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
    }

    input {
    width: 327px;
    height: 51px;

    border-radius: 3px;

    padding: 0 15px;

    font-size: 18px;
    outline: none;

    background: var(--white);
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    }

    input::placeholder {
        color: #AFAFAF;
        font-size: 18px;
        font-style: italic;
        line-height: 21px;
    }
`;
