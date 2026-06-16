[16.06.2026 22:13] .:
[16.06.2026 22:46] .: const questSteps = [
    {
        text: "Задание 1: Ты пишешь своего первого Telegram-бота на Python и Django. Вдруг код выдает жесткую ошибку в терминале. Твои действия?",
        options: [
            { text: "Спокойно прочитать текст ошибки, найти строку и исправить баг", isCorrect: true },
            { text: "Удалить PyCharm, закрыть ноутбук и пойти играть на телефоне", isCorrect: false, loseText: "Ты забросил программирование. Бот так и не запущен. Игра окончена!" },
            { text: "Просто переписать весь код заново наугад, вдруг заработает", isCorrect: false, loseText: "Ты запутал код еще сильнее, терминал сломался. Игра окончена!" },
            { text: "Начать бить по клавиатуре и злиться на компьютер", isCorrect: false, loseText: "Ты сломал клавиатуру. Ремонт стоит дорого, кодить больше не на чем. Игра окончена!" }
        ]
    },
    {
        text: "Задание 2: На часах вечер, по плану у тебя тренировка — нужно сделать мощный сет отжиманий, чтобы расширить плечи. Но лень берет верх. Что выберешь?",
        options: [
            { text: "Пересилить лень, включить бодрую музыку и сделать все подходы", isCorrect: true },
            { text: "Поесть чипсов, лечь на диван и посмотреть мемы", isCorrect: false, loseText: "Лень победила. Форма потеряна, дисциплина на нулю. Игра окончена!" },
            { text: "Перенести тренировку на завтра (и так каждый день)", isCorrect: false, loseText: "«Завтра» так и не наступило. Ты пропустил уже месяц тренировок. Игра окончена!" },
            { text: "Сделать только один отжим и сказать: 'Ну, на сегодня хватит'", isCorrect: false, loseText: "Один отжим не дал результата. Плечи шире не стали. Игра окончена!" }
        ]
    },
    {
        text: "Задание 3: Друг просит помочь ему выбрать мощную видеокарту для сборки игрового ПК, чтобы без лагов тянуть GTA 5 RP на ультра-настройках. Что посоветуешь?",
        options: [
            { text: "Современную мощную видеокарту серии Nvidia RTX", isCorrect: true },
            { text: "Старую офисную встроенную графику 2015 года", isCorrect: false, loseText: "У друга сгорел процессор от перегрузки, а игра выдала 5 FPS. Друг обиделся. Игра окончена!" },
            { text: "Скачать побольше оперативной памяти из интернета", isCorrect: false, loseText: "Ты поймал вирус-майнер на компьютер. Все пароли украдены. Игра окончена!" },
            { text: "Сказать, что для игр видеокарта вообще не нужна", isCorrect: false, loseText: "Компьютер даже не запустил игру. Твоя репутация эксперта разрушена. Игра окончена!" }
        ]
    },
    {
        text: "Задание 4: Ты пришел на важную консультацию в Международный колледж IT и бизнеса. Прямо сейчас начинается серьезный тест на логику. Как будешь сдавать?",
        options: [
            { text: "Внимательно вчитываться в каждый вопрос и думать логически", isCorrect: true },
            { text: "Попытаться незаметно достать телефон и списать всё из поиска", isCorrect: false, loseText: "Преподаватель заметил телефон на первой же минуте. Тебя выгнали с теста! Игра окончена!" },
            { text: "Тыкать ответы наугад со скоростью света, не читая текст", isCorrect: false, loseText: "Ты набрал 5 баллов из 100. Тест полностью завален. Игра окончена!" },
            { text: "Попросить соседа подсказать тебе все ответы", isCorrect: false, loseText: "Сосед сам ничего не знал и подсказал неправильно. Вы оба получили двойки. Игра окончена!" }
        ]
    },
    {
        text: "Задание 5: Ты накопил денег и решил купить оригинальную брендовую худи Nike Tech Fleece. Как проверить, что тебе не продадут дешевую подделку?",
        options: [
            { text: "Проверить артикул на бирках, качество швов, молнии YKK и логотип", isCorrect: true },
            { text: "Поверить продавцу на слово, который говорит: 'Брат, оригинал, мамой клянусь!'", isCorrect: false, loseText: "После первой стирки худи порвалось, а логотип стерся. Это была паль. Игра окончена!" },
[16.06.2026 22:46] .: { text: "Купить вещь ночью в темном переулке без осмотра", isCorrect: false, loseText: "Тебя обманули и подсунули обычную старую кофту без бренда. Игра окончена!" },
            { text: "Определить оригинальность по весу, просто подбросив её в воздух", isCorrect: false, loseText: "Этот метод не сработал. Ты купил подделку за огромные деньги. Игра окончена!" }
        ]
    },
    {
        text: "Задание 6: Завтра финальный экзамен по истории. У тебя есть список экзаменационных билетов. Каков твой план подготовки перед дедлайном?",
        options: [
            { text: "Повторить ключевые события, даты и составить краткие тезисы по билетам", isCorrect: true },
            { text: "Лечь спать в 4 утра, надеясь, что попадешь на самый легкий билет", isCorrect: false, loseText: "На экзамене ты заснул прямо на парте, а билет попался самый сложный. Экзамен провален. Игра окончена!" },
            { text: "Написать шпаргалки мелкими буквами на руках и на обуви", isCorrect: false, loseText: "Шпаргалки заметили, как только ты зашел в класс. Тебя отправили на пересдачу осенью. Игра окончена!" },
            { text: "Вообще не открывать билеты, аргументируя: 'Я и так всё знаю'", isCorrect: false, loseText: "Ты перепутал даты во всех вопросах и не смог ответить ни на один дополнительный вопрос. Игра окончена!" }
        ]
    },
    {
        text: "Задание 7: Наступило день финальной защиты твоего IT-проекта! За час до презентации ты замечаешь мелкую ошибку в интерфейсе. Что сделаешь?",
        options: [
            { text: "Аккуратно исправить баг, протестировать и уверенно выступить на защите", isCorrect: true },
            { text: "Запаниковать, начать судорожно менять весь код и сломать весь проект", isCorrect: false, loseText: "Проект полностью перестал запускаться прямо перед комиссией. Выпускной испорчен. Игра окончена!" },
            { text: "Сделать вид, что ничего не заметил, и надеяться, что комиссия не станет кликать туда", isCorrect: false, loseText: "Преподаватель нажал именно на эту кнопку! Сайт выдал ошибку 404 на большом экране. Игра окончена!" },
            { text: "Сбежать и не прийти на защиту проекта", isCorrect: false, loseText: "Ты не получил диплом курса. Все усилия ушли впустую. Игра окончена!" }
        ]
    }
];

