var transportWrapper = document.querySelector(".profile__transport-whish-list");
var transportItems = transportWrapper.querySelectorAll(".transport-whish-list__item");
var transportBtns = transportWrapper.querySelectorAll(".transport-whish-list__button-toggle");

var toggleTransportBtn = function (btn, item) {
  btn.addEventListener("click", function(evt) {
    evt.preventDefault();

    item.classList.toggle("transport-whish-list__item--active");
  })
}

for (var i = 0; i < transportItems.length; i++) {
  toggleTransportBtn(transportBtns[i], transportItems[i]);
}
