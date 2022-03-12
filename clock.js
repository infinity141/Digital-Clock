let variable = document.getElementById("hour");
let variable_2 = document.getElementById("minute");
let variable_3 = document.getElementById("second");
let variable_4 = document.getElementById("hour-hand");
let variable_5 = document.getElementById("minute-hand");
let variable_6 = document.getElementById("second-hand");

function updateClock() {
  let hour_store = new Date().getHours();
  let minute_store = new Date().getMinutes();
  let second_store = new Date().getSeconds();
  let hour_hand_store =
    minute_store != 0 ? hour_store * 30 + minute_store * 0.5 : hour_store * 30;
  let minute_hand_store =
    second_store != 0
      ? minute_store * 6 + second_store * 0.1
      : minute_store * 6;
  let second_hand_store = second_store * 6;

  variable.innerHTML = hour_store;
  variable_2.innerHTML = minute_store;
  variable_3.innerHTML = second_store;
  variable_4.style.transform =
    "rotate(" + hour_hand_store + "deg) translateY(-45px)";
  variable_5.style.transform =
    "rotate(" + minute_hand_store + "deg) translateY(-45px)";
  variable_6.style.transform =
    "rotate(" + second_hand_store + "deg) translateY(-45px)";
}
updateClock();
setInterval(updateClock, 1000);
