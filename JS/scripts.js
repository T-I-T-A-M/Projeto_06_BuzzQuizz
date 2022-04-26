console.log ("tamo aqui")

const TITTLEMINSIZE = 20;
const TITTLEMAXSIZE = 65;
const QUESTIONMINSIZE = 3;
const LEVELMINSIZE = 2;
const HEXADECIMALVALUE = 6;
const API = "https://mock-api.driven.com.br/api/v6/buzzquizz";


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
    document.querySelector(".pageOne").classList.remove("hidden")
}


function hidePage1 (){
    console.log("Pagina 1 Sumindo")
    document.querySelector(".pageOne").classList.add("hidden")
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
    renderQuestionForms()
}


function renderQuestionForms (){
    console.log("renderizando formulario de perguntas")
    const QuestionBoxs = document.querySelector("ul.create-questions-box")
    

    for (let i=1; i <= quizzQuestions; i++ ){
    QuestionBoxs.innerHTML += `
    <li class ="questionNumber$">
    
    <button class ="collapsible" onclick ="colapse()">Pergunta ${i}</button>
    <li class ="questionNumber$">


        <input type="text" class="question-text-${i}" placeholder="Texto da Pergunta"> </input>
        <input type="text" class="question-background-color-${i}" placeholder="Cor de fundo da pergunta"> </input>

        <p class ="title-form">Resposta correta </p>
        <input type="text" class="correctAnswer-${i}" placeholder="Reposta correta"> </input>
        <input type="text" class="correctImage-${i}" placeholder="URL da imagem"> </input>

        <p class ="title-form">Respostas Incorretas</p>
        <input type="text" class="incorrectAnswer-${i}-One" placeholder="Resposta incorreta 1"> </input>
        <input type="text" class="incorrect incorrectImage-${i}-One" placeholder="URL da imagem 1"> </input>

        <input type="text" class="incorrectAnswer-${i}-Two" placeholder="Resposta incorreta 2"> </input>
        <input type="text" class="incorrect incorrectImage-${i}-Two" placeholder="URL da imagem 2"> </input>

        <input type="text" class="incorrectAnswer-${i}-Three" placeholder="Resposta incorreta 3"> </input>
        <input type="text" class="incorrect incorrectImage-${i}-Three" placeholder="URL da imagem 3"> </input>
    </li>`
    }


    
}

function verifyQuestionCreation (){
    let contador = 0;

    for ( let i=1; i<= quizzQuestions; i++){
        console.log ("Verificacao das perguntas iniciado")
        
        let questionText = document.querySelector(`.question-text-${i}`).value
        let questionBackgroundColor = document.querySelector(`.question-background-color-${i}`).value
        let correctAnswer = document.querySelector(`.correctAnswer-${i}`).value
        let correctImage = document.querySelector(`.correctImage-${i}`).value
        let incorrectAnswer = document.querySelector(`.incorrectAnswer-${i}-One`).value
        let incorrectImage = document.querySelector(`.incorrectImage-${i}-One`).value


        
        if ((questionText.length >= TITTLEMINSIZE)  && (questionBackgroundColor.length === HEXADECIMALVALUE) && (questionBackgroundColor.includes("#")) &&  correctAnswer && correctImage && incorrectAnswer && incorrectImage){
            contador += 1
            console.log (contador)
        } 
    }
    
    if (contador === quizzQuestions){
        console.log ("Tudo certo, vc colocou as perguntas")
    } else {
        alert ("OPA OPA vc esqueceu de preencher corretamente")
    }
}