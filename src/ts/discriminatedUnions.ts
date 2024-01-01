
type MotorBike = {
    type: 'motorbike';
    fuel: 'petrol';
};

type Car = {
    type: 'car';
    doors: number;
    bootSize: number;
};

type Vehicle = {
    make: string;
    model: string;
    fuel: 'petrol' | 'diesel',
} & (Car | MotorBike);

const obj: Vehicle = {
    type: 'motorbike',
    fuel: 'petrol',
    make: 'honda',
    model: 'blah',
    //doors: 2  // <- ERROR!
};r