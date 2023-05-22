import React from "react"
import { Container, Icons } from './style';

function Footer({checks, amount, answers}) {

    function select(data){
        if ( data === "/src/assets/icone_certo.png")
            return "zap-icon" 
        if ( data === "/src/assets/icone_erro.png")
            return "no-icon"
        if (data === "/src/assets/icone_quase.png")
            return "partial-icon"
    }

    return (
        
        <Container data-test="footer"> 
            <p>{checks}/{amount} CONCLUÍDOS</p>
            <Icons>
                {answers.map((img,i) => <img key = {i} src={img} data-test={select(img)}/>)}
            </Icons>

        </Container>

    )
}

export default Footer;