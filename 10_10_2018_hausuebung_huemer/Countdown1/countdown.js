let setCountdown = function (counter)
{
    console.log(counter);

    let timer = setInterval(() => {
        console.log(--counter)
    }, 1000);

    setTimeout(() => {
        clearInterval(timer)
    }, counter * 1000 + 100);
};

module.exports = setCountdown;