const quizData = [
    {
        question: "which language runs in web browser?",
        a: "Java",
        b: "C",
        c: "JavaScript",
        d: "Python",
        answer: "c"
    },
    {
        question: "What does CSS stands for?",
        a: "Central Style Sheet",
        b: "Cascading Style sheet",
        c: "Cascading Simple Sheet",
        d: "Cascading sheet Style",
        answer: "b"
    },
    {
        question: "What does HTMl stands for?",
        a: "HyperText Markup Language",
        b: "HyperText Markdown Language",
        c: "HyperText Machine Language",
        d: "HyperText Main Language",
        answer: "a"
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

let currentQuizCount = 2;

function loadQuiz() {
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


function getSelected() {
    let selectedAnswer;
    optionList.forEach((element) => {
        if (element.checked) {
            console.log(element.id)
            selectedAnswer = element.id
        }
    })
    return selectedAnswer;
}


submitBtn.addEventListener("click", () => {
    let answer = getSelected()
    console.log(answer)
})