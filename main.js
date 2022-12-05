const results = document.getElementById("results");
new URLSearchParams(window.location.search).forEach((value, name) => {
  results.append(`${name}: ${value}`);
  results.append(document.createElement("br"));
});

function removeItemEggs() {
  const eggPrduct = document.getElementById("eggs");
  eggPrduct.style.display = "none";
}
const removeEggs = document.getElementById("removeEggs");
removeEggs.addEventListener("click", removeItemEggs);
