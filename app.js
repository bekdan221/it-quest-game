let quiz=[];
let i=0;
let score=0;

function startQuiz(n){
quiz = quizzes[n];
i=0;
score=0;
load();
}

function load(){

let q = quiz[i];
document.getElementById("q").textContent = q.q;

let ans = document.getElementById("answers");
ans.innerHTML="";

q.a.forEach((a,index)=>{
let b=document.createElement("button");
b.textContent=a;

b.onclick=()=>{
if(index===q.c) score++;
disable();
update();
};

ans.appendChild(b);
});

progress();
update();
}

function disable(){
document.querySelectorAll("#answers button").forEach(b=>{
b.disabled=true;
});
}

function next(){
if(i<quiz.length-1){
i++;
load();
}else{
document.getElementById("q").textContent="ТЕСТ ЗАВЕРШЕН";
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
