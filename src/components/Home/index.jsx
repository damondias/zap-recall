import React, { useState } from "react";
import logo from "../../assets/logo.png"
import { Container, LogoStart, StartRecall, StyledP } from "./style";

export default function Home() {
    const [startgame, setStartgame] = useState("flex")

    function Game() {
        setStartgame("none");
    }

    return (
        <Container startgame= {startgame}>
            <LogoStart src={logo}/>
            <StyledP>ZapRecall</StyledP>
            <StartRecall onClick={Game} data-test="start-btn">Iniciar Recall!</StartRecall>
        </Container>

    )
}

