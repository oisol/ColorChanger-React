import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    width:100%;
    position: absolute;
    bottom: 0;
`

export const Container = styled.div`
    z-index: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    width:100%;
    height: 70px;
    gap: 90px;

    background-color: ${ ({ theme }) => theme.footer };

    @media only screen and (max-width: 720px) {
        height: 60px;
        gap: auto;
    }

    @media only screen and (max-width: 480px) {
        height: auto;
        gap: 10px;
        padding: 5px;
    }    
`;