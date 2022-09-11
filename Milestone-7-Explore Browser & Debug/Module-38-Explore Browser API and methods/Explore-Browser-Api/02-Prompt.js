// alert("hello!");

const showAlert = () => {
    // alert('hello')
    const num = Math.random() * 10;
    console.log(num);
    if (num > 5) {
        // alert('Number is lower 5')
    }
    // alert('Ki khobr?')
}

const askSomething = () => {
    const dicision = confirm('Are you coming picnic?');
    // console.log(dicision);
    if (dicision === true) {
        alert('dosot 500 taka bkash kor')
    } else {
        console.log('DGM - Dure giye misti kha');
    }
}

const getUserInfo = () => {
    const name = prompt('Tell us your name');
    // console.log(name);
    if (!!name) {
        console.log('Welcome here', name)
    }
}