// Shopping bag

let totalCount = 0;
document.querySelectorAll(".switch").forEach(function (element) {
  console.log(element.firstElementChild);
  const checkbox = element.firstElementChild;
  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      totalCount = totalCount + 1;
    } else {
      totalCount = totalCount - 1;
    }
    console.log(totalCount);
    document.querySelectorAll(".shoppingbagbutton").forEach(function (button) {
      button.style.display = "none";
    });
    if (totalCount !== 0) {
      document.querySelector(".shoppingbag" + totalCount).style.display =
        "block";
    } else {
      document.querySelector(".shoppingbag").style.display = "block";
    }
    console.log(totalCount);
  });
});
