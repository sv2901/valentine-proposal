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

/* NO button escape */
noBtn.addEventListener("mouseover", () => {
  noBtn.style.transform =
    `translate(${Math.random() * 80 - 40}px, ${Math.random() * 40 - 20}px)`;
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
  }
}
