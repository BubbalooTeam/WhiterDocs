var drawer = document.getElementById("drawer");
var button = document.getElementById("button");

var isOpen = false;

button.addEventListener("click", function() {
    isOpen = !isOpen;
  
    if (isOpen) {
        button.innerHTML = "X";
        drawer.style.transform = "translateX(0)";
    } else {
        button.innerHTML = "=";
        drawer.style.transform = "translateX(-100%)";
    }
});
