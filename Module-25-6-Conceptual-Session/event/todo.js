let count = 0;
document.getElementById('input-btn').addEventListener('click', function () {
    count++;
    const inputValue = document.getElementById('input-value').value;

    const mainContaier = document.getElementById('content-container');
    const tableContainer = document.createElement('tr');
    tableContainer.innerHTML = `
    <th scope="row">${count}</th>
    <td>${inputValue}</td>
    <td>
        <button class="btn btn-danger delete-btn">Delete</button>
        <button class="btn btn-info edit-btn">Edit</button>
    </td>
    `

    mainContaier.appendChild(tableContainer);
    document.getElementById('input-value').value = '';

    const deleteBtn = document.getElementsByClassName('delete-btn');
    for (let allButton of deleteBtn) {
        allButton.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.display = 'none'
        })
    }
    const editBtn = document.getElementsByClassName('edit-btn');
    for (allEdit of editBtn) {
        allEdit.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.textDecoration = 'line-through'
        })
    }
    const cleareBtn = document.getElementById('clear-btn');
    cleareBtn.addEventListener('click', function () {
        tableContainer.style.display = 'none';
    })

})


