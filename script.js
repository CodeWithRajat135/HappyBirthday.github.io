// 🎈 Generate Balloons
for (let i = 0; i < 10; i++) {
  let balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.background = `linear-gradient(to bottom, hsl(${Math.random()*360},80%,60%), hsl(${Math.random()*360},90%,70%))`;
  balloon.style.animationDuration = 5 + Math.random() * 5 + "s";

  let string = document.createElement("div");
  string.classList.add("string");
  balloon.appendChild(string);
  document.body.appendChild(balloon);
}

// 🎊 Confetti Surprise
function showSurprise() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }

  alert("🎊 Surprise! Have the most amazing birthday ever! 💖🎈");
}
