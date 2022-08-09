/*
    Problem-1:

    Write a function that will take a year as  a input parameter and will check the year is leap year or not.
*/

function isLeapYear(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        return 'Leap Year'
    } else {
        return 'Not Leap Year';
    }
}
var result = isLeapYear(2024);
console.log(result);