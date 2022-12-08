// Shopping bag

// Selects all as element
let totalCount = 0;
document.querySelectorAll(".switch").forEach(function (element) {
  console.log(element.firstElementChild); //First element child = checkbox not the whole switch
  const checkbox = element.firstElementChild;
  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      //+1 or -1 item when checkbox is clicked
      totalCount = totalCount + 1;
    } else {
      totalCount = totalCount - 1;
    }
    console.log(totalCount); //Hides initial shoppingbag when totalCount is running
    document.querySelectorAll(".shoppingbagbutton").forEach(function (button) {
      button.style.display = "none";
    });
    if (totalCount !== 0) {
      //If checkboxes are on, totalCount is showing, else initial shoppingbag is showing
      document.querySelector(".shoppingbag" + totalCount).style.display =
        "block";
    } else {
      document.querySelector(".shoppingbag").style.display = "block";
    }
    console.log(totalCount);
  });
});
