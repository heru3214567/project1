const questions = [
    {
        question: "Who built the ark?",
        answers: [
            { text: "Moses", correct: false },
            { text: "Noah", correct: true },
            { text: "David", correct: false },
            { text: "Abraham", correct: false }
        ]
    },
    {
        question: "Who was swallowed by a great fish?",
        answers: [
            { text: "Jonah", correct: true },
            { text: "Peter", correct: false },
            { text: "Paul", correct: false },
            { text: "Joseph", correct: false }
        ]
    },
    {
        question: "Who led the Israelites out of Egypt?",
        answers: [
            { text: "David", correct: false },
            { text: "Moses", correct: true },
            { text: "Joshua", correct: false },
            { text: "Aaron", correct: false }
        ]
    },
    {
        question: "Who defeated Goliath?",
        answers: [
            { text: "Solomon", correct: false },
            { text: "David", correct: true },
            { text: "Samuel", correct: false },
            { text: "Saul", correct: false }
        ]
    },
    {
        question: "Where was Jesus born?",
        answers: [
            { text: "Jerusalem", correct: false },
            { text: "Nazareth", correct: false },
            { text: "Bethlehem", correct: true },
            { text: "Galilee", correct: false }
        ]
    },
    {
        question: "How many disciples did Jesus have?",
        answers: [
            { text: "10", correct: false },
            { text: "11", correct: false },
            { text: "12", correct: true },
            { text: "13", correct: false }
        ]
    },
    {
        question: "Who betrayed Jesus?",
        answers: [
            { text: "Peter", correct: false },
            { text: "John", correct: false },
            { text: "Judas Iscariot", correct: true },
            { text: "Andrew", correct: false }
        ]
    },
    {
        question: "What is the first book of the Bible?",
        answers: [
            { text: "Exodus", correct: false },
            { text: "Genesis", correct: true },
            { text: "Matthew", correct: false },
            { text: "Psalms", correct: false }
        ]
    },
    {
        question: "Who received the Ten Commandments?",
        answers: [
            { text: "Abraham", correct: false },
            { text: "Moses", correct: true },
            { text: "Joshua", correct: false },
            { text: "Elijah", correct: false }
        ]
    },
    {
        question: "On which day did Jesus rise from the dead?",
        answers: [
            { text: "First day", correct: false },
            { text: "Second day", correct: false },
            { text: "Third day", correct: true },
            { text: "Fourth day", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let curr = 0;
let score = 0;

function startquiz() {
    curr = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    answerButton.innerHTML = "";

    let currentQuestion = questions[curr];
    let questionNo = curr + 1;

    questionElement.innerHTML =
        questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");

        button.innerHTML = answer.text;
        button.classList.add("btn");

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);

        answerButton.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const iscorrect = selectBtn.dataset.correct === "true";

    if (iscorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    questionElement.innerHTML =
        `Quiz Finished!<br>Your Score: ${score} / ${questions.length}`;

    answerButton.innerHTML = "";

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {

    if (nextButton.innerHTML === "Play Again") {
        startquiz();
        return;
    }

    curr++;

    if (curr < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
    } else {
        showScore();
    }
});

startquiz();