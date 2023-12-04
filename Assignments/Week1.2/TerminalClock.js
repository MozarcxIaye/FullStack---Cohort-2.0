"use strict";

// Access the terminalClock element from the HTML
const terminalClock = document.querySelector(".terminalClock");

// Use setInterval to execute the code block every 1000 milliseconds (1 second)
setInterval(() => {
    // Create a new Date object
    const date = new Date();

    // Extract the current hour, minute, and second from the Date object
    const currHour = date.getHours();
    const currMin = date.getMinutes();
    const currSec = date.getSeconds();

    // Update the text content of the terminalClock element to display the current time
    terminalClock.textContent = `${currHour} : ${currMin} : ${currSec}`;

}, 1000)
