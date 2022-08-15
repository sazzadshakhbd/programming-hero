// Where to add ?
const placesList = document.getElementById('places-list');

// What to be added ?
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

// Add the child

placesList.appendChild(li);

// Where to add ?
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer)

// What to be added ?
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Heading Title';

// Add the child
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'birayni'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'theme'
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);


// Set innerhtml directly

const sectiondDress = document.createElement('section');
sectiondDress.innerHTML = `
<h1>Heading 2</h1>
<ul>
    <li>list-1</li>
    <li>list-2</li>
    <li>list-3</li>
    <li>list-4</li>
    <li>list-5</li>
</ul>
`
mainContainer.appendChild(sectiondDress);


