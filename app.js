let currentQuiz = 0;
let currentQuestion = 0;
let score = 0;

// старт
function startApp() {
    document.getElementById("titleScreen").style.display = "none";
    document.getElementById("game").style.display = "block";
}

// выбор теста
function startQuiz(id) {
    currentQuiz = id;
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

// загрузка вопроса
function loadQuestion() {
    let q = quizzes[currentQuiz][currentQuestion];

    document.getElementById("q").innerText = q.q;

    let box = document.getElementById("answers");
    box.innerHTML = "";

    q.a.forEach((text, i) => {
        let btn = document.createElement("button");
        btn.innerText = text;
        btn.onclick = () => checkAnswer(i);
        box.appendChild(btn);
    });

    document.getElementById("score").innerText = "Очки: " + score;

    updateBar();
}

// проверка ответа
function checkAnswer(i) {
    let q = quizzes[currentQuiz][currentQuestion];

    if (i === q.c) {
        score++;
    }

    next();
}

// следующий вопрос
function next() {
    currentQuestion++;

    if (currentQuestion >= quizzes[currentQuiz].length) {
        document.getElementById("q").innerText = "Тест завершён!";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("score").innerText = "Итог: " + score;
        return;
    }

    loadQuestion();
}

// прогресс бар
function updateBar() {
    let total = quizzes[currentQuiz].length;
    let percent = (currentQuestion / total) * 100;
    document.getElementById("bar").style.width = percent + "%";
}
