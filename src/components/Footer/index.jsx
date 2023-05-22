import React from "react"
import { Container, Icons } from './style';

function Footer({checks, amount, answers}) {

    console.log(answers);
    return (
        <Container data-test="footer"> 
            <p>{checks}/{amount} CONCLUÍDOS</p>
            <Icons>
                {answers.map((img,i) => <img key = {i} src={img} data-test="no-icon zap-icon partial-icon"/>)}
            </Icons>

        </Container>

    )
}

export default Footer;