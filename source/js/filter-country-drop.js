var dropCountryWrapper = document.querySelector(".plan__countries-wrapper");
var dropBtns = dropCountryWrapper.querySelectorAll(".plan__country-button");
var countryList = dropCountryWrapper.querySelector(".plan__filter-country");
var countryListLetterBtns = countryList.querySelectorAll(".filter-country__link-letter");

dropBtns[2].addEventListener("click", function (evt) {
  evt.preventDefault();

  dropBtns[2].classList.toggle("plan__country-button--show");
})

var changeDropList = function (btn) {
  btn.addEventListener("click", function (evt) {
    evt.preventDefault();

    for (var i = 0; i < countryListLetterBtns.length; i++) {
      if (countryListLetterBtns[i].classList.contains("filter-country__link-letter--current")) {
        countryListLetterBtns[i].classList.remove("filter-country__link-letter--current");
      }
    }

    btn.classList.add("filter-country__link-letter--current");
  })
}

for (var i = 0; i < countryListLetterBtns.length; i++) {
  changeDropList(countryListLetterBtns[i]);
}
