/* How to decleare all h2 element */
const tagList = document.getElementsByTagName('h2');
const taglistIndexing = document.getElementsByTagName('h2')[0];
// console.log(tagList);
// console.log(taglistIndexing.innerText);

for (const h2 of tagList) {
    // console.log(h2);
    // console.log(h2.innerText);
}

for (let i = 0; i < tagList.length; i++) {
    const element = tagList[i];
    // console.log(element);
    // console.log(element.innerText);
}