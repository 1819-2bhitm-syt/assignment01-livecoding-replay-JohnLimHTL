// Tick //
let logTick = true;
let counter = 10;
console.log(counter);

// Tick Tack //
let timer = setInterval(() => {
    counter--;
    console.log(counter);
    logTick = !logTick;
}, 1000);

// Timer //
setTimeout(() => {
    clearInterval(timer);
}, counter * 1000 + 100);

