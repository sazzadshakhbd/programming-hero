// ClassName

document.getElementById('changeStyle').addEventListener('click', function () {
    const friendClassName = document.getElementsByClassName('friend-name');
    for (classNames of friendClassName) {
        classNames.style.color = 'yellow';
        classNames.style.textTransform = 'uppercase';
    }
});

// Id

document.getElementById('changeBg').addEventListener('click', function () {
    const chnageBg = document.getElementById('bgChange');
    chnageBg.style.backgroundColor = 'tomato';
    chnageBg.style.color = 'white';
    chnageBg.style.padding = '10px';
})


// Create Element
document.getElementById('createElement').addEventListener('click', function () {
    const mainSection = document.getElementById('main-section');
    const div = document.createElement('div');
    div.classList.add('friend');
    div.innerHTML = `
    <h3 class="friend-name">firend-6</h3>
    <p>Quo earum quis nulla ipsum?</p>
    `
    mainSection.appendChild(div);
})

