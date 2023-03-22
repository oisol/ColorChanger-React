import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100px;
    padding: 5px;
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 150%);
    box-shadow: 0px 3px 10px 1px #00000035;

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
    color: #BAFFBD;
    cursor: default;

    @media only screen and (max-width: 480px) {
        height: auto;
    
    }    
`