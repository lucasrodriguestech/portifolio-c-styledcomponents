import React from "react";
import { Container , Img, Button} from './styles.ts'
import Foto from '../../assets/lucas de preto quadrada.png';
import ContatoCard from "../contatocard/index.tsx";


function SideBar() {
    
    return (
        <Container>
            <Img alt="" src={Foto} />
            <ContatoCard />
            <Button>Download Currículo</Button>
        </Container>
    )
}

export default SideBar;