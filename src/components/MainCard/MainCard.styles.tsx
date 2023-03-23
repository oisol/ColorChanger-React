import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    padding-top: 30px;
`

export const Card = styled.div`
    z-index: 1;
    overflow: auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    height: auto;
    border-radius: 12px;
    padding: 10px;
    margin: 0px 10px 0px 10px;
    box-shadow: 0px 3px 10px 1px #00000035;
    background-color: ${ ({ theme }) => theme.mainBg };
`

export const Text = styled.p`
    font-size: 26px;
    font-weight: 400;
    text-align: center;
    font-family: 'Anton';
    cursor: default;
    letter-spacing: 1.2px;
    padding: 0 10px 0 10px;
    color: ${ ({ theme }) => theme.mainText };
`

export const Button = styled.button`
    height: 50px;
    width: 100px;
    padding: 10px;
    margin: 4px;
    margin-top: 10px;

    border: 0;
    border-radius: 8px;
    background-color: ${ ({ theme }) => theme.mainButton };
    color: ${ ({ theme }) => theme.mainButtonText };

    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1.2px;
    box-shadow: #25252580 1px 1.5px 2px 1px;

    &:hover {
        background-color: ${ ({ theme }) => theme.mainButtonTextHover };
        cursor: pointer;
    }

    &:active {
        scale: 90%;
    }
`

export const ColorsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 50px;
    margin-top: 30px;
    padding:10px;
    width: 300px;
    height: 50px;
    border-radius: 16px;
    background-color: ${ ({ theme }) => theme.mainColorsContainer };
`

export const Color = styled.p`
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    color: ${ ({ theme }) => theme.mainColorsText };
`