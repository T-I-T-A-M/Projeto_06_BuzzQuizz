console.log ("tamo aqui")

const TITTLEMINSIZE = 20
const TITTLEMAXSIZE = 65
const QUESTIONMINSIZE = 3
const LEVELMINSIZE = 2
const API = "https://mock-api.driven.com.br/api/v6/buzzquizz"

let quizzTittle
let quizzURL
let quizzQuestions
let quizzLevels






// const promise = axios.get(`${API}/quizzes`)

function verifyQuizzCreation (){

    quizzTittle = document.querySelector(".quizz-tittle").value
    quizzURL = document.querySelector(".quizz-URL-image").value
    quizzQuestions = Number(document.querySelector(".quizz-questions").value)
    quizzLevels = Number(document.querySelector(".quizz-levels").value)


    if ( (quizzTittle.length >= TITTLEMINSIZE) && (quizzTittle.length <= TITTLEMAXSIZE) && (quizzQuestions <= QUESTIONMINSIZE) && (quizzLevels >=LEVELMINSIZE) && (quizzURL.includes("http")) ){

        alert ("Tudo certo vamos para a criação do quizz")
       return showPage3_2()

    }
    return alert ("Informe os dados corretamente")

}

function showPage1 (){
    console.log("Pagina 1 Aaparecendo")
    document.querySelector(".page1").classList.remove("hidden")
}


function hidePage1 (){
    console.log("Pagina 1 Sumindo")
    document.querySelector(".page1").classList.add("hidden")
}


function showPage3_1 (){
    hidePage1()
    console.log("Pagina 3_1 Aparecendo")
    document.querySelector(".createQuizz").classList.remove("hidden")

}

function hidePage3_1 (){
    console.log("Pagina 3_1 Sumindo")
    document.querySelector(".createQuizz").classList.add("hidden")
}


function showPage3_2 (){
    hidePage3_1() 
    console.log("Pagina 3_2 Aparecendo")
    document.querySelector(".createQuestions").classList.remove("hidden")
}

function renderQuestionForms (){
    const QuestionBoxs = document.querySelector("ul.create-questions-box")
    
    for (let i=0; i < quizzQuestions; i++ )
    QuestionBoxs.innerHTML += `
    <li class ="questionText${i}"

}

