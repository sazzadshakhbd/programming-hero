
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

// How to decleare a onclick event using addEventListener [Option-1]
const makePinkButton = document.getElementById('makePink');
makePinkButton.addEventListener('click', makePinkFunction);

function makePinkFunction() {
    document.body.style.backgroundColor = 'pink'
}

// How to decleare a onclick event using addEventListener [Option-2]
const makeGreenButton = document.getElementById('makeGreen');
makeGreenButton.addEventListener('click', function makeGreenFunction() {
    document.body.style.backgroundColor = 'green';
});

// How to decleare a onclick event using addEventListener [Final]

document.getElementById('makeTeal').addEventListener('click', function () {
    document.body.style.backgroundColor = 'teal'
})
