const quizData = [
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b"
    },
    {
        question: "Which element does 'O' represent on the periodic table?",
        a: "Osmium",
        b: "Oxygen",
        c: "Oxide",
        d: "Osmosis",
        correct: "b"
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Indian Ocean",
        b: "Atlantic Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d"
    },
    {
        question: "Which country is home to the kangaroo?",
        a: "Australia",
        b: "India",
        c: "South Africa",
        d: "Brazil",
        correct: "a"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        a: "Gold",
        b: "Diamond",
        c: "Platinum",
        d: "Iron",
        correct: "b"
    },
    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        a: "France",
        b: "Italy",
        c: "Germany",
        d: "Spain",
        correct: "a"
    },
    {
        question: "What is the smallest country in the world?",
        a: "Monaco",
        b: "Vatican City",
        c: "San Marino",
        d: "Liechtenstein",
        correct: "b"
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Michelangelo",
        b: "Vincent van Gogh",
        c: "Leonardo da Vinci",
        d: "Pablo Picasso",
        correct: "c"
    },
    {
        question: "What is the capital of Japan?",
        a: "Tokyo",
        b: "Kyoto",
        c: "Osaka",
        d: "Nagoya",
        correct: "a"
    },
    {
        question: "Which mammal is known to lay eggs?",
        a: "Platypus",
        b: "Kangaroo",
        c: "Koala",
        d: "Panda",
        correct: "a"
    },
    {
        question: "What is the longest river in the world?",
        a: "Amazon River",
        b: "Nile River",
        c: "Yangtze River",
        d: "Mississippi River",
        correct: "b"
    },
    {
        question: "What is the fastest land animal?",
        a: "Lion",
        b: "Cheetah",
        c: "Horse",
        d: "Leopard",
        correct: "b"
    },
    {
        question: "In which year did World War II end?",
        a: "1945",
        b: "1939",
        c: "1942",
        d: "1950",
        correct: "a"
    },
    {
        question: "Which chemical element has the symbol 'Au'?",
        a: "Silver",
        b: "Copper",
        c: "Gold",
        d: "Iron",
        correct: "c"
    },
    {
        question: "What is the national dish of Italy?",
        a: "Sushi",
        b: "Pizza",
        c: "Tacos",
        d: "Paella",
        correct: "b"
    },
    {
        question: "Which planet has the most moons?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "c"
    },
    {
        question: "In which continent is the Amazon Rainforest located?",
        a: "Africa",
        b: "Asia",
        c: "South America",
        d: "Australia",
        correct: "c"
    },
    {
        question: "What is the tallest mountain in the world?",
        a: "K2",
        b: "Mount Everest",
        c: "Mount Kilimanjaro",
        d: "Mount Fuji",
        correct: "b"
    },
    {
        question: "Which famous physicist developed the theory of relativity?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Niels Bohr",
        d: "Stephen Hawking",
        correct: "b"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        a: "Charles Dickens",
        b: "Mark Twain",
        c: "William Shakespeare",
        d: "Jane Austen",
        correct: "c"
    },
    {
        question: "What is the largest desert in the world?",
        a: "Sahara Desert",
        b: "Arabian Desert",
        c: "Gobi Desert",
        d: "Antarctic Desert",
        correct: "d"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("a").innerText = currentQuestion.a;
    document.getElementById("b").innerText = currentQuestion.b;
    document.getElementById("c").innerText = currentQuestion.c;
    document.getElementById("d").innerText = currentQuestion.d;
    document.getElementById("next").style.display = "none";
    resetButtons();
}

function selectAnswer(answer) {
    const currentQuestion = quizData[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-button');

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (answer === currentQuestion.correct) {
        score++;
        document.getElementById(answer).style.backgroundColor = "green";
        document.getElementById("status-tally").innerHTML += `<span style="color: green;">✔️</span>`;
    } else {
        document.getElementById(answer).style.backgroundColor = "red";
        document.getElementById(currentQuestion.correct).style.backgroundColor = "green";
        document.getElementById("status-tally").innerHTML += `<span style="color: red;">✖️</span>`;
    }

    document.getElementById("score").innerText = `Score: ${score}/${currentQuestionIndex + 1}`;
    document.getElementById("next").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    document.querySelector(".quiz-container").innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score} out of ${quizData.length} (${((score / quizData.length) * 100).toFixed(2)}%)</p>
        <button onclick="restartQuiz()">Restart</button>
    `;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("status-tally").innerHTML = "";
    document.getElementById("score").innerText = "";
    loadQuestion();
}

function resetButtons() {
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(button => {
        button.style.backgroundColor = "#007BFF";
        button.disabled = false;
    });
}

loadQuestion();