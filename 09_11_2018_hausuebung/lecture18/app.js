// let logThis = function () {
//     console.log(this, a, b);
// };
//
// let logThisBound = logThis.bind({
//     vorname: "Max"
// });
//
// logThisBound();

let logMessage = function (a, b) {
    console.log(this, a, b);
};

// logMessage.call({
//     vorname: "Max"
//
// }, 3, 4)

logMessage.apply({
    vorname: "Max"
}, [3, 4]);