// The simplest way to create an object is using an object literal
const circle = {
    radius: 1,
    draw: function () {}
};

// To create multiple objects with the same structure and behavior (methods),
// use a factory or a constructor.

// Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {}
    }
}

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {}
}
