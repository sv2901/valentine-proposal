const introText =
  "I wrote this in code because some feelings are easier to express this way... 💻❤️";

const finalMessage =
  "Mera dil hai tu meri jaan hai tu, meri duniya jahan hai tu.\n\n" +
  "Bas tu dikhti hai mujhe shaam savere, mere dil pe likha naam hai tu.\n\n\n" +
  "You just made me the happiest person 💍❤️";

const typingEl = document.getElementById("typing");
const intro = document.getElementById("intro");
const final = document.getElementById("final");
const finalText = document.getElementById("final-text");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

/* Intro typing */
let i = 0;
function typeIntro() {
  if (i < introText.length) {
    typingEl.textContent += introText.charAt(i);
    i++;
    setTimeout(typeIntro, 45);
  }
}
typeIntro();

/* NO button escape */
document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  const dx = e.clientX - (rect.left + rect.width / 2);
  const dy = e.clientY - (rect.top + rect.height / 2);
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 120) {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 40 - 20;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  }
});



/* YES click */
yesBtn.addEventListener("click", () => {
  intro.style.display = "none";
final.classList.remove("hidden");
final.classList.add("show");
  typeFinal();
});

/* Final typing */
let j = 0;
function typeFinal() {
  if (j < finalMessage.length) {
    finalText.textContent += finalMessage.charAt(j);
    j++;
    setTimeout(typeFinal, 55);
  } else {
    // make last line bold after typing completes
    makeLastLineBold();
  }
}

function makeLastLineBold() {
  const lines = finalText.textContent.split("\n");
  const lastLine = lines.pop();

  finalText.innerHTML =
    lines.join("<br>") +
    "<br><br><strong>" + lastLine + "</strong>";
}
