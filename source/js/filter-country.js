var filterCountryWrapper = document.querySelector(".filter-country");
var filterCountryBtn = filterCountryWrapper.querySelector(".filter-country__show-button");
var filterCountryBtnText = filterCountryBtn.querySelector("span");
var filterCountryBtnClose = filterCountryWrapper.querySelector(".filter-country__close-button");
var filterCountryLetterBtns = filterCountryWrapper.querySelectorAll(".filter-country__link-letter");

var listHeight;
var afterHeight = filterCountryWrapper.querySelector(".filter-country__letter-element");

filterCountryBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  filterCountryWrapper.classList.toggle("filter-country--show");

  listHeight = filterCountryWrapper.querySelector(".filter-country__link-letter--current + .filter-country__country-name-list").offsetHeight;
  if (window.innerWidth < 768) {
    afterHeight.style.height = listHeight + "px";
  }
  else if ((window.innerWidth >= 768) && (window.innerWidth < 1440) && (listHeight > 475)) {
    afterHeight.style.height = (listHeight - 475) + "px";
  }

  if (filterCountryBtnText.textContent === "Показать все") {
    filterCountryBtnText.textContent = "Свернуть";
  }
  else if (filterCountryBtnText.textContent === "Свернуть") {
    filterCountryBtnText.textContent = "Показать все";
  }
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

    listHeight = filterCountryWrapper.querySelector(".filter-country__link-letter--current + .filter-country__country-name-list").offsetHeight;
    if (window.innerWidth < 768) {
      afterHeight.style.height = listHeight + "px";
    }
    else if ((window.innerWidth >= 768) && (window.innerWidth < 1440)) {
      if (listHeight > 475) {
        afterHeight.style.height = (listHeight - 475) + "px";
      }
      else {
        afterHeight.style.height = 0;
      }
    }
  })
}

for (var i = 0; i < filterCountryLetterBtns.length; i++) {
  changeList(filterCountryLetterBtns[i]);
}
