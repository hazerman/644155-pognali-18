var filterCountryWrapper = document.querySelector(".filter-country");
var filterCountryBtn = filterCountryWrapper.querySelector(".filter-country__show-button");

filterCountryBtn.addEventListener("click", function(evt) {
  evt.preventDefault();

  filterCountryWrapper.classList.toggle("filter-country--show");
})
