// Tick //
let logTick = true;

// Tick Tack //
let tickTack = function () {
    if(logTick) {
        console.log("tick");
    } else {
        console.log("tack");
    }

    logTick = !logTick;

};

// Timer //
let timer = setInterval(tickTack, 1000);

// Timer //
setTimeout(function () {
    clearInterval(timer);
    console.log("Guten Morgen");
}, 6100);

