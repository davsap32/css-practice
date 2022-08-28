const contentLarge = document.querySelector(".content-large");
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
