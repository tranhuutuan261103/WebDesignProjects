var btnLeftArrow = document.getElementById("slide-show__left-arrow");
var btnRightArrow = document.getElementById("slide-show__right-arrow");

var slideShow = document.getElementsByClassName("testmonial__item");
var slideShowContent = document.getElementsByClassName("testmonial__list");

var slideShowDot = document.getElementsByClassName("slide-show__item");
var slideShowContentDot = document.getElementsByClassName("slide__show");

var slideShowIndex = 0;

btnLeftArrow.addEventListener("click", function () {
  slideShowIndex--;
  if (slideShowIndex < 0) {
    slideShowIndex = slideShow.length - 1;
  }
  for (var i = 0; i < slideShow.length; i++) {
    slideShow[i].className = slideShow[i].className.replace(" slide-show__item-active", "");
    slideShowDot[i].className = slideShowDot[i].className.replace(" slide-show__item-active", "");
  }
  slideShow[slideShowIndex].className += " slide-show__item-active";
  slideShowDot[slideShowIndex].className += " slide-show__item-active";
});

btnRightArrow.addEventListener("click", function () {
  slideShowIndex++;
  console.log(slideShowIndex);
  if (slideShowIndex > slideShow.length - 1) {
    slideShowIndex = 0;
  }
  for (var i = 0; i < slideShow.length; i++) {
    slideShow[i].className = slideShow[i].className.replace(" slide-show__item-active", "");
    slideShowDot[i].className = slideShowDot[i].className.replace(" slide-show__item-active", "");
  }
  slideShow[slideShowIndex].className += " slide-show__item-active";
  slideShowDot[slideShowIndex].className += " slide-show__item-active";
});