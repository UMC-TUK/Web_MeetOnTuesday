import "./styles.css";

const imgslides = document.querySelector('.img_slides');
const imgslide = document.querySelectorAll('.img_wrap li');
let currentIdx = 0;
const slideCount = imgslide.length;
const leftBtn = document.querySelector('.left_slider_button');
const rightBtn = document.querySelector('.right_slider_button');
let slideWidth = 271;

imgslides.style.width = slideWidth*slideCount + 'px';

function moveImgSlide(num) {
  imgslides.style.left = num * 270 + 'px';
  currentIdx = num;
}

rightBtn.addEventListener('click', function() {
  moveImgSlide(currentIdx + 1);
});
