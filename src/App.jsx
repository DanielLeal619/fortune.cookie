import { useState } from 'react'
import './App.css'
import './index.css'
import phrases from "./utils/phrases.json"
import getRandomElem from './utils/getRandomElem'
import Quote from './components/Quote'
import BtnQuote from './components/BtnQuote'

function App() {  

  const getRandomPhrase = getRandomElem(phrases)
  const getRandomBg = getRandomElem([1, 2, 3, 4])

  const [phrase, setPhrase] = useState(getRandomPhrase)
  const [backgroundNum, setBackgroundNum] = useState(getRandomBg)

  const bgImage = {
    backgroundImage: `url(/background${backgroundNum}.jpg)`
  }

  return (
    <div className="container" style={bgImage}>
        <h1 className="container__title">Galleta de la Fortuna</h1>   
        <Quote
        phrase={phrase}
        />   
        <BtnQuote
        setPhrase={setPhrase}
        phrase={phrases}
        setBackgroundNum={setBackgroundNum}
        />  
    </div>
  )
}

export default App