let currentStep = 0;

const questTextEl = document.getElementById("questText");
const optionsContainerEl = document.getElementById("optionsContainer");
const stepCounterEl = document.getElementById("stepCounter");
const progressBarEl = document.getElementById("progressBar");
const actionBtnEl = document.getElementById("actionBtn");

function startGame() {
    currentStep = 0;
    actionBtnEl.style.display = "none";
    showStep();
}

function showStep() {
    const stepData = questSteps[currentStep];
    stepCounterEl.textContent = Испытание ${currentStep + 1} из 7;
    questTextEl.textContent = stepData.text;

    const progressPercent = (currentStep / questSteps.length) * 100;
    progressBarEl.style.width = ${progressPercent}%;

    optionsContainerEl.innerHTML = "";

    stepData.options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "btn btn-option";
        btn.textContent = option.text;
        btn.onclick = () => handleAnswer(option);
        optionsContainerEl.appendChild(btn);
    });
}

function handleAnswer(option) {
    if (option.isCorrect) {
        currentStep++;
        if (currentStep >= questSteps.length) {
            showVictory();
        } else {
            showStep();
        }
    } else {
        showGameOver(option.loseText);
    }
}

function showGameOver(loseMessage) {
    optionsContainerEl.innerHTML = "";
    progressBarEl.style.width = "0%";
    stepCounterEl.textContent = "💥 Поражение";
    questTextEl.textContent = loseMessage;
    actionBtnEl.textContent = "🔄 Попробовать заново";
    actionBtnEl.style.display = "inline-block";
}

function showVictory() {
    optionsContainerEl.innerHTML = "";
    progressBarEl.style.width = "100%";
    stepCounterEl.textContent = "🏆 ПОБЕДА!";
[16.06.2026 22:46] .: questTextEl.innerHTML = 🌟 Поздравляем! Ты успешно преодолел все 7 испытаний, защитил свой финальный IT-проект и стал настоящим победителем! <br><br><strong>Игра пройдена на 100%!</strong>;
    actionBtnEl.textContent = "🎮 Играть еще раз";
    actionBtnEl.style.display = "inline-block";
}