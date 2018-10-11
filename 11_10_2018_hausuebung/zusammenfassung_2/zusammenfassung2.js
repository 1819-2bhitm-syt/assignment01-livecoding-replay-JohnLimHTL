// Every object has a "constructor" property which returns the function
// that was used to construct or create that object.
const x = {};
x.constructor; // returns Object()

// In JavaScript, functions are objects. They have properties and methods.
Circle.name;
Circle.length;
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function
Circle.apply({}, [1]);

// Value types are copied by their value, reference types are copied by their reference.
// Value types ib JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array


// JavaScript objects are dynamic. you can add/remove properties:
circle.location = {};
circle['location'] = {};

delete  circle.location;