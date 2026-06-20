let current = 0, score = 0, activeData = [];

function setCategory(cat) {
    activeData = quizData.filter(item => item.cat === cat);
    current = 0; score = 0;
    document.getElementById('title-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    render();
}

function render() {
    const q = activeData[current];
    document.getElementById('question').innerText = q.q;
    const box = document.getElementById('options');
    box.innerHTML = '';
    
    q.a.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => {
            if (i === q.c) score++;
            current++;
            current < activeData.length ? render() : showResult();
        };
        box.appendChild(btn);
    });
    document.getElementById('progress-bar').style.width = (current / activeData.length * 100) + '%';
}

function showResult() {
    let level = score > 15 ? "Эксперт" : "Новичок";
    document.getElementById('quiz-screen').innerHTML = `<h1>Результат: ${score}/${activeData.length}</h1><p>Уровень: ${level}</p><button class="option-btn" onclick="location.reload()">На главную</button>`;
}
