function render(list){
  const c = document.getElementById("catalog");
  c.innerHTML="";

  list.forEach(car=>{
    c.innerHTML += `
      <div class="card">
        <img src="${car.images[0]}">
        <h3>${car.name}</h3>
        <p>${car.price}</p>
        <button onclick="openCar('${car.id}')">Подробнее</button>
      </div>
    `;
  });
}

if(document.getElementById("catalog")){
  render(cars);

  document.getElementById("search").oninput=function(){
    render(cars.filter(c=>c.name.toLowerCase().includes(this.value.toLowerCase())));
  }

  document.getElementById("brand").onchange=function(){
    if(this.value==="all") render(cars);
    else render(cars.filter(c=>c.brand===this.value));
  }

  window.openCar=function(id){
    location.href="car.html?id="+id;
  }
}

if(document.getElementById("title")){
  const id=new URLSearchParams(location.search).get("id");
  const car=cars.find(c=>c.id===id);

  document.getElementById("title").innerText=car.name;
  document.getElementById("mainImg").src=car.images[0];

  document.getElementById("info").innerHTML=`
    💰 ${car.price}<br>
    📍 ${car.mileage}
  `;

  car.images.forEach(img=>{
    document.getElementById("gallery").innerHTML+=
    `<img src="${img}" onclick="mainImg.src='${img}'">`;
  });
}
