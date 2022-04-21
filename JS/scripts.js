console.log ("tamo aqui")

const TITTLEMINSIZE = 20
const TITTLEMAXSIZE = 65
const QUESTIONMINSIZE = 3
const LEVELMINSIZE = 2
const API = "https://mock-api.driven.com.br/api/v6/buzzquizz"

// const promise = axios.get(`${API}/quizzes`)

function verifyQuizzCreation (){

    const quizzTittle = document.querySelector(".quizz-tittle").value
    const quizzURL = document.querySelector(".quizz-URL-image").value
    const quizzQuestions = Number(document.querySelector(".quizz-questions").value)
    const quizzLevels = Number(document.querySelector(".quizz-levels").value)


    if ( (quizzTittle.length >= TITTLEMINSIZE) && (quizzTittle.length <= 65) && (quizzURL.)) {
       return alert ("você NAO é cabecao")
    }
    return alert ("O TITULO DEVE CONTER ENTRE 20 E 65 CARACTERES")

}






