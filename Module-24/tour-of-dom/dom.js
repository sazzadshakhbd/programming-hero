const liItems = document.getElementsByTagName('li')
// console.log(liItem);

for (liItem of liItems) {
    //console.log(liItem);
    // console.log(liItem.innerText)
}

const allHeadingShows = document.getElementsByTagName('h1');
// console.log(allHeadingShows);

for (allHeadingShow of allHeadingShows) {
    // console.log(allHeadingShow);
    // console.log(allHeadingShow.innerText);
}

const importantPlaces = document.getElementsByClassName('important-places');
// console.log(importantPlaces);
for (importantPlace of importantPlaces) {
    // console.log(importantPlace);
    // console.log(importantPlace.innerText)
}

const changeText = document.getElementById('fruitsTitle');
changeText.innerText = 'Favourite Fruits Name';
// console.log(changeText);

const fruitsContainer = document.querySelectorAll('.fruits-container li');
for (const li of fruitsContainer) {
    console.log(li.innerText);
}