let hallo = function(who) {
    console.log("Hallo " + who());
};

let getName = function() {
    return "Welt";
};

hallo(getName);