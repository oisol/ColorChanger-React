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
    background-color: rgb(231, 191, 231);
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
    color: #8af3e3;
    cursor: default;
`

export const Button = styled.button`
    /* Fazer */
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