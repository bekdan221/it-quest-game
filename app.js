let quiz=[];
let i=0;
let score=0;
let answered=false;

function startApp(){
document.getElementById("titleScreen").style.display="none";
document.getElementById("game").style.display="block";
}

function startQuiz(n){
quiz = quizzes[n];
i=0;
score=0;
load();
}

/* 🔀 правильное перемешивание */
function shuffle(array){
let arr = [...array];
for(let j = arr.length - 1; j > 0; j--){
let k = Math.floor(Math.random() * (j + 1));
[arr[j], arr[k]] = [arr[k], arr[j]];
}
return arr;
}

function load(){

answered=false;

let q = quiz[i];
document.getElementById("q").textContent = q.q;

let ans = document.getElementById("answers");
ans.innerHTML="";

ans.style.display="grid";
ans.style.gridTemplateColumns="1fr 1fr";
ans.style.gap="10px";

/* правильный ответ текстом */
let correct = q.a[q.c];

/* перемешиваем ответы */
let options = shuffle(q.a);

options.forEach(text=>{

let b=document.createElement("button");
b.textContent=text;

b.onclick=()=>{

if(answered) return;
answered=true;

let all=document.querySelectorAll("#answers button");
all.forEach(x=>x.disabled=true);

if(text === correct){
b.style.background="green";
score++;
}else{
b.style.background="red";

/* показать правильный */
all.forEach(btn=>{
if(btn.textContent === correct){
btn.style.background="green";
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

if(i<quiz.length-1){
i++;
load();
}else{
document.getElementById("q").textContent="ТЕСТ ЗАВЕРШЁН 🎉";
document.getElementById("answers").innerHTML="";
}
}

function update(){
document.getElementById("score").textContent =
`Score: ${score} / ${quiz.length}`;
}

function progress(){
let p=(i/quiz.length)*100;
document.getElementById("bar").style.width=p+"%";
}
