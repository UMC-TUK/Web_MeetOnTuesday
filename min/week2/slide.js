const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const slideList = document.querySelectorAll(".slide");
const slideWidth = slideList[0].offsetWidth;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let startX = 0;
let curX = 0;
let translateX = 0;
let isDragging = false;
let curIndex = 0;

slider.addEventListener("mousedown", handleDragStart);
slider.addEventListener("mousemove", handleDragMove);
slider.addEventListener("mouseup", handleDragEnd);
slider.addEventListener("mouseleave", handleDragEnd);

slider.addEventListener("touchstart", handleDragStart);
slider.addEventListener("touchmove", handleDragMove);
slider.addEventListener("touchend", handleDragEnd);

prevButton.addEventListener("click", handlePrevClick);
nextButton.addEventListener("click", handleNextClick);

function handlePrevClick() {
  curIndex = curIndex === 0 ? slideList.length - 1 : curIndex - 1;
  translateX = -curIndex * slideWidth;
  slides.style.transform = `translateX(${translateX}px)`;
}

function handleNextClick() {
  curIndex = curIndex === slideList.length - 1 ? 0 : curIndex + 1;
  translateX = -curIndex * slideWidth;
  slides.style.transform = `translateX(${translateX}px)`;
}

let currSlide = 1;

function handleDragStart(e) {
  isDragging = true;

  if (e.type === "touchstart") {
    startX = e.touches[0].clientX;
  } else {
    startX = e.clientX;
  }

  slides.style.transition = "";
}

function handleDragMove(e) {
  if (!isDragging) return;

  e.preventDefault();

  if (e.type === "touchmove") {
    curX = e.touches[0].clientX;
  } else {
    curX = e.clientX;
  }

  translateX = translateX + (curX - startX);
  slides.style.transform = `translateX(${translateX}px)`;

  startX = curX;
}

function handleDragEnd(e) {
  isDragging = false;

  if (translateX > 0) {
    translateX = 0;
    slides.style.transform = `translateX(${translateX}px)`;
  } else if (translateX < -slideWidth * (slideList.length - 1)) {
    translateX = -slideWidth * (slideList.length - 1);
    slides.style.transform = `translateX(${translateX}px)`;
  } else {
    const slideIndex = Math.round(Math.abs(translateX) / slideWidth);
    translateX = -slideIndex * slideWidth;
    slides.style.transform = `translateX(${translateX}px)`;
  }

  slides.style.transition = "transform 0.3s ease-in-out";
}
