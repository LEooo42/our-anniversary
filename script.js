window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) 
        {
            item.classList.add('show');
        }
    });
});

const questions = [
    {
        q: "What was the first movie we watched together?",
        options: ["The Notebook", "Harry Potter", "Pride & Prejudice"],
        answer: "Harry Potter"
    },
    {
        q: "Where did you confess my feelings?",
        options: ["At the beach", "On a train to Edinburgh", "In a coffee shop"],
        answer: "On a train to Edinburgh"
    },
    {
        q: "What's our go-to comfort food?",
        options: ["Shrimps", "Chocolate ice cream", "Sushi"],
        answer: "Chocolate ice cream"
    },
    {
        q: "What’s something we both love?",
        options: ["Crocheting", "Skydiving", "Camping"],
        answer: "Camping"
    },
    {
        q: "Where do we dream of traveling together?",
        options: ["Japan", "UK", "Italy"],
        answer: "UK"
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.q;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(btn, q.answer);
        optionsDiv.appendChild(btn);
    });

    document.getElementById('feedback').textContent = "";
    document.getElementById('nextBtn').style.display = "none";
}

function checkAnswer(button, correctAnswer) {
    const feedback = document.getElementById('feedback');
    if (button.textContent === correctAnswer) {
        feedback.textContent = "💖 Correct, you know us so well!";
    } else {
        feedback.textContent = "Oops! Try again, love!";
    }

    document.querySelectorAll('.quiz-option').forEach(btn => btn.disabled = true);
    document.getElementById('nextBtn').style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showFinalMessage();
    }
}

function showFinalMessage() {
    document.getElementById('question').textContent = "💛 You’ve finished the quiz! 💛";
    document.getElementById('options').innerHTML = "";
    document.getElementById('feedback').textContent = "You know us better than anyone! 🥰";
    document.getElementById('nextBtn').style.display = "none";
}

window.onload = loadQuestion;
