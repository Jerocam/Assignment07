/*eslint-env browser*/
"use strict";

//STEP 1
// let numb = Math.abs(prompt("Enter a + or - number"));
// while(numb==""){numb = Math.abs(prompt("Please, enter a + or - number"));}
// window.console.log(numb);

//STEP 2
// let numb = Math.round(prompt("Enter a floating number"));
// while(numb==""){numb = Math.round(prompt("Please, enter a floating number"));}
// window.console.log("Decimal: "+numb);

//STEP 3 - same question than 2..maybe it is miskate?
// let numb = Math.round(prompt("Enter a floating number"));
// while(numb==""){numb = Math.round(prompt("Please, enter a floating number"));}
// window.console.log("Decimal: "+numb);

//STEP 4
// let numb = prompt("Enter 5 numbers - Enter comma on each number");
// while(numb==""){numb = prompt("Please, enter 5 numbers with commas");}
// let x = numb.split(",");
// let arr = [];

// arr.push(x[0]);
// for(let i =0; i<x.length; i++){
//     if(x[i] !== x[i-1]){
//         arr.push(x[i]);
//     }
// }

// let lg = Math.max(...arr);
// let sm = Math.min(...arr);

// window.console.log("The largest of the numbers: "+lg+"\nThe Smallest of the numbers: "+sm);

//STEP 5
let numb = Math.sqrt(prompt("Enter a number"));
while(numb==""){numb = Math.sqrt(prompt("Please, enter a number"));}
window.console.log(numb);

