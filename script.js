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
  //contentClock.style.color = 'green';
};
showClock();
let clockColor;
setInterval(function () {
  showClock();
  clockColor = clockColor !== "green" ? "green" : "red";
  contentClock.style.color = clockColor;
}, 1000);
//const arr = [];
//for (let i = 0; i < 25; i++) {
//  arr.push(`this is number ${i.toString().padStart(2, "0")}`);
//}
const textColor = ["green", "red", "blue", "grey", "purple"];
for (let i = 0; i < 25; i++) {
  const textInsert = `<p style="color:${
    textColor[i % textColor.length]
  }">This is line number ${i.toString().padStart(2, "0")}</p>`;
  contentSmall1.insertAdjacentHTML("beforeend", textInsert);
}
