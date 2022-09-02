const contentLarge = document.querySelector(".content-large");
const contentClock = document.querySelector(".clock");
const contentSmall1 = document.querySelector(".content-small-1");
const showClock = function () {
  contentClock.textContent = new Intl.DateTimeFormat("en-SE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(new Date());
};
showClock();
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
//let clockColor;
setInterval(function () {
  showClock();
  contentClock.style.color = randomColor();
}, 1000);

for (let i = 0; i < 25; i++) {
  const textInsert = `<p style="color:${randomColor()}">This is line number ${i
    .toString()
    .padStart(2, "0")}</p>`;
  contentSmall1.insertAdjacentHTML("beforeend", textInsert);
}
