import { tauxDeChange } from "./data.js";

// DropDown
let selecetForm = document.getElementById("From");
let selectTo = document.getElementById("To");

// Button
let btn = document.querySelector(".convert");

// Amount input Value
let userInput = document.querySelector('.user');

// results 
let results = document.querySelector('.re');
let targetvalue = document.querySelector('.rr');


btn.addEventListener("click", () => {
    let change = `${selecetForm.value} to ${selectTo.value}`;
    let theExgangeRate = null;
  for (let i = 0; i < tauxDeChange.length; i++) {
    if (change == tauxDeChange[i][0]) {
      theExgangeRate = tauxDeChange[i][1];
      break;
    }else if (selecetForm.value == selectTo.value){
      theExgangeRate = 1;
    }
  }
  fetch('./Currency.json')
    .then((response) => response.json())
    .then((json) => {

      for(const key in json){
        if(key == selecetForm.value){
          targetvalue.innerHTML = `${userInput.value} ${json[key]} = `
        }

        if(key == selectTo.value){
          results.innerHTML = `${userInput.value*theExgangeRate} ${json[key]}`;
        }
      }

      // results.innerHTML = userInput.value*theExgangeRate;
      // targetvalue.innerHTML = `${userInput.value}`
    }
    )
});

