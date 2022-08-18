// Event Listener
document.getElementById('btn-yes').addEventListener('click', function () {
    const messageText = document.getElementById('message');
    messageText.innerText = 'Yes, I love you 💟 ';
})

// Event Handaler
function offCourse() {
    document.getElementById('message').innerText = 'Yes, I love you 💘 ';
}