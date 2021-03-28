import gravityTheme from "./assets/gravity.mp3";
const audio = new Audio(gravityTheme);
const offPieces = [
  { name: ".hat-container", delay: 1000 },
  { name: ".eye", delay: 2000 },
  { name: ".eyelashes-bottom", delay: 2300 },
  { name: ".eyelashes-top", delay: 2200 },
  { name: ".left.arm", delay: 4000 },
  { name: ".right.arm", delay: 4000 },
  { name: ".left.leg", delay: 6000 },
  { name: ".right.leg", delay: 6000 },
  { name: ".tie", delay: 8000 }
];
const container = document.querySelector(".container");
const triangle = document.querySelector("body");
audio.volume = 0.5;

triangle.addEventListener("click", () => {
  container.classList.add("off");
  audio.play();
  offPieces.forEach(piece => {
    const pieceElement = document.querySelector(piece.name);
    setTimeout(() => pieceElement.classList.add("on"), piece.delay);
  });
  setTimeout(() => container.classList.add("dark"), 8000);
});
