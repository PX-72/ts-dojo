"use strict";
/*
assert as exact values is to use const context with an as const type assertion;
TypeScript locks the value in as literal type:
 */
const circle1 = {
    radius: 2,
    kind: "circle",
};
/*
If we apply const context to the entire object,
we also make sure that the values are read-only and won’t be changed:
 */
const circle2 = {
    radius: 2,
    kind: "circle",
};
/*
Const context type assertions are a very handy tool if we want to pin values to their
exact literal type and keep them that way. If there are a lot of object literals in
your code base that are not supposed to change but need to be consumed in various occasions, const context can help!
 */ 
