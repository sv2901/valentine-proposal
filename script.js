const text =
  "I wrote this in code because some feelings are easier to express this way... 💻❤️";

const typingElement = document.getElementById("typing");
const question = document.getElementById("question");
const buttons = document.getElementById("buttons");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const finalText = document.getElementById("final");

let index = 0;

// Typing effect
function typeText() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 60);
  } else {
    setTimeout(() => {
      question.classList.remove("hidden");
      buttons.classList.remove("hidden");
    }, 500);
  }
}

typeText();

// NO button escapes
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES button action
yesBtn.addEventListener("click", () => {
  question.classList.add("hidden");
  buttons.classList.add("hidden");
  finalText.classList.remove("hidden");
  startHearts();
});

// Hearts animation
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 300);
}
