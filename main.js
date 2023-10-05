import { tauxDeChange } from "./data.js";

// DropDown
let selecetForm = document.getElementById("From");
let selectTo = document.getElementById("To");

// Button
let btn = document.querySelector(".convert");

// Amount input Value
let userInput = document.querySelector('.user');

// results 
let results = document.querySelector('.re')


btn.addEventListener("click", () => {
    let change = `${selecetForm.value} to ${selectTo.value}`;
    let theExgangeRate = null;
  for (let i = 0; i < tauxDeChange.length; i++) {
    if (change == tauxDeChange[i][0]) {
      theExgangeRate = tauxDeChange[i][1];
      break;
    }
  }

  console.log(theExgangeRate);
  console.log(userInput.value);
  console.log(userInput.value*theExgangeRate);

  results.innerHTML = userInput.value*theExgangeRate

});


// import { tauxDeChange } from "./data.js";

// // DropDown
// let selectFrom = document.getElementById("From");
// let selectTo = document.getElementById("To");

// // Button
// let btn = document.querySelector(".convert");

// // Amount input Value
// let userInput = document.querySelector('.user');

// // results 
// let results = document.querySelector('.re');

// btn.addEventListener("click", () => {
//     let change = `${selectFrom.value} to ${selectTo.value}`;
//     let theExchangeRate = null;

//     for (let i = 0; i < tauxDeChange.length; i++) {
//         if (change == tauxDeChange[i][0]) {
//             theExchangeRate = tauxDeChange[i][1];
//             break;
//         }
//     }

//     if (theExchangeRate !== null) {
//         console.log("Exchange Rate:", theExchangeRate);
//         console.log("User Input:", userInput.value);
//         console.log("Converted Amount:", userInput.value * theExchangeRate);
        
//         results.innerHTML = userInput.value * theExchangeRate;
//     } else {
//         // Handle the case where the conversion rate is not found
//         results.innerHTML = "Conversion rate not found for selected currencies.";
//     }
// });
