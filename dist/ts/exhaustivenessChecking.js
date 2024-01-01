"use strict";
const getArea = (shape) => {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "triangle":
            return (shape.x * shape.y) / 2;
        case "square":
            return shape.x * shape.x;
        default: // shape is never
            assertNever(shape);
            return null;
    }
};
const getArea2 = (shape) => {
    let x;
    switch (shape.kind) {
        case "circle":
            x = Math.PI * shape.radius * shape.radius;
            break;
        case "triangle":
            x = (shape.x * shape.y) / 2;
            break;
        case "square":
            x = shape.x * shape.x;
            break;
        case "rectangle":
            x = shape.x * shape.y;
            break;
    }
    return x;
};
/*
One technique to ensure that you handled all possible cases is to create a
helper function that asserts that all options are exhausted.
It should ensure that the only values possible are no values.
 */
const assertNever = (value) => {
    throw Error("Not possible");
};
// OR
const getArea2 = (shape) => {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "triangle":
            return (shape.x * shape.y) / 2;
        case "square":
            return shape.x * shape.x;
        case "rectangle":
            return shape.x * shape.y;
        default: // shape is never
            let _exhaustiveCheck;
            _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
};
