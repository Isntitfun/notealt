const nightMode = document.querySelector("#night-mode");

let isNightMode = false;

function handleNightModeChange(event) {
  if (isNightMode === false) {
    isNightMode === true;
  } else {
    isNightMode === false;
  }
}

nightMode.addEventListener("change", handleNightModeChange);

if (isNightMode === true) {
  document.querySelector(".grid").style.backgroundColor = "black";
}
