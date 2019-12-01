var favButtonWrapper = document.querySelector(".companions-list");
var favButtons = favButtonWrapper.querySelectorAll(".companions-list__fav-button");

var clickFavButton = function(btn) {
  btn.addEventListener("click", function (evt) {
    evt.preventDefault();

    btn.classList.toggle("companions-list__fav-button--active");
  })
}

for (var i = 0; i < favButtons.length; i++) {
  clickFavButton(favButtons[i]);
}
