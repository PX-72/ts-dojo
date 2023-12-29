// in operator
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal)
        return animal.swim();

    return animal.fly();
}

// typeof
function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}

// instanceof
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

// type predicate
function isFish(n: string | number): n is number {
    return (n as number).toFixed !== undefined;
}

// discriminated unions

type Rectangle3 = {
    x: number;
    y: number;
    kind: "rectangle";
};
type Shape3 = Circle | Triangle | Square | Rectangle;
// then check for kind