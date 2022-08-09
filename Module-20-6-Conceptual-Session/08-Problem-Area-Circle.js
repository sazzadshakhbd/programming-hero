/*
    Problem-1:

    Write a function that will take a radius of a circle and will return the area of circle. [Hint: Area of circle = rr2]
*/

function areaOfCircle(r) {
    const pi = 3.1416;
    const area = pi * r * r;
    return area.toFixed(2);
}
console.log(areaOfCircle(7));