var filtersFormWrapper = document.querySelector(".filters__category-list");
var filtersFormBtns = filtersFormWrapper.querySelectorAll(".filters__button-toggle");
var filtersFormCategories = filtersFormWrapper.querySelectorAll(".filters__wrapper");

for (var i = 0; i < filtersFormBtns.length - 1; i++) {
  filtersFormCategories[i].classList.remove("filters__wrapper--show");
  filtersFormBtns[i].classList.remove("filters__button-toggle--expanded");
}

var touchCategory = function(btn, wrap) {
  btn.addEventListener("click", function (evt) {
    btn.classList.toggle("filters__button-toggle--expanded");

    wrap.classList.toggle("filters__wrapper--show");
  })
}

for (var i = 0; i < filtersFormBtns.length; i++) {
  touchCategory(filtersFormBtns[i], filtersFormCategories[i]);
}
