import { styled } from "styled-components";

export const Container =styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title =styled.h1`
    color: white;
    margin-left: 35px;
    margin-top: -10px;
`;

export const Span =styled.span`
    color: white;
    margin-left: 35px;
`;

export const Button =styled.button`
    width: 130px;
    height: 50px;
    color: white;
    background: linear-gradient(90deg, rgba(250,82,82,1) 0%, rgba(221,36,118,1) 98%);
    text-decoration: none;
    border-radius: 3rem;
    cursor: pointer;
    margin-top: 20px;
    margin-left: 30px;
    border: none;
    font-weight: 600;
    font-size: 15px;
`;

    /* padding: 1rem 1.2rem;
    color: white;
    background: linear-gradient(90deg, rgba(250,82,82,1) 0%, rgba(221,36,118,1) 98%);
    font-weight: 700;
    border-radius: 3rem;
    cursor: pointer;
    margin-top: 40px;
    border: none; */