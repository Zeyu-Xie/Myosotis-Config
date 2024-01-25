// ==UserScript==
// @name         ChatGPT Auto Generating
// @namespace    https://github.com/Zeyu-Xie/Acan-Scripts
// @version      1.0
// @description  Automatically clicks the "Continue generating" button on ChatGPT pages to display complete answers continuously.
// @author       Acan
// @match        https://chat.openai.com/*
// @grant        none
// ==/UserScript==

console.log("Welcome to ChatGPT Auto Generating.")
console.log("We will try clicking the 'Continue generating' button for every 10 seconds.")

let n = 0;

setInterval(() => {
    let m = 0
    n++;
    const buttonList = document.querySelectorAll('button');
    buttonList.forEach(function (button) {
        if (button.textContent.includes('Continue generating')) {
            button.click()
            m++;
        }
    })
    console.log(`Clicking for ${n} rounds, this round we clicked ${m} buttons.`)
}, 10000)
