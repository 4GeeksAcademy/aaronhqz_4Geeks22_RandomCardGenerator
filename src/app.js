/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function newCard() {
  //Figura configuration
  var figuras = ["♠", "♣", "♥", "♦"];
  var random = Math.floor(Math.random() * 4);
  let valor = Math.floor(Math.random() * 13 + 1);
  let color = random <= 1 ? "" : "rojo";
  switch (valor) {
    case 1:
      valor = "A";
      break;
    case 11:
      valor = "J";
      break;
    case 12:
      valor = "Q";
      break;
    case 13:
      valor = "K";
      break;
  }

  let figurasDOM = document.getElementsByClassName("figura");
  for (let i = 0; i < figurasDOM.length; i++) {
    figurasDOM.item(i).innerHTML = figuras[random];
    if (random > 1) {
      figurasDOM.item(i).classList.add("rojo");
    } else {
      figurasDOM.item(i).classList.remove("rojo");
    }
  }

  let valorDOM = document.querySelector(".valor");
  valorDOM.innerHTML = valor;
  if (random > 1) {
    document.querySelector(".card").classList.add("rojo");
    //valorDOM.classList.add("rojo");
  } else {
    document.querySelector(".card").classList.remove("rojo");
    //valorDOM.classList.remove("rojo");
  }
}

window.onload = function() {
  //MEMO: SIEMPRE LLAMAR LA CLASE!
  newCard();
  document.getElementById("newCard").addEventListener("click", newCard);
};

//Every 10 seconds genereta a new card
var intervalId = window.setInterval(function() {
  newCard();
}, 10000);
