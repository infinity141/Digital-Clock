let man = document.getElementById("hour");
let man_2 = document.getElementById("minute");
let man_3 = document.getElementById("second");

function updateClock() {
  let hour_store = new Date().getHours();
  let minuet_store = new Date().getMinutes();
  let second_store = new Date().getSeconds();

  man.innerHTML = hour_store;
  man_2.innerHTML = minuet_store;
  man_3.innerHTML = second_store;
}

setInterval(updateClock, 10);
