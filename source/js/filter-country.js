var filterCountryWrapper = document.querySelector(".filter-country");
var filterCountryBtn = filterCountryWrapper.querySelector(".filter-country__show-button");
var filterCountryBtnClose = filterCountryWrapper.querySelector(".filter-country__close-button");
var filterCountryLetterBtns = filterCountryWrapper.querySelectorAll(".filter-country__link-letter");

filterCountryBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  filterCountryWrapper.classList.toggle("filter-country--show");
})

filterCountryBtnClose.addEventListener("click", function (evt) {
  evt.preventDefault();

  filterCountryWrapper.classList.remove("filter-country--show");
})

var changeList = function(btn) {
  btn.addEventListener("click", function (evt) {
    evt.preventDefault();

    for (var i = 0; i < filterCountryLetterBtns.length; i++) {
      if (filterCountryLetterBtns[i].classList.contains("filter-country__link-letter--current")) {
        filterCountryLetterBtns[i].classList.remove("filter-country__link-letter--current");
      }
    }

    btn.classList.add("filter-country__link-letter--current");
  })
}

for (var i = 0; i < filterCountryLetterBtns.length; i++) {
  changeList(filterCountryLetterBtns[i]);
}
