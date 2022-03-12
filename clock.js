let variable = document.getElementById("hour");
let variable_2 = document.getElementById("minute");
let variable_3 = document.getElementById("second");
let variable_4 = document.getElementById("hour-hand");
let variable_5 = document.getElementById("minute-hand");
let variable_6 = document.getElementById("second-hand");

function updateClock() {
  let hour_store = new Date().getHours();
  let minuet_store = new Date().getMinutes();
  let second_store = new Date().getSeconds();
  let hour_hand_store = new Date().getHours();
  let minute_hand_store = new Date().getHours();
  let second_hand_store = second_store * 6;

  variable.innerHTML = hour_store;
  variable_2.innerHTML = minuet_store;
  variable_3.innerHTML = second_store;
}

setInterval(updateClock, 10);
