import React, { useState } from 'react'

import { Container , open, close, ButtonBox, Button, ImagePlay, ImageTurn} from './style';

import imgplay from "../../assets/seta_play.png"
import imgflip from "../../assets/seta_virar.png"
import correcticon from "../../assets/icone_certo.png"
import wrongicon from "../../assets/icone_erro.png"
import almosticon from "../../assets/icone_quase.png"

function Flashcard({number, question, answer, checks, setChecks, }){

    const [stateQuestion, setStateQuestion] = useState(false)
    const [flip, setFlip] = useState(false)
    const [image, setImage] = useState(imgplay)
    const [color, setColor] = useState("#333333")
    const [textdeco, setTextdeco] = useState("none")
    const [openOrClose, setOpenOrClose] = useState(close)    
    const [isAnswer, setIsAnswer] = useState(false)
    const [flipIcon, setFlipIcon] = useState(true)
    const [test, setTest] = useState(true)


    function OpenQuestion() {
        
        if(isAnswer == false){
            if(openOrClose === close){
                setOpenOrClose(open);
                setStateQuestion(true)
                setFlipIcon(false)
                setTest(false)
                
            }
        }
    }
    function FlipQuestion() {
        if(flip === false){
        setFlip(true)
        setFlipIcon(true)
        
        }
    }    
    function SelectAnswer(check) {
        setOpenOrClose("pergunta-fechada")
        setStateQuestion(true)
        setFlip(false)
        
        if(check === "correct"){
            setImage(correcticon)
            setChecks(checks + 1)
            setOpenOrClose(close)
            setStateQuestion(false)
            setIsAnswer(true)
            setColor("#2FBE34")
            setTextdeco("line-through")
            setTest(true)
            

        }
        if(check === "almost"){
            setImage(almosticon)
            setChecks(checks + 1)
            setOpenOrClose(close)
            setStateQuestion(false)
            setIsAnswer(true)
            setColor("#FF922E")
            setTextdeco("line-through")
            setTest(true)
            

        }
        if(check === "wrong"){
            setImage(wrongicon)
            setOpenOrClose(close)
            setStateQuestion(false)
            setIsAnswer(true)
            setColor("#FF3030")
            setTextdeco("line-through")
            setTest(true)
            setChecks(checks + 1)
            
        }
    }    

    return (
        <Container color = {color} test={test} openOrClose= {openOrClose} textdeco= {textdeco} data-test="flashcard">
            {stateQuestion ? <p data-test="flashcard-text">{flip ? answer : question}</p> : <p data-test="flashcard-text">Pergunta {number}</p>}
            <ButtonBox>
              {flip && <Button color = "#FF3030" onClick={() => SelectAnswer("wrong")} data-test="no-btn" >Não lembrei</Button>}
              {flip && <Button color = "#FF922E" onClick={() => SelectAnswer("almost")} data-test="partial-btn">Quase não lembrei</Button>}
              {flip && <Button color = "#2FBE34" onClick={() => SelectAnswer("correct")} data-test="zap-btn">Zap!</Button>}              
            </ButtonBox>
            <ImagePlay src={image} 
                       onClick={isAnswer ? null : OpenQuestion}  
                       test={test} 
                       data-test="play-btn"/> 
            <ImageTurn src={isAnswer ? undefined : imgflip}  
                       onClick={stateQuestion ? FlipQuestion : undefined}  
                       flipIcon= {flipIcon} 
                       data-test="turn-btn"/> 
        </Container>
    )
}

export default Flashcard;