import { styled } from "styled-components";

export const Container =styled.div`
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #111;
    width: 600px;
    height: 950px;
    margin-left: 35px;
    display: flex;
    flex-direction: column;
   // justify-content: center;
    position: relative;
    align-items: center;
    
`;

export const Img =styled.img`
    width: 400px;
    height: 400px;
    margin-top: -50px;
    border-radius: 8px;
    position: absolute;
    max-width: 70%;
`;

export const Button =styled.div`
    padding: 1rem 1.2rem;
    color: white;
    background: linear-gradient(90deg, rgba(250,82,82,1) 0%, rgba(221,36,118,1) 98%);
    font-weight: 700;
    border-radius: 3rem;
    cursor: pointer;
    margin-top: 40px;
    border: none;
    
`;