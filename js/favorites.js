function getFav(){
return JSON.parse(localStorage.getItem("fav")) || [];
}

function addFav(id){
const m = movies.find(x=>x.id===id);
let fav = getFav();

if(!fav.find(x=>x.id===id)){
fav.push(m);
}

localStorage.setItem("fav",JSON.stringify(fav));
}
