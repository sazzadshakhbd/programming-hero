// const element = document.querySelector('h2');
// const element = document.querySelector('.test');
// const element = document.querySelector('#heading');
const element = document.querySelectorAll('h2');
// const element = document.querySelectorAll('.test')[1];
// const element = document.querySelectorAll('#heading');
// console.log(element);
// console.log(element.innerText);

for (singleelement of element) {
    // console.log(singleelement);
    console.log(singleelement.innerText);
}