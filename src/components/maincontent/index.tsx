import React from "react";
import { Container, Title , P, Div} from './styles.ts';
import CardsTech from "../cardstechnologies/index.tsx";
import Projetos from "../projetoscontainer/index.tsx";


function MainContent() {
    
    return (
        <Container>
            <Title>Sobre</Title>
            <P>Meu nome é Lucas Rodrigues, atualmente tenho 30 anos, sou o pai da Valentina que está para fazer 3 aninhos, estudo desenvolvimento web e procuro uma vaga de trabalho.</P>
            <P>Minhas habilidade mais bem desenvolvidas se encontra  nas linguagens HTML, CSS e Java Script, além disso tenho conhecimento suficiente para desenvolver utilizando React Js, Node Js, MySql etc.</P>
            <Title>Tecnologias</Title>
            <Div>
                <CardsTech />
            </Div>
            <Projetos />
        </Container>
    )
}

export default MainContent;