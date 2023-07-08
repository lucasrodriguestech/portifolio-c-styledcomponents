import React from "react";
import { Container , EndP, Icon, P, Hr, Div, DivSection} from "./styles.ts";
import FoneIcon from '../../assets/fone_icon.png'
import EmailIcon from '../../assets/email_icon.png'
import PinIcon from '../../assets/localização_icon.png'


function ContatoCard () {
    const contatos = [
        {nome: "Telefone", icon: FoneIcon, endereço: "(43)98486-6569"},
        {nome: "E-mail", icon: EmailIcon, endereço: "lucasrodrigues.tech@gmail.com"},
        {nome: "Localização", icon: PinIcon , endereço: "Londrina / Paraná"}
    
    ]
    
   
    return (
        <Container>
           {contatos.map((contato) => (
            <Div>
                <DivSection>
                     <Icon alt="" src= {contato.icon}/>
                </DivSection>
                <P>{contato.nome}</P> 
                <EndP>{contato.endereço}</EndP> 
                    <Hr />
            </Div> 
           ))} 

        </Container>
    )
}

export default ContatoCard;