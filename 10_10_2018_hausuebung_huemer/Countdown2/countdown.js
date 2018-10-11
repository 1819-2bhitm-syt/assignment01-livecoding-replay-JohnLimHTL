let decrementsPerSecond = 1;

let setCountdown = function(counter)
{
    console.log(counter);
    let timer = setInterval(() => {
        console.log(--counter)
    }, 1000 / decrementsPerSecond);
    setTimeout(() => {
        clearInterval(timer)
    }, counter * 1000 / decrementsPerSecond + 100);
};

module.exports.setCountdown = setCountdown;

let setDecrementsPerSecond = function(decrements){
    decrementsPerSecond = decrements;
};

module.exports.setDecrementsPerSecond = setDecrementsPerSecond;