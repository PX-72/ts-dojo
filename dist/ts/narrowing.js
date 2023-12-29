"use strict";
function move(animal) {
    if ("swim" in animal)
        return animal.swim();
    return animal.fly();
}
// typeof
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
// instanceof
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// type predicate
function isFish(n) {
    return n.toFixed !== undefined;
}
// then check for kind
