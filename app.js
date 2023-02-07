let count = 0;
const value = document.querySelector("#value");
const btnDecrease = document.querySelector(".decrease");
const btnIncrease = document.querySelector(".increase");
const btnReset = document.querySelector(".reset");

btnDecrease.addEventListener("click", function decrease() {
  count--;
  if(count < 0){
    value.style.color = "red"
  } else if(count > 0){
    value.style.color = "green"
  } else {
    value.style.color = "#222"
  }
  value.textContent = count;
});

btnIncrease.addEventListener("click", function increase() {
  count++;
  if(count < 0){
    value.style.color = "red"
  } else if(count > 0){
    value.style.color = "green"
  } else {
    value.style.color = "#222"
  }
  value.textContent = count;
});

btnReset.addEventListener("click", function reset() {
  count = 0;
  if(count < 0){
    value.style.color = "red"
  } else if(count > 0){
    value.style.color = "green"
  } else {
    value.style.color = "#222"
  }
  value.textContent = count;
});