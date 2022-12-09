//function to place the form information in the last page
//  source for getting the form information: https://onecompiler.com/javascript/3wfknr963
function placeFormInformation() {
  const results = document.getElementById("results");
  new URLSearchParams(window.location.search).forEach((value) => {
    results.append(`${value}`);
    results.append(document.createElement("br"));
  });
}
placeFormInformation();

// this function will run when the order detail page is opened
function orderdetails() {
  // getting all the "remove item" text elements so that they can be the event listeners
  const removeEggs = document.getElementById("removeEggs");
  const removeBlueberries = document.getElementById("removeBlueberries");
  const removeSyrup = document.getElementById("removeSyrup");
  const removePowder = document.getElementById("removePowder");
  const removeSugar = document.getElementById("removeSugar");
  const removeMilk = document.getElementById("removeMilk");
  const removeFlour = document.getElementById("removeFlour");
  // getting all the "product" articles so they can be removed
  const eggPrduct = document.getElementById("eggs");
  const blueberriesPrduct = document.getElementById("blueberries");
  const syrupPrduct = document.getElementById("syrup");
  const powderPrduct = document.getElementById("powder");
  const sugarPrduct = document.getElementById("sugar");
  const milkPrduct = document.getElementById("milk");
  const flourPrduct = document.getElementById("flour");
  // getting the value set to the items in session storage
  const isEggs = sessionStorage.getItem("isEggs");
  const isBlueberries = sessionStorage.getItem("isBlueberries");
  const isSyrup = sessionStorage.getItem("isSyrup");
  const isPowder = sessionStorage.getItem("isPowder");
  const isSugar = sessionStorage.getItem("isSugar");
  const isMilk = sessionStorage.getItem("isMilk");
  const isFlour = sessionStorage.getItem("isFlour");

  // "checkStorage" function checks if the item is set as false in the local storage so if you refresh the page they will stay removed from the shopping cart
  function checkStorage() {
    if (isEggs == "false") {
      eggPrduct.style.display = "none";
    }
    if (isBlueberries == "false") {
      blueberriesPrduct.style.display = "none";
    }
    if (isSyrup == "false") {
      syrupPrduct.style.display = "none";
    }
    if (isPowder == "false") {
      powderPrduct.style.display = "none";
    }
    if (isSugar == "false") {
      sugarPrduct.style.display = "none";
    }
    if (isMilk == "false") {
      milkPrduct.style.display = "none";
    }
    if (isFlour == "false") {
      flourPrduct.style.display = "none";
    }
    totalCalculation();
  }
  checkStorage();

  // next seven functions listen to a click event on the "remove item" text and removes the item in question.
  // they also sets the item as false in local storage so when refreshing and on the last page it can be also set as unvisible
  // it sels off the "totalCalculation" function wich calculates the total
  function removeItemEggs() {
    eggPrduct.style.display = "none";
    sessionStorage.setItem("isEggs", false);
    totalCalculation();
  }
  removeEggs.addEventListener("click", removeItemEggs);

  function removeItemBlueberris() {
    blueberriesPrduct.style.display = "none";
    sessionStorage.setItem("isBlueberries", false);
    totalCalculation();
  }
  removeBlueberries.addEventListener("click", removeItemBlueberris);

  function removeItemSyrup() {
    syrupPrduct.style.display = "none";
    sessionStorage.setItem("isSyrup", false);
    totalCalculation();
  }
  removeSyrup.addEventListener("click", removeItemSyrup);

  function removeItemPowder() {
    powderPrduct.style.display = "none";
    sessionStorage.setItem("isPowder", false);
    totalCalculation();
  }
  removePowder.addEventListener("click", removeItemPowder);

  function removeItemSugar() {
    sugarPrduct.style.display = "none";
    sessionStorage.setItem("isSugar", false);
    totalCalculation();
  }
  removeSugar.addEventListener("click", removeItemSugar);

  function removeItemMilk() {
    milkPrduct.style.display = "none";
    sessionStorage.setItem("isMilk", false);
    totalCalculation();
  }
  removeMilk.addEventListener("click", removeItemMilk);

  function removeItemFlour() {
    flourPrduct.style.display = "none";
    sessionStorage.setItem("isFlour", false);
    totalCalculation();
  }
  removeFlour.addEventListener("click", removeItemFlour);
}
orderdetails();

