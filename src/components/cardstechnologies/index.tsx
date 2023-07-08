import React from 'react';
import { Container, Quadro , Title, Icon} from './styles.ts';
import HtmlIcon from '../../assets/html_icon.png';
import CssIcon from '../../assets/css_icon.png';
import ReactIcon from '../../assets/React-icon.svg.png';
import NodeIcon from '../../assets/node_icon.png';
import MysqlIcon from '../../assets/mysqlworkbench_102952.png';
import JavascriptIcon from '../../assets/javascript_icon.png';





    

function CardsTech () {
    

    
    const technologies  = [
        {nome: "HTML", icon: HtmlIcon,  text: ""},
        {nome: "CSS", icon: CssIcon, text: ""},
        {nome: "ReactJs", icon: ReactIcon, text: ""},
        {nome: "JavaScript", icon: JavascriptIcon, text: ""},
        {nome: "Nodejs", icon: NodeIcon, text: ""},
        {nome: "MySql", icon: MysqlIcon, text: ""},
    ];
    
    
    return (
        <Container>
            {technologies.map((card) => (
                <>                   
                    <Quadro>
                        <Icon alt='' src={card.icon}/>
                        <Title>{card.nome}</Title>
                        {card.text}
                    </Quadro>
                </>
                
            ))}
        </Container>
    )
}

export default CardsTech;