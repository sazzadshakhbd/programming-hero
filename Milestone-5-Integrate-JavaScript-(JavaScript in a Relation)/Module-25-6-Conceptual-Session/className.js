const allClassNames = document.getElementsByClassName('test');
// console.log(allClassNames);

for (testName of allClassNames) {
    // console.log(testName);
    // console.log(testName.innerText);
}

for (let i = 0; i < allClassNames.length; i++) {
    const element = allClassNames[i];
    // console.log(element);
    // console.log(element.innerText);
}