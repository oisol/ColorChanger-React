import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100px;
    padding: 5px;
    box-shadow: 0px 3px 10px 1px #00000035;
    background: ${ ({ theme }) => theme.headerBg };

    @media only screen and (max-width: 720px) {
        height: 80px;
    }

    @media only screen and (max-width: 480px) {
        height: auto;
    
    }    
`

export const Title = styled.h1`
    height: 80px;
    overflow: hidden;
    text-align: center;
    font-weight: 400;
    font-size: 40px;
    font-family: 'Pacifico', cursive;
    color: ${ ({ theme }) => theme.headerText };
    cursor: default;

    @media only screen and (max-width: 480px) {
        height: auto;
    
    }    
`