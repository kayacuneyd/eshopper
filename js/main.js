/*price range*/

if ($.fn.slider) {
  $("#sl2").slider();
}

var RGBChange = function () {
  $("#RGB").css(
    "background",
    "rgb(" + r.getValue() + "," + g.getValue() + "," + b.getValue() + ")"
  );
};

/**CALCULATING */

var count = 0;
var countEl = document.getElementById("count");

window.addEventListener("load", function () {
  "use strict";
  var p = document.getElementById("hi"),
    prixFestival = 59;
  p.onclick = function () {
    var nombrePlaces = document.getElementById("nbItem").value;
    /* Calculate the price by clicking */
    document.getElementById("hello").innerText =
      prixFestival * nombrePlaces + " €";
  };

  /* Calculate the price by pressing ENTER */
  document.getElementById("nbItem").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("hi").click();
    }
  });
});

/**REMOVE ITEM */

if (!document.getElementById("product-body")) {
  console.log("empty");
} else {
  document
    .getElementById("cq-delete")
    .addEventListener("click", function (event) {
      event.preventDefault();

      setTimeout(() => {
        document.getElementById("product-body").remove();
      }, 3000);

      setTimeout(() => {
        document.querySelector(
          "#cart-items > div > div > table > tbody"
        ).innerHTML +=
          "<div id='input_div' style='text-align:center;'><h1>Your Shopping Cart is EMPTY</h1></div>";
      }, 4000);
    });
}
