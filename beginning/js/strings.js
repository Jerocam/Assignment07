/*eslint-env browser*/

"use strict";

//STEP 1
// let name = prompt("What is your name?");
// let x = name.length;
// alert("The Length of name: "+x);

//STEP 2
// let name = prompt("What is your first name?");
// let numb = prompt("Enter a number for the letter of name");
// let findL = name.charAt(numb);
// alert("The letter of name: "+findL);

//STEP 3
// let fName = prompt("What is your first name?");
// let lName = prompt("What is your last name?");
// let bothN = fName.concat(" ",lName);
// alert("The full name: "+bothN);

//STEP 4
// let fox = "The quick brown fox jumps over the lazy dog";
// let fx = fox.indexOf("fox");
// alert(fx);

//STEP 5
// let fox = "The quick brown fox jumps over the lazy fox";
// let fx = fox.lastIndexOf("fox");
// alert(fx);

//STEP 6
// let fName = prompt("What is your first name?");
// let fox = "The quick brown fox jumps over the lazy dog";
// let fx = fox.replace("the lazy dog", fName);
// alert(fx);

//STEP 7
// let fName = prompt("Enter a word");
// let fox = "The quick brown fox jumps over the lazy dog";
// let fx = fox.match(fName);
// alert(fox+"\nFound: "+fx);

//STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog";
// let s1 = old_string.search("the");
// let s2 = old_string.search("g");
// console.log(s1, s2);

// let new_string = old_string.slice(31, 43);
// alert(new_string.toUpperCase());

//STEP 9
// let dog = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
// alert(dog.toLowerCase().trim());

//STEP 10
let fox = "the quick brown fox jumps over the lazy dog";
alert(fox.charAt(0).toUpperCase()+ fox.slice(1));