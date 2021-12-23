const colors = ["green", "red", "rgba(133,122, 200)", "#f15025"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randm = getRandomNumber();

  document.body.style.backgroundColor = colors[randm];
  color.textContent = colors[randm];
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
