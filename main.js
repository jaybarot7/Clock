const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const digitalClock = document.querySelector("#digital-clock");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  let hours = day.getHours().toString().padStart(2, "0");
  let minutes = day.getMinutes().toString().padStart(2, "0");
  let seconds = day.getSeconds().toString().padStart(2, "0");
  digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);
