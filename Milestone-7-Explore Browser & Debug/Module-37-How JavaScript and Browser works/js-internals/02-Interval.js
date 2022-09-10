console.log('First')
console.log('Second')
// setTimeout(() => {
//     console.log('Third')
// })


// X++ vs ++x / i++ vs ++i
let secoend = 0;
const intervalId = setInterval(() => {
    console.log(++secoend);
    if (secoend === 10) {
        clearInterval(intervalId);
    }
}, 1000)
console.log('Fourth')
console.log('Fifth')