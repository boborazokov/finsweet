const barsBar = document.getElementById("burger__wrapper");
let isfalse = false;

function handleClick() {
  if (isfalse) {
    barsBar.style.display = "flex";
  } else {
    barsBar.style.display = "none";
  }
  isfalse = !isfalse;
}
