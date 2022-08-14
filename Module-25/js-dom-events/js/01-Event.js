
//  How to decleare a onclick event functionally
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// How to decleare a onclick event using id
const makeBlueButton = document.getElementById('makeBlue');
makeBlueButton.onclick = makeButtonFunction;

function makeButtonFunction() {
    document.body.style.backgroundColor = 'blue';
}

// How to decleare a onclick event using id [Option-2]
const makePurpleButton = document.getElementById('makePurple');
makePurpleButton.onclick = function makePurpleFunction() {
    document.body.style.backgroundColor = 'purple';
}