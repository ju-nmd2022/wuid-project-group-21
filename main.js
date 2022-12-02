const results = document.getElementById("results");
new URLSearchParams(window.location.search).forEach((value, name) => {
  results.append(`${name}: ${value}`);
  results.append(document.createElement("br"));
});
