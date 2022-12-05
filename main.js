const results = document.getElementById("results");
new URLSearchParams(window.location.search).forEach((value, name) => {
  results.append(`${name}: ${value}`);
  results.append(document.createElement("br"));
});

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
}
removeEggs.addEventListener("click", removeItemEggs);

function removeItemBlueberris() {
  blueberriesPrduct.style.display = "none";
}
removeBlueberries.addEventListener("click", removeItemBlueberris);

function removeItemSyrup() {
  syrupPrduct.style.display = "none";
}
removeSyrup.addEventListener("click", removeItemSyrup);

function removeItemPowder() {
  powderPrduct.style.display = "none";
}
removePowder.addEventListener("click", removeItemPowder);

function removeItemSugar() {
  sugarPrduct.style.display = "none";
}
removeSugar.addEventListener("click", removeItemSugar);

function removeItemMilk() {
  milkPrduct.style.display = "none";
}
removeMilk.addEventListener("click", removeItemMilk);

function removeItemFlour() {
  flourPrduct.style.display = "none";
}
removeFlour.addEventListener("click", removeItemFlour);
