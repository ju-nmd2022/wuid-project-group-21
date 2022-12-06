// moving information form the form input to be displayed in the final page

// const results = document.getElementById("results");
// new URLSearchParams(window.location.search).forEach((value, name) => {
//   results.append(`${name}: ${value}`);
//   results.append(document.createElement("br"));
// });

function placeFormInformation() {
  const results = document.getElementById("results");
  new URLSearchParams(window.location.search).forEach((value) => {
    results.append(`${value}`);
    results.append(document.createElement("br"));
  });
}
placeFormInformation();

function orderdetails() {
  // removing items from "your order"
  const removeEggs = document.getElementById("removeEggs");
  const removeBlueberries = document.getElementById("removeBlueberries");
  const removeSyrup = document.getElementById("removeSyrup");
  const removePowder = document.getElementById("removePowder");
  const removeSugar = document.getElementById("removeSugar");
  const removeMilk = document.getElementById("removeMilk");
  const removeFlour = document.getElementById("removeFlour");

  const eggPrduct = document.getElementById("eggs");
  const blueberriesPrduct = document.getElementById("blueberries");
  const syrupPrduct = document.getElementById("syrup");
  const powderPrduct = document.getElementById("powder");
  const sugarPrduct = document.getElementById("sugar");
  const milkPrduct = document.getElementById("milk");
  const flourPrduct = document.getElementById("flour");

  function removeItemEggs() {
    eggPrduct.style.display = "none";
    sessionStorage.setItem("isEggs", false);
    totalCalculation();
    document.getElementById("receiptEggs").style.display = "none";
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
  const dispalyedPrice = Math.round(total * 100) / 100;
  document.getElementById("total").innerText = dispalyedPrice;
}

function receiptFunction() {
  const isEggs = sessionStorage.getItem("isEggs");
  const isBlueberries = sessionStorage.getItem("isBlueberries");
  const isSyrup = sessionStorage.getItem("isSyrup");
  const isPowder = sessionStorage.getItem("isPowder");
  const isSugar = sessionStorage.getItem("isSugar");
  const isMilk = sessionStorage.getItem("isMilk");
  const isFlour = sessionStorage.getItem("isFlour");
  if (isEggs == "false") {
    document.getElementById("receiptEggs").style.display = "none";
  }
  if (isBlueberries == "false") {
    document.getElementById("receiptBlueberries").style.display = "none";
  }
  if (isSyrup == "false") {
    document.getElementById("receiptSyrup").style.display = "none";
  }
  if (isPowder == "false") {
    document.getElementById("receiptPowder").style.display = "none";
  }
  if (isSugar == "false") {
    document.getElementById("receiptSugar").style.display = "none";
  }
  if (isMilk == "false") {
    document.getElementById("receiptMilk").style.display = "none";
  }
  if (isFlour == "false") {
    document.getElementById("receiptFlour").style.display = "none";
  }
  document.getElementById("totalInReceipt").innerText = dispalyedPrice;
}
