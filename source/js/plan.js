var planWrapper = document.querySelector(".plan--append");
var planCarousel = planWrapper.querySelector(".plan__carousel");
var planCarouselItems = planCarousel.querySelectorAll('.plan__carousel-item');
var planList = planWrapper.querySelector(".plan__list");
var planListItems = planList.querySelectorAll(".plan__item");
var planBtnsNext = planWrapper.querySelectorAll("a.plan__button-step");
var planBtnsPrev = planWrapper.querySelectorAll(".plan__link-step");

for (var i = 1; i <planListItems.length; i++) {
  planListItems[i].classList.remove("plan__item--show");
}

var nextSlide = function (btn, counter) {
  btn.addEventListener("click", function (evt) {
    evt.preventDefault();

    planListItems[counter].classList.remove("plan__item--show");
    planCarouselItems[counter].classList.remove("plan__carousel-item--current");
    planListItems[counter + 1].classList.add("plan__item--show");
    planCarouselItems[counter + 1].classList.add("plan__carousel-item--current");
    planWrapper.scrollIntoView();
  })
}

var prevSlide = function (btn, counter) {
  btn.addEventListener("click", function (evt) {
    evt.preventDefault();

    planListItems[counter + 1].classList.remove("plan__item--show");
    planCarouselItems[counter + 1].classList.remove("plan__carousel-item--current");
    planListItems[counter].classList.add("plan__item--show");
    planCarouselItems[counter].classList.add("plan__carousel-item--current");
    planWrapper.scrollIntoView();
  })
}

for (var i = 0; i < planBtnsNext.length; i++) {
  nextSlide(planBtnsNext[i], i);
  prevSlide(planBtnsPrev[i], i);
}
