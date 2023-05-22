import "./styles/reset.css"
import "./styles/styles.css"

import React,{ useState } from 'react'
import { Body } from "./style"
import Logo from "./components/Logo"
import Flashcard from "./components/Flashcard"
import Footer from "./components/Footer"

import logo from "./assets/logo.png"
import Home from "./components/Home"

function App() {

  const cards = [
    {question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    {question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    {question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    {question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    {question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    {question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    {question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]

  const [checks, setChecks] = useState(0);


  return (
    <Body>
        <Home />
        <Logo img = {logo} title = "Zap Recall"/>
        {cards.map((card,i)=> <Flashcard key={i} 
                                         number={i+1} 
                                         question={card.question} 
                                         answer={card.answer}
                                         checks = {checks}
                                         setChecks = {setChecks}

                                         /> )}
        <Footer checks={checks} amount={cards.length}/>
    </Body>
  )
}

export default App
