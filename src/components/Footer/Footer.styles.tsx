import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    width:100%;
    position: absolute;
    bottom: 0;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    width:100%;
    height: 70px;
    gap: 90px;
    
    background:rgb(120, 189, 224);

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