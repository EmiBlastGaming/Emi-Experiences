function checklogin() {
  var userInput = document.getElementById("login-textbox").value;

  if (userInput === "Micaela Kejner" || userInput === "No pague" || userInput === "No pague1") {
    alert("Lo siento, pero no ha pagado");
    window.location = "nopago.html"; }
  if (userInput === "Emiliano Kejner" || userInput === "Paulina Sanchez" || userInput === "khzxi") {
    alert("Nombre aprobado");
    window.location = "chooseexperience.html";
  } else {
    alert("Invalid username. Please try again.");
  }

  
}