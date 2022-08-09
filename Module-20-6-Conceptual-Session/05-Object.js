// How to decleare a object?
const car = {
    brand: 'tesla',
    model: [3, 5, 8, 4],
    weight: '980kg',
    seating: '5 Adults',
    stop() {
        return 'Car is stopped';
    }
}

// How to decleare a object properties using dot notation?
console.log(car.brand);

// How to decleare a object properties using bracket notation?
console.log(car['seating']);

// How to set a new value on object ?
car.brand = 'jojo';
console.log(car);