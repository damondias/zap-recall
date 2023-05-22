import React from "react"
import { Container } from './style';

function Footer({checks, amount}) {
    return (
        <Container> 
            <p>{checks}/{amount} CONCLUÍDOS</p>

        </Container>

    )
}

export default Footer;