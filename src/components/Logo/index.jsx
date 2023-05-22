import React from 'react'
import { Container } from './style';

function Logo({img, title}){
    
    return (
        <Container>
            <img src={img}/>
            <h1>{title}</h1>
        </Container>
    )
}

export default Logo;