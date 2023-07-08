import { styled } from "styled-components";

export const Container =styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
`;

export const Quadro =styled.div`
    width: 90%;
    border: 2px solid #333;
    border-radius: 5px ;
    margin-bottom: 15px;
    margin-left: 35px;
    display: flex;
    height: 140px;
    align-items: center;
    justify-content: space-evenly;

`;

export const Title =styled.h1`
    font-size: 42px;
    color: white;
`;

export const Icon =styled.img`
    width: 55px;
    height: 55px;
`;