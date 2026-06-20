const db = {
    IT: [
        { q: "Что такое API?", a: ["Интерфейс", "База", "Стиль", "Сервер", "Язык"], c: 0 },
        { q: "Язык для AI?", a: ["Python", "C++", "Java", "PHP", "Go"], c: 0 }
    ],
    IQ: [
        { q: "2 + 2 * 2?", a: ["8", "6", "4", "10", "12"], c: 1 }
    ],
    // ... добавляй остальные категории по аналогии
};

let currentCat = [], curIdx = 0, score = 0;

function initQuiz(cat) {
    currentCat = db[cat] || [];
    curIdx = 0; score = 0;
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const q = currentCat[curIdx];
    document.getElementById('q-num').innerText = curIdx + 1;
    document.getElementById('q-text').innerText = q.q;
    const box = document.getElementById('answers');
    box.innerHTML = '';
    q.a.forEach((text, i) => {
        const btn = document.createElement('button');
        btn.innerText = text;
        btn.onclick = () => {
            if (i === q.c) score++;
            curIdx++;
            curIdx < currentCat.length ? showQuestion() : finish();
        };
        box.appendChild(btn);
    });
}

function finish() {
    document.getElementById('app').innerHTML = `<h1>Результат: ${score}/${currentCat.length}</h1><button onclick="location.reload()">Вернуться</button>`;
}
