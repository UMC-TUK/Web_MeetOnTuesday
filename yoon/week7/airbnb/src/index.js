// import "./styles.css";

const imgslide = document.querySelectorAll(".img_wrap li");
const slideCount = imgslide.length;
let slideWidth = 271;
let currentIdx = new Array(9);
const imgslides = new Array(9);
const leftBtn = new Array(9);
const rightBtn = new Array(9);

for (let i = 0; i < 9; i++) {
  imgslides[i] = document.querySelectorAll(".img_slides")[i];
  leftBtn[i] = document.querySelectorAll(".left_slider_button")[i];
  rightBtn[i] = document.querySelectorAll(".right_slider_button")[i];
  imgslides[i].style.width = slideWidth * slideCount + "px";
  currentIdx[i] = 0;

  rightBtn[i].addEventListener("click", function () {
    if (currentIdx[i] === 4) {
      moveImgSlide(currentIdx[i] + 1);
      // rightBtn[i].style.visibility = "hidden";
    } else moveImgSlide(currentIdx[i] + 1, i);
    // if (leftBtn[i].style.visibility === "hidden") {
    //   leftBtn[i].style.visibility = "visible";
    // }
  });

  leftBtn[i].addEventListener("click", function () {
    if (currentIdx[i] === 0) {
      moveImgSlide(currentIdx[i] - 1);
      // leftBtn[i].style.visibility = "hidden";
    } else moveImgSlide(currentIdx[i] - 1, i);
    // if (rightBtn[i].style.visibility === "hidden") {
    //   rightBtn[i].style.visibility = "visible";
    // }
  });
}

function moveImgSlide(num, i) {
  imgslides[i].style.left = "-" + num * slideWidth + "px";
  currentIdx[i] = num;
}
