function leapYear(year) {
    const reaminder = year % 4;
    if (reaminder === 0) {
        console.log('Your year is leap year', year);
    } else {
        console.log('Your is not leap year', year)
    }
}
leapYear(1976);
// leapYear(2022);
// leapYear(3075);
// leapYear(1960);
// leapYear(1933);

function leapYear2(year) {
    const reaminder2 = year % 4;
    if (reaminder2 === 0) {
        return true
    } else {
        return false
    }
}
const myLeapYear = leapYear2(1933);
console.log(myLeapYear);