"use strict";

/* 
    * This code creates a counter in JavaScript.
    * The counter counts down from 30 to 0.
    * It utilizes the setInterval function to execute the counter code repeatedly.
    * The counter is displayed in the console.
*/

let count = 30;
let counter = setInterval(() => {
    if (count >= 0) {
        console.log(count--); // Decrement the count and log it in the console
    }
}, 100);
