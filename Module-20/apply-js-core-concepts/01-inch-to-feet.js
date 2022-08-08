const myInch = 12;
const myFeet = myInch / 12;
console.log(myFeet);

const dadaInch = 144;
const dadafeet = dadaInch / 12;
console.log(dadafeet);

const dadeInch = 60;
const dadefeet = dadeInch / 12;
console.log(dadefeet);

// এখন আমরা ফাংশন ব্যাবহার করে এই একই কাজ আবার করব।

function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const rahimInches = 144;
const rashimFeet = inchToFeet(rahimInches);
console.log(rashimFeet);

const adibInches = 300;
const adibFeet = inchToFeet(adibInches);
console.log(adibFeet);
