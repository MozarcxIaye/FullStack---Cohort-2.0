"use strict";

/* 
    * * Calculating the time it takes between a setTimeout call and the inner function actually running it
    *   setTimeout: This method calls a function or evaluates an expression after a specified number of milliseconds
    *   Date.now(): This method returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC
*/

let current = Date.now(); // Record the current time in milliseconds
console.log(current); // Print the current time in the console

setTimeout(() => { // Schedule the inner function to be executed after 1000 milliseconds (1 second)
    console.log(`${Date.now() - current} milliseconds`); // Calculate the elapsed time and print it in the console
}, 1000)