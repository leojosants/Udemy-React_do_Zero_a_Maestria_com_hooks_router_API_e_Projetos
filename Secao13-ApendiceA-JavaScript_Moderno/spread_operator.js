
const a1 = [1, 2, 3];
const a2 = [5, 6];
const a3 = [7, 8, 9];
const a4 = [0, ...a1, 4, ...a2, ...a3, 10];

console.log(a4);

const carName = { name: 'Gol' };
const carBrand = { brand: 'VW' };
const carInfo = { km: 1000, price: 49.000 };

const car = { ...carName, ...carBrand, ...carInfo }

console.log(car);