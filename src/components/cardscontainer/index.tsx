import React from "react";
import { Container } from './styles.ts'
import SideBar from "../sidebar/index.tsx";
import MainContent from "../maincontent/index.tsx";

function CardsContainer () {
    return (
        <Container>
            <SideBar />
            <MainContent />
        </Container>
    )
}

export default CardsContainer;