/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


const waitOneSecond = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("first promise");
        }, 1000);
    })

}

const waitTwoSecond = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("second promise");
        }, 2000);
    })

}

const waitThreeSecond = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("third promise");
        }, 3000);
    })

}
// let date = new Date();
let ms = new Date().getMilliseconds();
function calculateTime() {
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(resolve => {
        console.log(resolve);
        // console.log(`the Promise took about ${new Date().getMilliseconds() - ms} ms`)
    })
    let newms = new Date().getMilliseconds();
    console.log(newms - ms);
}

// console.log(ms);
calculateTime();




