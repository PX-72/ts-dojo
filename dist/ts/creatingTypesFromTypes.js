"use strict";
/*
Generics - Types which take parameters
Keyof Type Operator - Using the keyof operator to create new types
Typeof Type Operator - Using the typeof operator to create new types
Indexed Access Types - Using Type['a'] syntax to access a subset of a type
Conditional Types - Types which act like if statements in the type system
Mapped Types - Creating types by mapping each property in an existing type
Template Literal Types - Mapped types which change properties via template literal strings
*/
// Extract types
const obj = {
    name: 'Grok',
    species: 'Dirigible Voluptuous',
    address: {
        street: 'Space Street',
        number: 324,
        town: 'nebula3'
    }
};
const fn = () => {
    const a = '';
    const b = 3;
    return { a, b };
};
