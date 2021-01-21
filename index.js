(function (window, document) {
  "use strict";
  const $bag = document.querySelectorAll(".bag");
  const $bagBtn = document.getElementById("btn--bag");

  $bagBtn.addEventListener("click", () => toggleBag());

  const toggleBag = () => {
    [].forEach.call($bag, (bag) => {
      bag.classList.toggle("on");
    });
  };
})(window, document);
