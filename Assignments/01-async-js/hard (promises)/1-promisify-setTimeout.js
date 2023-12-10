/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`the promise resolves after ${n} seconds`);
        }, n);
    })
}

async function result() {
    const res = await wait(2000);
    console.log(res);
}

result();