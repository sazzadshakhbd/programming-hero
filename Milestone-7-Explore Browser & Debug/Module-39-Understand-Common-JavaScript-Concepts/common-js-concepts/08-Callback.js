function greetings(greetingHandeler, name) {
    greetingHandeler(name)
}
// const name = 'sazzad'
// const number = 10
// const numbers = [10, 20, 30]
// const laptop = { price: 45000, brand: 'Lenovo', memory: '8gb' }
function greetingHandeler(name) {
    console.log('Good Morning', name)
}

function greetEventing(name) {
    console.log('Good Evening', name)
}

function greedNight(name) {
    console.log('Good Night', name)
}


// greetings(name);
// greetings(number);
// greetings(numbers);
// greetings(laptop);
greetings(greetingHandeler, 'Sazzad');
greetings(greetingHandeler, 'Sobuz');
greetings(greetingHandeler, 'Adib');
greetings(greetEventing, 'Adiba');
greetings(greetEventing, 'Marjia');
greetings(greedNight, 'Maa');


function submitHandeler() {
    console.log('submit')
}
document.getElementById('btn-submit').addEventListener('click', submitHandeler)


