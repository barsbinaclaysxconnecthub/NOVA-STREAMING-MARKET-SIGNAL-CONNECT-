// Persistent Theme
if(localStorage.getItem("theme") === "light"){
  document.body.classList.add("light");
}else{
  document.body.classList.add("dark");
}

function toggleTheme(){
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");

  localStorage.setItem("theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
}

// Trading Engine
let balance = parseFloat(localStorage.getItem("balance")) || 500;
let trading = localStorage.getItem("trading") === "true";
let hold = false;

function startStopTrade(){
  trading = !trading;
  localStorage.setItem("trading", trading);
}

function holdContinue(){
  hold = !hold;
}

function simulateTrade(){
  if(trading && !hold){
    let change = (Math.random() - 0.5) * 20;
    balance += change;
    localStorage.setItem("balance", balance);
    document.getElementById("balance").innerText =
      "$" + balance.toFixed(2);

    if(change > 0){
      document.getElementById("balance").className = "blink-green";
    }else{
      document.getElementById("balance").className = "blink-red";
    }
  }
}

setInterval(simulateTrade, 3000);
