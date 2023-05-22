import React from "react"
import { Container } from './style';

function Footer({checks, amount}) {
    return (
        <Container data-test="footer"> 
            <p>{checks}/{amount} CONCLUÍDOS</p>

        </Container>

    )
}

export default Footer;