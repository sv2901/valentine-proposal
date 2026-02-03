const introText =
  "I wrote this in code because some feelings are easier to express this way... 💻❤️";

const finalMessage =
  "You just made me the happiest person 💍❤️";

const typingEl = document.getElementById("typing");
const intro = document.getElementById("intro");
const finalScreen = document.getElementById("final-screen");
const finalText = document.getElementById("final-text");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

let i = 0;

// Intro typing
function typeIntro() {
  if (i < introText.length) {
    typingEl.textContent += introText.charAt(i);
    i++;
    setTimeout(typeIntro, 50);
  }
}
typeIntro();

// NO button escape
noBtn.addEventListener("mouseover", () => {
  noBtn.style.transform =
    `translate(${Math.random() * 100 - 50}px, ${Math.random() * 50 - 25}px)`;
});

// YES click
yesBtn.addEventListener("click", () => {
  intro.style.display = "none";      // force-hide intro
  finalScreen.classList.add("show"); // show final screen
  typeFinal();
});

// Final typing
let j = 0;
function typeFinal() {
  if (j < finalMessage.length) {
    finalText.textContent += finalMessage.charAt(j);
    j++;
    setTimeout(typeFinal, 70);
  }
}
