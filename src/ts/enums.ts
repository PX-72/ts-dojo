
// USE CONST TO AVOID EXTRA JS CODE
const enum DirectionType {
    Up,
    Down,
    Left,
    Right,
}

// or use as const context and union type
const Direction = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
} as const;

type Direction = (typeof Direction)[keyof typeof Direction];