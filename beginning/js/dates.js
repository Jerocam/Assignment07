/*eslint-env browser*/
"use strict";

//STEP 1
// let d = new Date().getDate();
// window.console.log("The date of today is "+d);

//STEP 2
// let d = new Date().getMonth();
// let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// window.console.log("Current month is "+months[d]);

//STEP 3
// let d = new Date().getDay()-1;

// if(d>=5 && d<=6){
//     window.console.log("You are on Weekend now! :)");
// }
// else{
//     window.console.log("You aren't on Weekend yet! :(");
// }


//STEP 4
// let d = new Date().getDay()-2;
// let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// window.console.log("Yesterday is " +days[d]);

//STEP 5
let d = new Date().getDay()-1;
let days = ["M", "T", "W", "T", "F", "S", "S"];
window.console.log(days[d]);