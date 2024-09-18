const quizData = [
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b",
        image: "https://www.nasa.gov/sites/default/files/thumbnails/image/pia23045-16.jpg" // Mars
    },
    {
        question: "Which element does 'O' represent on the periodic table?",
        a: "Osmium",
        b: "Oxygen",
        c: "Oxide",
        d: "Osmosis",
        correct: "b",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Oxygen_cycle.svg/2560px-Oxygen_cycle.svg.png" // Oxygen
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Indian Ocean",
        b: "Atlantic Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Pacific_Ocean_-_Encyclop%C3%A6dia_Britannica.jpg/1280px-Pacific_Ocean_-_Encyclop%C3%A6dia_Britannica.jpg" // Pacific Ocean
    },
    {
        question: "Which country is home to the kangaroo?",
        a: "Australia",
        b: "India",
        c: "South Africa",
        d: "Brazil",
        correct: "a",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Red_kangaroo_-_melbourne_zoo.jpg/1280px-Red_kangaroo_-_melbourne_zoo.jpg" // Kangaroo
    },
    {
        question: "What is the hardest natural substance on Earth?",
        a: "Gold",
        b: "Diamond",
        c: "Platinum",
        d: "Iron",
        correct: "b",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Raw_diamonds.jpg/800px-Raw_diamonds.jpg" // Diamond
    },
    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        a: "France",
        b: "Italy",
        c: "Germany",
        d: "Spain",
        correct: "a",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_%28Liberty_Enlightening_the_World%29.jpg" // Statue of Liberty
    },
    {
        question: "What is the smallest country in the world?",
        a: "Monaco",
        b: "Vatican City",
        c: "San Marino",
        d: "Liechtenstein",
        correct: "b",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/77/Saint_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg" // Vatican City
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Michelangelo",
        b: "Vincent van Gogh",
        c: "Leonardo da Vinci",
        d: "Pablo Picasso",
        correct: "c",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" // Mona Lisa
    },
    {
        question: "What is the capital of Japan?",
        a: "Tokyo",
        b: "Kyoto",
        c: "Osaka",
        d: "Nagoya",
        correct: "a",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Tokyo_Tower_and_around_Skyscrapers.jpg/1920px-Tokyo_Tower_and_around_Skyscrapers.jpg" // Tokyo
    },
    {
        question: "Which mammal is known to lay eggs?",
        a: "Platypus",
        b: "Kangaroo",
        c: "Koala",
        d: "Panda",
        correct: "a",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Australian_Platypus.jpg/1280px-Australian_Platypus.jpg" // Platypus
    },
    {
        question: "What is the longest river in the world?",
        a: "Amazon River",
        b: "Nile River",
        c: "Yangtze River",
        d: "Mississippi River",
        correct: "b",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Nile_River_-_Cairo%2C_Egypt.jpg/1280px-Nile_River_-_Cairo%2C_Egypt.jpg" // Nile River
    },
    {
        question: "What is the fastest land animal?",
        a: "Lion",
        b: "Cheetah",
        c: "Horse",
        d: "Leopard",
        correct: "b",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/82/TheCheethcat.jpg" // Cheetah
    },
    {
        question: "In which year did World War II end?",
        a: "1945",
        b: "1939",
        c: "1942",
        d: "1950",
        correct: "a",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Ww2_europe_1944-1945_map_en.png" // WWII map
    },
    {
        question: "Which chemical element has the symbol 'Au'?",
        a: "Silver",
        b: "Copper",
        c: "Gold",
        d: "Iron",
        correct: "c",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Gold-crystals.jpg/1200px-Gold-crystals.jpg" // Gold
    },
    {
        question: "What is the national dish of Italy?",
        a: "Sushi",
        b: "Pizza",
        c: "Tacos",
        d: "Paella",
        correct: "b",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Margherita_Originale.jpg/1920px-Margherita_Originale.jpg" // Pizza
    },
    {
        question: "Which planet has the most moons?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "c",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_New_Horizons.jpg/1280px-Jupiter_New_Horizons.jpg" // Jupiter
    },
    {
        question: "In which continent is the Amazon Rainforest located?",
        a: "Africa",
        b: "Asia",
        c: "South America",
        d: "Australia",
        correct: "c",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Amazon_rainforest_-_Peru.jpg" // Amazon Rainforest
    },
    {
        question: "What is the tallest mountain in the world?",
        a: "K2",
        b: "Mount Everest",
        c: "Mount Kilimanjaro",
        d: "Mount Fuji",
        correct: "b",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/1920px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg" // Mount Everest
    },
    {
        question: "Which famous physicist developed the theory of relativity?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Niels Bohr",
        d: "Stephen Hawking",
        correct: "b",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/1200px-Albert_Einstein_Head.jpg" // Albert Einstein
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        a: "Charles Dickens",
        b: "Mark Twain",
        c: "William Shakespeare",
        d: "Jane Austen",
        correct: "c",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/William_Shakespeare_-_Sorgente_del_fronte.jpg/1280px-William_Shakespeare_-_Sorgente_del_fronte.jpg" // William Shakespeare
    },
    {
        question: "What is the largest desert in the world?",
        a: "Sahara Desert",
        b: "Arabian Desert",
        c: "Gobi Desert",
        d: "Antarctic Desert",
        correct: "d",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/AntarcticaDomeCSnow.jpg/1280px-AntarcticaDomeCSnow.jpg" // Antarctic Desert
    }
];

// Get DOM elements
const questionEl = document.getElementById('question');
const questionImg = document.getElementById('question-image');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const scoreTally = document.getElementById('score-tally');
const resultEl = document.getElementById('result');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');

// Variables to track quiz state
let currentQuiz = 0;
let score = 0;

// Load quiz
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    
    // Hide image at the start of each question
    questionImg.style.display = "none";
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// Deselect the current answers
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// Get selected answer
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// Submit answer and handle score
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        const currentQuizData = quizData[currentQuiz];
        const isCorrect = answer === currentQuizData.correct;
        
        if (isCorrect) {
            correctSound.play();
            score++;
            resultEl.innerText = "Correct!";
            questionImg.src = currentQuizData.image; // Show the image
            questionImg.style.display = "block"; // Display the image after the correct answer
        } else {
            wrongSound.play();
            resultEl.innerText = `Wrong! Correct answer was: ${currentQuizData[currentQuizData.correct]}`;
        }
        
        scoreTally.innerText = `Score: ${score}`;
        
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            setTimeout(() => {
                loadQuiz();
                resultEl.innerText = "";
            }, 2000); // Add a delay before loading the next question
        } else {
            resultEl.innerText = `Quiz finished! Your final score is ${score} / ${quizData.length}.`;
            submitBtn.disabled = true;
        }
    }
});

// Initialize the quiz
loadQuiz();
