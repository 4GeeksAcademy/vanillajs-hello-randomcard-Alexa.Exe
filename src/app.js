import "bootstrap";
import "./style.css";

window.onload = function() {
  const suits = ["&hearts;", "&diams;", "&spades;", "&clubs;"]
  const numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
  
  const suitTop = document.getElementById("suitTop")
  const suitBottom = document.getElementById("suitBottom")
  const numberCard = document.getElementById("numberCard")
  const randomCardButton = document.getElementById("getRandomCard")

  function randomCard() {
    suitBottom.classList.remove("text-danger", "text-black")
    suitTop.classList.remove("text-danger","text-black")
    numberCard.classList.remove("text-danger", "text-black")
    

    const randomSuit = suits[Math.floor(Math.random() * suits.length)]
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)]
    const color = randomSuit == "&hearts;" || randomSuit == "&diams;" ? "text-danger" : "text-black";
    
   
    suitTop.innerHTML = randomSuit
    suitBottom.innerHTML = randomSuit
    suitTop.classList.add(color)
    suitBottom.classList.add(color)
    numberCard.innerHTML = randomNumber
    numberCard.classList.add(color)

const effect =document.getElementById("asEffect");

  if (randomNumber === "A") {
      effect.classList.remove("hidden");
      setTimeout(()=>{
        effect.classList.add("hidden");
      },1000);
    }
  
  }

  randomCardButton.addEventListener("click", () => randomCard())
  
  randomCard()
};