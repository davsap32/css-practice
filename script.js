const contentLarge = document.querySelector(".content-large");
const contentSmall1 = document.querySelector(".content-small-1");
setInterval(function () {
  contentLarge.textContent = new Intl.DateTimeFormat("en-SE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(new Date());
  //const now = new Date();
  //console.log(now);
}, 1000);
const arr = ["bling", "bonk", "bonk2"];
arr.forEach((element) => {
  contentSmall1.insertAdjacentHTML("afterbegin", `<p>${element}</p>`);
});
