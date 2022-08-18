// Event Listener
document.getElementById('btn-yes').addEventListener('click', function () {
    optimizeWay('message');
})

// Event Handaler
function offCourse() {
    optimizeWay('message');
}

function optimizeWay(id) {
    document.getElementById(id).innerText = 'Yes, I love you 💘';
}