/**
 * Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
 * 
 * Try running it for
 * 1. Sum from 1-100
 * 2. Sum from 1-100000
 * 3. Sum from 1-1000000000
 * 
 * Hint - use Date class exposed in JS
 * 
 * There is no automated test for this one, this is more for you to understand time goes up as computation goes up
 */

function calculateTime(n) {
    // Store the current timestamp in milliseconds
    const startTime = Date.now();

    // Initialize variable to store the sum
    let sum = 0;

    // Loop through each number from 1 to n
    for (let i = 0; i <= n; i++) {
        // Add the current number to the sum
        sum += i;
    }

    // Calculate the elapsed time by subtracting the start timestamp from the current timestamp
    const elapsedTime = Date.now() - startTime;

    // Return the elapsed time in seconds
    return elapsedTime / 1000;
}

console.log(calculateTime(10000)); // Expected output: ~0.01s
console.log(calculateTime(100000)); // Expected output: ~0.11s
console.log(calculateTime(1000000000)); // Expected output: ~11574.44s (around 32 hours)