// function for calculating the total
// total is a variable and if a item is set to false the price will be subtracted from the total
function totalCalculation() {
  const isEggs = sessionStorage.getItem("isEggs");
  const isBlueberries = sessionStorage.getItem("isBlueberries");
  const isSyrup = sessionStorage.getItem("isSyrup");
  const isPowder = sessionStorage.getItem("isPowder");
  const isSugar = sessionStorage.getItem("isSugar");
  const isMilk = sessionStorage.getItem("isMilk");
  const isFlour = sessionStorage.getItem("isFlour");

  var total = 179.8;
  if (isEggs == "false") {
    total -= 20.9;
  }
  if (isBlueberries == "false") {
    total -= 25.95;
  }
  if (isSyrup == "false") {
    total -= 45.95;
  }
  if (isPowder == "false") {
    total -= 9;
  }
  if (isSugar == "false") {
    total -= 12;
  }
  if (isMilk == "false") {
    total -= 8;
  }
  if (isFlour == "false") {
    total -= 18;
  }
  // Math.round is needed to get rid of weird desimals that appear seemingly out of nowhere
  const dispalyedPrice = Math.round(total * 100) / 100;
  document.getElementById("total").innerText = dispalyedPrice;
}

// does the same thing as the "totalCalculation" function but for the last page
// but additionally also hides the items that were removed in orderdetails
function receiptFunction() {
  const isEggs = sessionStorage.getItem("isEggs");
  const isBlueberries = sessionStorage.getItem("isBlueberries");
  const isSyrup = sessionStorage.getItem("isSyrup");
  const isPowder = sessionStorage.getItem("isPowder");
  const isSugar = sessionStorage.getItem("isSugar");
  const isMilk = sessionStorage.getItem("isMilk");
  const isFlour = sessionStorage.getItem("isFlour");

  var totalReceipt = 179.8;
  if (isEggs == "false") {
    document.getElementById("receiptEggs").style.display = "none";
    totalReceipt -= 20.9;
  }
  if (isBlueberries == "false") {
    document.getElementById("receiptBlueberries").style.display = "none";
    totalReceipt -= 25.95;
  }
  if (isSyrup == "false") {
    document.getElementById("receiptSyrup").style.display = "none";
    totalReceipt -= 45.95;
  }
  if (isPowder == "false") {
    document.getElementById("receiptPowder").style.display = "none";
    totalReceipt -= 9;
  }
  if (isSugar == "false") {
    document.getElementById("receiptSugar").style.display = "none";
    totalReceipt -= 12;
  }
  if (isMilk == "false") {
    document.getElementById("receiptMilk").style.display = "none";
    totalReceipt -= 8;
  }
  if (isFlour == "false") {
    document.getElementById("receiptFlour").style.display = "none";
    totalReceipt -= 18;
  }
  // Math.round is needed to get rid of weird desimals that appear seemingly out of nowhere
  const dispalyedPriceReceipt = Math.round(totalReceipt * 100) / 100;
  document.getElementById("totalInReceipt").innerText = dispalyedPriceReceipt;
}

function link() {
  var blueberryRecipe = document.getElementById("pancakeLink");
  blueberryRecipe.addEventListener(
    "click",
    function () {
      location.href = "detail.html";
    },
    false
  );

  var logoLink = document.getElementById("breakfastLogo");
  logoLink.addEventListener(
    "click",
    function () {
      location.href = "index.html";
    },
    false
  );
}
