var dropCountryWrapper = document.querySelector(".plan__countries-wrapper");
var dropBtns = dropCountryWrapper.querySelectorAll(".plan__country-button");

console.log(dropCountryWrapper);
console.log(dropBtns);


dropBtns[2].addEventListener("click", function (evt) {
  evt.preventDefault();

  dropBtns[2].classList.toggle("plan__country-button--show");
})
