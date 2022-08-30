const contentLarge = document.querySelector(".content-large");
const contentClock = document.querySelector(".clock");
const contentSmall1 = document.querySelector(".content-small-1");
const showClock = function(){
	contentClock.textContent = new Intl.DateTimeFormat("en-SE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
}).format(new Date());
}
showClock();
setInterval(function () {
	showClock();
}, 1000);
const arr = [];
for (let i = 0; i < 25; i++) {
  arr.push(`this is number ${i.toString().padStart(2, "0")}`);
}
arr.forEach((element) => {
  contentSmall1.insertAdjacentHTML("beforeend", `<p>${element}</p>`);
});
