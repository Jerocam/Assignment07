/*eslint-env browser*/

"use strict";

//STEP 1
//FUNCTION TO ADD NEW ARRAYS FROM EACH LETTERS AND SORT IT
// function sorting(txt){
//     let getText = inpWords(txt);
//     let x = getText.split("");
//     let arr = [];

//     for(let i =0; i<x.length; i++){
//         if(x[i] !== x[i-1]){
//             arr.push(x[i]);
//         }
//     }

//     let z = arr.sort().toString();
//     console.log("The sorted word: " +z.replace(/,/g, ""));
// }

//FUNCTION TO ENTER A WORD WITHOUT NUMBERS OR SYMBOLS INCLUDE SPACE
// function inpWords(){

//     let nWords = prompt("Enter a word");
//     while (!nWords.match(/^[a-zA-Z]*$/g)) {
//         nWords = prompt("Please, insert only a word without space to proceed!");
//     }
//     return nWords;
// }

// sorting();  // CALL THE FUNCTION sorting

//STEP 2
//FUNCTION TO ADD NEW ARRAYS ON EACH WORD AND CAPITALIZE ON FIRST LETTER OF EACH WORD
// function Upp(txt){
//     let getText = inpWords(txt);
//     let x = getText.split(" ");
//     let arr = [];

//     for(let i=0; i<x.length; i++){
//         arr.push(x[i].charAt(0).toUpperCase()+x[i].slice(1));
//     }

//     return arr.join(" ");
// }

//FUNCTION TO ENTER ONLY A-Z
// function inpWords(){
//     let nWords = prompt("Enter a phrase");
//     while (!nWords.match(/[a-zA-Z]/g)) {
//         nWords = prompt("Please, insert a phrase to proceed!");
//     }
//     return nWords;
// }

// console.log(Upp());  //CALL THE FUNCTION upp

//STEP 3
//FUNCTION TO COUNT VOWELS
// function Upp(txt){
//     let getText = inpWords(txt);
//     let vowels = ["a","e","i","o","u"];
//     let count = 0;

//     for(let i of getText.toLowerCase()){
//         if(vowels.includes(i))
//         count++;
//     }
//     return ("Vowels counted: "+count);
// }

// //FUNCTION FOR A PHRASE THAT SHOULD NOT INCLUDE NUMBERS AND SYMBOLS 
// function inpWords(){
//     let nWords = prompt("Enter a phrase");
//     while (!nWords.match(/[a-zA-Z]/g)) {
//         nWords = prompt("Please, insert a phrase to proceed!");
//         }
//     return nWords;
// }

// console.log(Upp()); //CALL FUNCTION UPP

//STEP 4
//FUNCTION RANDOM LETTERS AND NUMBERS
// function randLetters(leng){
//     let rand = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     + "abcdefghijklmnopqrstuvxyz"+ "0123456789";
//     let t = rand.length;
//     let result = '';
    
//     for(let i=0;i<leng;i++){
//         result+= rand.charAt(Math.floor(Math.random()*t)); //RANDOMS
//     }
//     return "The random characters are "+result;
// }

// console.log(randLetters(8)); //CALL THE FUNCION randLetters AND PASS VALUE 8 FOR LENGTH

//STEP 5
//FUNCTION ARRAY COUNTRIES
function countries(){
    let country = ["Argentina", "Paraguay", "Chile", 
    "Saudi Arabia", "Mexico", "El Salvador", "Ecuador", "Democratic Republic of Congo",
    "The United Kingdom of Great Britain and Northern Ireland"];
    return country;
}

//FUNCTION TO FIND A LONGEST LENGTH AS COUNTRY NAME
function longest(c){
    
    let findLong = countries(c).reduce((longest, word)=>{ 
        if(longest.length > word.length){
            return longest;
        }
        else{
            return word;
        }
    });      
    return findLong;
}

console.log("The longest country name is " +longest());  //CALL THE FUNCION longest