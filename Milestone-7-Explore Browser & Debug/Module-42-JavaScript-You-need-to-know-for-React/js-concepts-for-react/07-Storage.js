const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;


    // 
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';


    localStorage.setItem("friendsAge", [34, 23, 45]);
    localStorage.setItem("friends", JSON.stringify([10, 20, 30]));
    const pen = { price: 10, color: 'Black' }
    localStorage.setItem('Pen', pen);
    localStorage.setItem('Pen', JSON.stringify(pen));

    const storePen = localStorage.getItem('Pen');
    const penObje = JSON.parse(storePen);
    // console.log(penObje);

    pen.price = 50;
    localStorage.setItem('Pen', JSON.stringify(pen));

}

// console.log Practice

