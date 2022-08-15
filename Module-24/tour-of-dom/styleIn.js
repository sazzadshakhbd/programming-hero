const allSections = document.querySelectorAll('section');
// console.log(allSections);

for (section of allSections) {
    // console.log(section)
    section.style.border = '2px solid white';
    section.style.marginBottom = '7px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'teal'
    section.style.color = 'white';
}

const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'red';

placesContainer.classList.add('p-5');
placesContainer.classList.remove('large-text')