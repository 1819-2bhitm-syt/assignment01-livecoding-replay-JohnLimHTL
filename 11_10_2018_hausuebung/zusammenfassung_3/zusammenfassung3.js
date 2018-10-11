// To enumerate the members in an object:
for (let key in circle) console.log(key, circle[key]);

Object.keys(circle);

// To see if an object has a given property
if ('location' in circle);

// Abstraction means hiding the complexity/details and showing only the essentials.
// We can hide the details by using private members. Replace "this" with "let".

function Circle(radius) {
    // Public member
    this.radius = radius;

    // Private member
    let defaultLocation = {};
}

// To define a getter/setter, use Object.defineProperty():

Object.defineProperties(this, 'defaultLocation', {
    get: function() { return defaultLocation; },
    set: function(value) {defaultLocation = value; }
});