/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

let promise = new Promise((resolve) => {
    resolve();
});

promise.then(() => {
    setTimeout(() => {
        console.log(`the promise resolves after 1 seconds`);
    }, 1000);
}).then(() => {
    setTimeout(() => {
        console.log(`the promise resolves after 1 seconds`);
    }, 2000);
}).then(() => {
    setTimeout(() => {
        console.log(`the promise resolves after 1 seconds`);
    }, 3000);
}).catch(() => {
    console.log("Error")
})
