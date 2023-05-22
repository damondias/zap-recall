import React from 'react'
import { Container } from './style';

function Flashcard({number, question, answer}){
    
    return (
        <Container>
            <p> pergunta {number} </p>
        </Container>
    )
}

export default Flashcard;