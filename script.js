const introText =
  "I wrote this in code because some feelings are easier to express this way... 💻❤️";

const finalMessage =
  "Mera dil haii tu meri jaan hai tu, meri duniya jahan hai tu.\n" +
  "Bas tu dikhti hai mujhe shaam savere, mere dil pe likha naam hai tu.\n\n" +
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

/* NO button logic */
let noActivated = false;

noBtn.addEventListener("mouseenter", () => {
  if (!noActivated) {
    const rect = noBtn.getBoundingClientRect();
    const parentRect = noBtn.parentElement.getBoundingClientRect();

    noBtn.style.position = "absolute";
    noBtn.style.left = rect.left - parentRect.left + "px";
    noBtn.style.top = rect.top - parentRect.top + "px";

    noActivated = true;
  }
});

document.addEventListener("mousemove", (e) => {
  if (!noActivated) return;

  const rect = noBtn.getBoundingClientRect();
  const btnX = rect.left + rect.width / 2;
  const btnY = rect.top + rect.height / 2;

  const dx = e.clientX - btnX;
  const dy = e.clientY - btnY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 120) {
    const angle = Math.atan2(dy, dx);
    const moveX = -Math.cos(angle) * 130;
    const moveY = -Math.sin(angle) * 90;

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
});

/* YES click */
yesBtn.addEventListener("click", () => {
  intro.style.display = "none";
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
  }
}
