// Référence vers l'élément du bouton calculer
const calculateButton = document.getElementById("calculate");

// Référence vers l'élément du premier champ texte
const inputNumber1 = document.getElementById("number1");

// Référence vers l'élément du deuxième champ texte
const inputNumber2 = document.getElementById("number2");

// Référence vers l'élément de l'opérateur
const inputOperand = document.getElementById("operand");

// Référence vers l'élément dans lequel on affichera le résultat
const resultOutput = document.getElementById("result");

// On écoute l'évenement "click" du bouton "calculer"
calculateButton.addEventListener("click", function () {
  // Variable pour stocker le résultat de l'opération
  let result = 0;

  // On récupère la valeur saisie dans le premier champ texte
  const number1 = parseInt(inputNumber1.value);

  // On récupère la valeur saisie dans le deuxième champ texte
  const number2 = parseInt(inputNumber2.value);

  // En fonction de la valeur de l'opérateur,
  // on effectue la bonne opération
  switch (inputOperand.value) {
    case "+":
      result = number1 + number2;
      break;

    case "-":
      result = number1 - number2;
      break;

    case "*":
      result = number1 * number2;
      break;

    case "/":
      // Pour la division, on averti si le deuxième champ
      // est égal à 0
      if (number2 === 0) {
        alert("La division par 0 est impossible :(");
      } else {
        result = number1 / number2;
      }

      break;

    default:
      result = "Opérateur invalide";
  }

  // On met à jour le résultat dans la page
  resultOutput.innerHTML = result;
});
