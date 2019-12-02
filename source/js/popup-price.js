var priceWrapper = document.querySelector(".price");
var priceOpenBtn = priceWrapper.querySelector(".price__link-show");
var pricePopup = priceWrapper.querySelector(".popup");
var priceCloseBtn = pricePopup.querySelector(".price__close-button");

priceOpenBtn.addEventListener("click", function(evt) {
  evt.preventDefault();

  pricePopup.classList.add("popup--show");
})

priceCloseBtn.addEventListener("click", function(evt) {
  evt.preventDefault();

  pricePopup.classList.remove("popup--show");
})
