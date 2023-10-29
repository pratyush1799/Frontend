const questions = [
    {
        question: "which is the largest animal in the world",
        answer: [
            { text: "shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest country in the world",
        answer: [
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Vatican city", correct: true },
            { text: "Sri Lanka", correct: false },
        ]
    },
    {
        question: "which is the largest desert in the world",
        answer: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]
    },
    {
        question: "which is the smallest continent in the world",
        answer: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Antarctica", correct: false },
            { text: "Africa", correct: false },
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("inCorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("add");
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block";
}

nextBtn.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "play again";
    nextBtn.style.display = "block"
}

startQuiz();