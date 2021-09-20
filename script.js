console.log(
  "Самооценка задания:\n\n\n✅вёрстка валидная +10\n\n✅вёрстка семантическая +20\n\n✅используются css-стили +10\n\n✅контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет тянется во всю ширину страницы +10\n\n✅вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10\n\n✅есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям.+10\n\n✅на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt +10\n\n✅контакты для связи и перечень навыков оформлены в виде списка ul > li +10\n\n✅CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10\n\n✅CV содержит пример кода (не подсвечено доп.библиотекой) +5\n\n✅CV содержит изображения-ссылки на выполненные проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10\n\n✅CV выполнено на английском языке +10\n\n✅выполнены требования к Pull Request +10\n\n✅дизайн, оформление, качество выполнения CV не ниже чем в примерах CV +10\n\n😀ИТОГО: 145/150"
);

document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".burger span").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("animate");
});

let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.getElementById("next");
let slides = document.querySelectorAll(".slide");
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
