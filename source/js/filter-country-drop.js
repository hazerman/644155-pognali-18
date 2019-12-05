var dropCountryWrapper = document.querySelector(".plan__countries-wrapper");
var dropBtns = dropCountryWrapper.querySelectorAll(".plan__country-button");
var countryList = dropCountryWrapper.querySelector(".plan__filter-country");
var countryListLetterBtns = countryList.querySelectorAll(".filter-country__link-letter");

var dropListHeight;
var dropAfterHeight = dropCountryWrapper.querySelector(".filter-country__letter-element");

dropBtns[2].addEventListener("click", function (evt) {
  evt.preventDefault();

  dropBtns[2].classList.toggle("plan__country-button--show");

  dropListHeight = dropCountryWrapper.querySelector(".filter-country__link-letter--current + .filter-country__country-name-list").offsetHeight;
  if (window.innerWidth < 768) {
    dropAfterHeight.style.height = dropListHeight + "px";
  }
  else if ((window.innerWidth >= 768) && (window.innerWidth < 1440)) {
    if (dropListHeight > 350) {
      dropAfterHeight.style.height = (dropListHeight - 350) + "px";
    }
    else {
      dropAfterHeight.style.height = 0;
    }
  }
  else if (window.innerWidth >= 1440) {
    if (dropListHeight > 390) {
      dropAfterHeight.style.height = (dropListHeight - 350) + "px";
    }
    else {
      dropAfterHeight.style.height = 0;
    }
  }
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

    dropListHeight = dropCountryWrapper.querySelector(".filter-country__link-letter--current + .filter-country__country-name-list").offsetHeight;
    if (window.innerWidth < 768) {
      dropAfterHeight.style.height = dropListHeight + "px";
    }
    else if ((window.innerWidth >= 768) && (window.innerWidth < 1440)) {
      if (dropListHeight > 350) {
        dropAfterHeight.style.height = (dropListHeight - 350) + "px";
      }
      else {
        dropAfterHeight.style.height = 0;
      }
    }
    else if (window.innerWidth >= 1440) {
      if (dropListHeight > 390) {
        dropAfterHeight.style.height = (dropListHeight - 350) + "px";
      }
      else {
        dropAfterHeight.style.height = 0;
      }
    }
  })
}

for (var i = 0; i < countryListLetterBtns.length; i++) {
  changeDropList(countryListLetterBtns[i]);
}
