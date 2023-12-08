'use strict';

const seconds = document.querySelector(".seconds .number"),
    minutes = document.querySelector(".minutes .number"),
    hours = document.querySelector(".hours .number"),
    days = document.querySelector(".days .number");

const timeContainer = document.querySelector(".time-container");
const startingMsg = document.querySelectorAll(".ball");


let secValue = 3,
    minValue = 1,
    hourValue = 4,
    dayValue = 2;


const timeRunning = setInterval(() => {
    secValue--;

    let endCondition = (dayValue == 0 && hourValue == 0 && minValue == 0 && secValue == 0);
    if (secValue === 0) {
        if (minValue == 0) {
            secValue = 0;
        } else {
            secValue = 60;
            minValue--;
        }
    }
    if (minValue === 0) {
        if (hourValue == 0) {
            minValue = 0;
        } else {
            minValue = 60;
            hourValue--;
        }
    }
    if (hourValue === 0) {
        if (dayValue == 0) {
            hourValue = 0
        } else {
            hourValue = 24;
            dayValue--;
        }

    }
    if (endCondition) {
        clearInterval(timeRunning);
        console.log(endCondition)
        timeContainer.classList.add("hidden");
        startingMsg.forEach((startingBall) => {
            startingBall.classList.remove("hidden");
        })



    }


    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
    minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
    hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
    days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000);