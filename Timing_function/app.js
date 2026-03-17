// Timing Functions:
// Timing functions in JavaScript are used when you want your code to run after a certain time or repeatedly at intervals.

// There are two type of timing function:

// setTimeout() – runs code once after a delay.
// setInterval() – runs code repeatedly at regular intervals. 

//Syntax:
// setTimeout(function, delay_in_milliseconds);

//setTimeout():

console.log("Start");

setTimeout(function() {
    console.log("This runs after 3 seconds!");
}, 3000);

console.log("End");

//setInterval():

let count = 1;

let intervalId = setInterval(function() {
    console.log("This runs every 2 seconds: " + count);
    count++;
}, 2000);
clearInterval(intervalId)// it clear the all the data