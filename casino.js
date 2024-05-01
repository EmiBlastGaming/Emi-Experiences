chancemance = ""


function chances() {
    userInput = document.getElementById("betting-amount").value
    chancemance = Math.random()

    if(chancemance <0.3) {
        if(userInput == "") {
            document.getElementById("resultados").innerHTML = "INSERTA CUANTO QUIERES APOSTAR"
        } else {
            document.getElementById("resultados").innerHTML = "HAS GANADO " + userInput *2 + "!"
        }
    } else {
        if(userInput == "") {
            document.getElementById("resultados").innerHTML = "INSERTA CUANTO QUIERES APOSTAR"
        } else {
            document.getElementById("resultados").innerHTML = "PERDISTE TUS " + userInput + " pesos..."
        }
    }
    }