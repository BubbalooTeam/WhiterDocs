// Seleciona o drawer e o botão pelo id
var drawer = document.getElementById("drawer");
var button = document.getElementById("button");

// Cria uma variável para controlar o estado do drawer
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
