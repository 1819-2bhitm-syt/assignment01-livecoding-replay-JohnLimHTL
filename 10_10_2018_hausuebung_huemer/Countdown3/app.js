const countdown = require("./countdown");

let helloWorld = function(){
    console.log("Hallo Welt!")
};

countdown.setDecrementsPerSecond(3);

countdown.setCountdown(helloWorld, 10);

