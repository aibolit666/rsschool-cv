document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".burger span").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("animate");
});

const viewport = document.getElementById("viewport").offsetWidth;
const btnNext = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
const toTopBtn = document.getElementById("to-top");
let sliders = [];

for (let i = 0; i < slides.length; i++) {
  sliders[i] = slides[i].querySelector("img");
  sliders[i] = slides[i].querySelector("a");
  slides[i].remove();
}
let step = 0;
let offset = 0;

function draw() {
  let slide = document.createElement("div");
  slide.classList.add("slide");
  slide.appendChild(sliders[step]);
  slide.style.left = offset * viewport + "px";
  document.querySelector(".slider").appendChild(slide);
  if (step + 1 == slides.length) {
    step = 0;
  } else {
    step++;
  }
  offset = 1;
}

draw();
draw();

function left() {
  btnNext.removeEventListener("click", left);
  let slides2 = document.querySelectorAll(".slide");
  let offset2 = 0;
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.left = offset2 * viewport - viewport + "px";
    offset2++;
  }
  setTimeout(function () {
    slides2[0].remove();
    draw();
    btnNext.addEventListener("click", left);
  }, 500);
}
btnNext.addEventListener("click", left);


toTopBtn.onclick = function () {
  document.documentElement.scrollTop = 0;
};

window.onscroll = function () {
if (
  document.documentElement.scrollTop > toTopBtn.getBoundingClientRect().top
) {
  toTopBtn.style.visibility = "visible";
 } else {
   toTopBtn.style.visibility = "hidden";
 }
};
