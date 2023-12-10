"use strict";
/**
let count = 0;
const counter = () => {
    count++
    console.log(count)
}
// setInterval(counter, 1000);
let i = 0;
while (i <= 30) {
    setTimeout(counter, i * 1000);
}
 */


let count = 0;
const counter = () => {
    count++;
    console.log(count);
}
// setInterval(counter, 1000);
let i = 0;
setTimeout(() => {
    counter();
    setTimeout(() => {
        counter();
        setTimeout(() => {
            counter();
            setTimeout(() => {
                counter();
                setTimeout(() => {
                    counter();
                    setTimeout(() => {
                        counter();
                        setTimeout(() => {
                            counter();
                            setTimeout(() => {
                                counter();
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)