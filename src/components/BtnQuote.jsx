import getRandomElem from "../utils/getRandomElem"

const BtnQuote = ({setPhrase, phrase, setBackgroundNum}) => {

const randomPhrase = () => {
    setPhrase(getRandomElem(phrase))
    setBackgroundNum(getRandomElem([1, 2, 3, 4]))
}

  return (
    <button className="container__btn" onClick={randomPhrase}>¡Prueba tu suerte!🍀</button>
  )
}

export default BtnQuote