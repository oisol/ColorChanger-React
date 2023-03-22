import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    padding-top: 30px;
`

export const Card = styled.div`
    overflow: auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(250, 224, 250);
    width: 360px;
    height: auto;
    border-radius: 12px;
    padding: 10px;
    margin: 0px 10px 0px 10px;
    box-shadow: 0px 3px 10px 1px #00000035;
`

export const Text = styled.p`
    font-size: 26px;
    font-weight: 400;
    text-align: center;
    font-family: 'Anton';
    color: #5dbb87;
    cursor: default;
    letter-spacing: 1.2px;
`

export const Button = styled.button`
    height: 50px;
    width: 100px;
    padding: 10px;
    margin: 4px;
    margin-top: 10px;

    border: 0;
    border-radius: 8px;
    background-color: #aff6da;
    color: #252525;

    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1.2px;
    box-shadow: #25252580 1px 1.5px 2px 1px;

    &:hover {
        background-color: #b6ffe2;
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
    background-color: rgb(111, 223, 217);
`

export const Color = styled.p`
    font-size: 22px;
    font-weight: bold;
    color: rgb(87, 86, 86);
    cursor: pointer;
`