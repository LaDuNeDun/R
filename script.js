const btn = document.getElementById("openBtn");
const card = document.getElementById("card");
const partyCard = document.getElementById("partyCard");
const finalCard = document.getElementById("finalCard");
const rewardCard = document.getElementById("rewardCard");

const happy = document.getElementById("happy");
const str = document.getElementById("str");
const luck = document.getElementById("luck");

const fill = document.querySelector(".fill");
const lv = document.getElementById("lv");
const sound = document.getElementById("LevelSound");

/* ANIMATE NUMBER */
function animateValue(element, start, end, duration) {
  let startTime = null;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* START */
btn.onclick = () => {
  btn.parentElement.style.display = "none";
  card.classList.remove("hidden");

  fill.animate([{width:"0%"},{width:"100%"}],{duration:3000,fill:"forwards"});

  setTimeout(()=>{
    lv.textContent="LV 21";
    sound.currentTime = 0;
    sound.play().catch(()=>{});
  },3000);

  animateValue(happy,0,100,1500);
  animateValue(str,0,50,2000);
  animateValue(luck,0,999,2500);
};

/* ================= PARTY ================= */
document.getElementById("partyBtn").onclick = () => {
  card.classList.add("hidden");
  partyCard.classList.remove("hidden");

  const chemFill = document.getElementById("chem1");
  const chemLv = document.getElementById("chemLv1");

  chemFill.animate([{width:"0%"},{width:"100%"}],{duration:3000,fill:"forwards"});

  setTimeout(()=>{
    chemLv.textContent="LV 11 ❤️";
    sound.currentTime = 0;
    sound.play().catch(()=>{});
  },3000);
};

document.getElementById("backBtn").onclick = () => {
  partyCard.classList.add("hidden");
  card.classList.remove("hidden");
};

/* ================= FINAL CARD ================= */
document.getElementById("nextPartyBtn").onclick = () => {
  partyCard.classList.add("hidden");
  finalCard.classList.remove("hidden");
};

document.getElementById("backToPartyBtn").onclick = () => {
  finalCard.classList.add("hidden");
  partyCard.classList.remove("hidden");
};

/* ================= REWARD CARD ================= */
document.getElementById("nextFinalBtn").onclick = () => {
  finalCard.classList.add("hidden");
  rewardCard.classList.remove("hidden");
};

/* ================= CHEST TAP SYSTEM ================= */
const chest = document.getElementById("chestBox");
const chestImage = document.getElementById("chestImage");

let tapCount = 0;
let opened = false;

chest.addEventListener("click", () => {
  if (opened) return;

  tapCount++;

  // efek shake
  chest.classList.add("shake");
  setTimeout(() => chest.classList.remove("shake"), 300);

  // buka setelah 3 tap
  if (tapCount >= 3) {
    opened = true;

    // ganti gambar jadi hadiah
    chestImage.src = "assets/hantu.png";
    chestImage.style.animation = "pop 0.4s ease";

    sound.currentTime = 0;
    sound.play().catch(()=>{});
  }
});