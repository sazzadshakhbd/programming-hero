function mileToKilometer(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}
const rahimWalk = 12;
const rahimComplete = mileToKilometer(rahimWalk);
console.log(rahimComplete);
