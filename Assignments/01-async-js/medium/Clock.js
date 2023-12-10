"use strict";

// Solution with setInterval

// /*
const clock = () => {
    let date24 = new Date();
    let date12 = new Date().toLocaleTimeString();
    console.log(`${date24.getHours()}:${date24.getMinutes()}:${date24.getSeconds()}`, date12);
}
setInterval(clock, 1000)
// */

// Solution without setInterval


// const clock = () => {
//     let date = new Date();
//     console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }