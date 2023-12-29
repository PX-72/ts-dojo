/*
Generics - Types which take parameters
Keyof Type Operator - Using the keyof operator to create new types
Typeof Type Operator - Using the typeof operator to create new types
Indexed Access Types - Using Type['a'] syntax to access a subset of a type
Conditional Types - Types which act like if statements in the type system
Mapped Types - Creating types by mapping each property in an existing type
Template Literal Types - Mapped types which change properties via template literal strings
*/

// Object Literal Syntax
type JSONResponse = {
    /** In bytes */ // attached doc to type
    version: number;
    payloadSize: number;
    outOfStock?: boolean;
    update: (retryTimes: number) => void;
    // or update(retryTimes: number): void;
    (): JSONResponse; //Type is callable
    //[key: string]: number;
    new (s: string): JSONResponse; //Newable
    readonly body: string;
};

// Tuple type

type ATupleType = [
    location: string,
    timestamp: Date
];

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

// using typeof to extract type from object
type Alien = typeof obj;
type AlienAddress = Alien['address']; // look-up types
type AlienAddress2 = typeof obj.address;

type Point = {
    x: number,
    y: number
};

type X = Point['x'];
type PointKeys = keyof Point; // gives a union of string literals: x | y

const fn = () => {
    const a = '';
    const b = 3;
    return {a, b};
};
// extract type from function
type FnType = ReturnType<typeof fn>;

// mapped types
// loops through each property and converts them to something else (similar to array.map)
type ReadOnlyPoint = {
    readonly [Key in keyof Point]: Point[Key]
};

// generic version
type ReadOnlyType<T> = {
    readonly [Key in keyof T]: T[Key]
};