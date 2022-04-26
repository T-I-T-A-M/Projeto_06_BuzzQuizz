console.log ("tamo aqui")

const TITTLEMINSIZE = 20;
const TITTLEMAXSIZE = 65;
const QUESTIONMINSIZE = 3;
const LEVELMINSIZE = 2;
const HEXADECIMALVALUE = 6;



let quizzTittle
let quizzURL
let quizzQuestions
let quizzLevels


getAllQuizz()



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
    console.log("Pagina 1 Aparecendo")
    document.querySelector(".pageOne").classList.remove("hidden")
}


function hidePage1 (){
    console.log("Pagina 1 Sumindo")
    document.querySelector(".pageOne").classList.add("hidden")
}

function showPage2 () {
    hidePage1()
    console.log ("Pagina 1 Desaparecendo")
    document.querySelector(".pageTwo").classList.remove("hidden")
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

function hidePage3_2 (){
    console.log("Pagina 3_2 Sumindo")
    document.querySelector(".createQuestions").classList.add("hidden")
}

function showPage3_3 (){
    hidePage3_2() 
    console.log("Pagina 3_3 Aparecendo")
    document.querySelector(".createLevels").classList.remove("hidden")
    renderLevelsForms()
}

function hidePage3_3 (){
    console.log("Pagina 3_3 Sumindo")
    document.querySelector(".createLevels").classList.add("hidden")
}

function showPage3_4 (){
    hidePage3_3() 
    console.log("Pagina 3_4 Aparecendo")
    document.querySelector(".quizzSucess").classList.remove("hidden")
    
}





function renderQuestionForms (){
    console.log("renderizando formulario de perguntas")
    const QuestionBoxs = document.querySelector("ul.create-questions-box")
    

    for (let i=1; i <= quizzQuestions; i++ ){
    QuestionBoxs.innerHTML += `
    <button class ="collapsible" onclick ="colapse()">Pergunta ${i}</button>
    <li class ="questionNumber${i}">


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
    console.log ("verificando questoes criadas")
    let contador = 0;

    for ( let i=1; i<= quizzQuestions; i++){
        console.log ("laço de Verificacao das perguntas iniciado")
        
        let questionText = document.querySelector(`.question-text-${i}`).value
        let questionBackgroundColor = document.querySelector(`.question-background-color-${i}`).value
        let correctAnswer = document.querySelector(`.correctAnswer-${i}`).value
        let correctImage = document.querySelector(`.correctImage-${i}`).value
        let incorrectAnswer = document.querySelector(`.incorrectAnswer-${i}-One`).value
        let incorrectImage = document.querySelector(`.incorrectImage-${i}-One`).value


        
        if ((questionText.length >= TITTLEMINSIZE)  && (questionBackgroundColor.length === HEXADECIMALVALUE) && (questionBackgroundColor.includes("#")) &&  correctAnswer && correctImage && incorrectAnswer && incorrectImage){
            contador++
            console.log (contador)
        } 
    }
    
    if (contador === quizzQuestions){
        showPage3_3()
    } else {alert ("Preencha os dados corretamente")}
    
}

function renderLevelsForms(){
    console.log("renderizando formulario dos niveis")
    const levelBoxs = document.querySelector("ul.create-levels-box")

    for (let i=1; i<= quizzLevels; i++){
        levelBoxs.innerHTML +=   `
        <button class ="collapsible" onclick ="colapse()">Nível ${i}</button>
        <li class ="levelNumber${i}">

            <input type="text" class="level-title-${i}" placeholder="Título do nível"> </input>
            <input type="number" min ="0" max ="100" maxlength ="3" class="min-score-${i}" placeholder="% de acerto minima"> </input>
            <input type="text" class="level-URL-Image-${i}" placeholder="URL da imagem do nível"> </input>
            <input type="text" class="level-description-${i}" placeholder="descrição do nível"> </input>

        </li>`
    }
}

function verifyLevelCreation (){
    console.log ("verificando niveis criados")
    let contador = 0;
    let minimalScoreNeed=false

    for ( let i=1; i<= quizzQuestions; i++){
        console.log ("Verificacao das perguntas iniciado")
        
        let levelTitle = document.querySelector(`.level-title-${i}`).value
        let minScore = Number(document.querySelector(`.min-score-${i}`).value)
        let levelImage = document.querySelector(`.level-URL-Image-${i}`).value
        let levelDescription = document.querySelector(`.level-description-${i}`).value

        
        if ((levelTitle.length >= 10)  && (minScore <= 100) && (minScore >= 0) &&  levelImage.includes("http") && (levelDescription.length >=30) ){
            contador++
            console.log (contador)
        }

        if (minScore===0){
            minimalScoreNeed = true
        }
    }
    
    if ((contador === quizzLevels) && minimalScoreNeed ){
        
        showPage3_4()
    } else {alert ("Preencha os dados corretamente")}
}



function createButton () {
    const myQuizzes = document.querySelector(".myListQuizz li")

    if (myQuizzes !== null) {
        document.querySelector(".createQuizBox").classList.add("hidden");
        document.querySelector(".myQuizzesContainer").classList.remove("hidden");
 }
}
createButton();







function getAllQuizz(){

    let promise = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes")
    promise.then(renderAllQuizz)


    function renderAllQuizz (Quizzes){
        console.log("renderizando todos os quizzes")
        console.log (Quizzes)

        for (let i =0; i < Quizzes.data.length; i++){

            quizzTittle = Quizzes.data[i].title
            quizzURL = Quizzes.data[i].image
            let quizzId = Quizzes.data[i].id

            console.log("Laço para renderizar")
            document.querySelector("ul.allListQuizz").innerHTML +=`
            <li class="click Quizz" id="${quizzId}" onclick="openQuizz(this)">
                <p>${quizzTittle}</p>
                <img src="${quizzURL}">
            </li>`

    }
}
}

function openQuizz(selectedQuizz){
    showPage2()
    console.log (selectedQuizz.id)

    const promise = axios.get(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${selectedQuizz.id}`)
    promise.then(renderSelectedQuizz)

    function renderSelectedQuizz (Quizz){
        console.log("renderizando quizz selecionado")   
        let selectedtitle = Quizz.data.title
            let selectedimage = Quizz.data.image
            let selectedQuestions = Quizz.data.questions
            let selectedLevels = Quizz.data.levels
            let answersQuestions = Quizz.data.questions



        document.querySelector("section.tittle-img").innerHTML =`
        <img class ="selectedQuizzImage" src="${selectedimage}"/>")`

        document.querySelector("section.theQuizz").innerHTML = `
        <span class="question-box">
        <h6>${selectedtitle}</h6>
        </span>
        <div class="quizz-box"> </div>`


        for (let i=0; i < selectedQuestions.length; i++){
               for (let j=0; j < selectedQuestions.length; j++){
              
                
            document.querySelector("div.quizz-box").innerHTML += `
            
            <div class="quizz-box">
                
                <ul class="images-box">
                    <li class="box-img">
                        <img src="${selectedQuestions[i].answers[j].image}"/>
                        <h5>Catiorríneo1</h5>
                    </li>
                    <li class="box-img">
                        <img src=""/>
                        <h5>Catiorríneo2</h5>
                    </li>
                    <li class="box-img">
                        <img src=""/>
                        <h5>Catiorríneo3</h5>
                    </li>
                    <li class="box-img">
                        <img src=""/>
                        <h5>Catiorríneo4</h5>
                    </li>
                </ul>
            </div>
            `

        }


    }
}}
