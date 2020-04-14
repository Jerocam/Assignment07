/*eslint-env browser*/

"use strict";

//STEP 1
// let name = prompt("What is your name?");
// while(name==""){name = prompt("Please, enter your name?");}
// let x = name.length;
// alert("The Length of " +name+": "+x);

//STEP 2
// let name = prompt("What is your first name?");
// while(name==""){name = prompt("Please, enter your name?");}
// let numb = prompt("Enter a number for the letter of "+name);
// while(name==""){name = prompt("Please, enter your name?");}
// let findL = name.charAt(numb);
// alert("The letter of name: "+findL);

//STEP 3
// let fName = prompt("What is your first name?");
// while(fName==""){fName = prompt("Please, enter your first name?");}
// let lName = prompt("What is your last name?");
// while(lName==""){lName = prompt("Please, enter your last name?");}
// let bothN = fName.concat(" ",lName);
// alert("The full name: "+bothN);

//STEP 4
// let fox = "The quick brown fox jumps over the lazy dog";
// let fx = fox.indexOf("fox");
// alert(fox+"\n\"fox\" - position: "+fx);

//STEP 5
// let fox = "The quick brown fox jumps over the lazy fox";
// let fx = fox.lastIndexOf("fox");
// alert(fox+"\nLast \"fox\" - position: "+fx);

//STEP 6
// let name = prompt("What is your first name?");
// while(name==""){name = prompt("Please, enter your name?");}
// let fox = "The quick brown fox jumps over the lazy dog";
// let fx = fox.replace("the lazy dog", name);
// alert(fx);

//STEP 7
// let fox = "The quick brown fox jumps over the lazy dog";
// let word = prompt(fox+"\nEnter a word to find this sentence");
// while(word==""){word = prompt(fox+"\nPlease, enter a word to find it");}

// while(!fox.match(word)){
//     alert("Not found!");
//     word = prompt(fox+"\nTry again and enter a word to find it");
// }

// alert(word+" - yes found!");


//STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog";
// let w1 = old_string.search("the"); //IT HELPS ME TO FIND EXACT POSITION
// let w2 = old_string.search("g");   //IT HELPS ME TO FIND EXACT POSITION
// console.log(w1, w2);
// let new_string = old_string.slice(31, 43);
// alert(new_string.toUpperCase());

//STEP 9
// let dog = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
// alert(dog.toLowerCase().trim());

//STEP 10
// let fox = "the quick brown fox jumps over the lazy dog";
// alert(fox.charAt(0).toUpperCase()+ fox.slice(1));