const quizData = [
    {
        question: "which language runs in web browser?",
        a: "Java",
        b: "C",
        c: "JavaScript",
        d: "Python",
        correct: "c"
    },
    {
        question: "What does CSS stands for?",
        a: "Central Style Sheet",
        b: "Cascading Style sheet",
        c: "Cascading Simple Sheet",
        d: "Cascading sheet Style",
        correct: "b"
    },
    {
        question: "What does HTMl stands for?",
        a: "HyperText Markup Language",
        b: "HyperText Markdown Language",
        c: "HyperText Machine Language",
        d: "HyperText Main Language",
        correct: "a"
    }
]


console.log(quizData)

//quiz container

let quiz = document.getElementById("quiz")
//questions

let questionHeading = document.getElementById("questionHeading")

//AllOptionList
//querySelectorAll => radio buttons

const optionList = document.querySelectorAll(".optionList")
console.log(optionList)

//Each options => labels

const aOption = document.getElementById("aOption")
const bOption = document.getElementById("bOption")
const cOption = document.getElementById("cOption")
const dOption = document.getElementById("dOption")

//submit btn
let submitBtn = document.getElementById("submit")

let currentQuizCount = 0;
let score = 0

function loadQuiz() {

    deSelectOption()
    //quizData[0]

    let currentQuizData = quizData[currentQuizCount]
    console.log(currentQuizData.question)
    questionHeading.innerText = currentQuizData.question
    aOption.innerText = currentQuizData.a
    bOption.innerText = currentQuizData.b
    cOption.innerText = currentQuizData.c
    dOption.innerText = currentQuizData.d

}

loadQuiz()


function deSelectOption() {
    optionList.forEach((element) => element.checked = false)
}

function getSelected() {
    let selectedAnswer;
    optionList.forEach((element) => {
        if (element.checked) {
            // console.log(element.id)
            selectedAnswer = element.id
        }
    })
    return selectedAnswer;
}


submitBtn.addEventListener("click", () => {
    let answer = getSelected()
    console.log(answer)
    if (answer) {
        console.log(true)

        if (answer === quizData[currentQuizCount].correct) {
            console.log(true)
            score++
            console.log("Score", score)
        }
        currentQuizCount++

        if (currentQuizCount < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = (`<h2>Your Score is ${score}/${quizData.length}</h2>`)
            document.body.style.backgroundImage = "url('https://i.ibb.co/frqqx3S/glitterimg.jpg')"
        }
    }

})