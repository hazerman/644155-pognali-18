var headerWrapper = document.querySelector(".main-header");
var headerButton = headerWrapper.querySelector(".main-header__button-toggle");
var headerButtonText = headerButton.querySelector(".visually-hidden");

headerWrapper.classList.remove("main-header--nojs");

headerButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  headerWrapper.classList.toggle("main-header--show");
  if (headerButtonText.textContent === "Открыть меню") {
    headerButtonText.textContent = "Закрыть меню";
  }
  else if (headerButtonText.textContent === "Закрыть меню") {
    headerButtonText.textContent = "Открыть меню";
  }
})
