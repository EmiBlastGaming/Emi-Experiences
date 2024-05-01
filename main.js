function checklogin() {
  var userInput = document.getElementById("login-textbox").value;

  if (userInput === "Micaela Kejner" || userInput === "Camilo Kejner" || userInput === "Paulina Sanchez") {
    alert("Lo siento, pero no ha pagado");
    window.location = "nopago.html"; }
  if (userInput === "Emiliano Kejner" || userInput === "adsjasd" || userInput === "khzxi") {
    alert("Nombre aprobado");
    window.location = "chooseexperience.html";
  } else {
    alert("Invalid username. Please try again.");
  }

  
}