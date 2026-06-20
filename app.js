let quiz = [];
let i = 0;
let score = 0;
let answered = false;

function startQuiz(n){
  quiz = quizzes[n];
  i = 0;
  score = 0;
  load();
}

/* 🔀 shuffle */
function shuffle(arr){
  return arr.sort(() => Math.random() - 0.5);
}

function load(){

  answered = false;

  let q = quiz[i];
  document.getElementById("q").textContent = q.q;

  let ans = document.getElementById("answers");
  ans.innerHTML = "";

  ans.style.display = "grid";
  ans.style.gridTemplateColumns = "1fr 1fr";
  ans.style.gap = "10px";

  /* 🔥 создаём правильный ответ как текст */
  let correctAnswer = q.a[q.c];

  /* 🔀 перемешиваем ВСЕ ответы */
  let options = shuffle([...q.a]);

  options.forEach(text => {

    let b = document.createElement("button");
    b.textContent = text;

    b.onclick = () => {

      if(answered) return;
      answered = true;

      let all = document.querySelectorAll("#answers button");
      all.forEach(x => x.disabled = true);

      /* ✔ правильный */
      if(text === correctAnswer){
        b.style.background = "green";
        b.innerHTML = "✔ " + text;
        score++;
      }
      /* ❌ неправильный */
      else{
        b.style.background = "red";
        b.innerHTML = "❌ " + text;

        /* показать правильный */
        all.forEach(btn => {
          if(btn.textContent === correctAnswer){
            btn.style.background = "green";
            btn.innerHTML = "✔ " + correctAnswer;
          }
        });
      }

      update();
    };

    ans.appendChild(b);
  });

  progress();
  update();
}

function next(){

  if(!answered) return;

  if(i < quiz.length - 1){
    i++;
    load();
  } else {
    document.getElementById("q").textContent = "ТЕСТ ЗАВЕРШЁН 🎉";
    document.getElementById("answers").innerHTML = "";
  }
}

function update(){
  document.getElementById("score").textContent =
    `Score: ${score} / ${quiz.length}`;
}

function progress(){
  let p = (i / quiz.length) * 100;
  document.getElementById("bar").style.width = p + "%";
}
