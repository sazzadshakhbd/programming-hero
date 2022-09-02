// https://openlibrary.org/developers/api
// http://openlibrary.org/search.json?q=the+lord+of+the+rings
document.getElementById('error-message').style.display = 'none';
document.getElementById('loading-spinner').style.display = 'none';
const searchBook = () => {
    const searchField = document.getElementById('input-field');
    const searchValue = searchField.value;
    searchField.value = '';
    if (searchValue === '') {
        document.getElementById('error-message').style.display = 'block';
    } else {
        document.getElementById('loading-spinner').style.display = 'block';
        // console.log(searchValue);
        fetch(`http://openlibrary.org/search.json?q=${searchValue}`)
            .then(res => res.json())
            .then(data => displaySearhcBooks(data))
    }

}

const displaySearhcBooks = (books) => {
    document.getElementById('error-message').style.display = 'none';
    document.getElementById('loading-spinner').style.display = 'none';
    document.getElementById('heading').style.display = 'none';
    // console.log(books)
    const resultContianer = document.getElementById('search-result');
    resultContianer.textContent = '';
    books.docs.slice(0, 3).forEach(singleBook => {
        const bookCard = document.createElement('div');
        const { author_name, title, publish_date, cover_i, author_key } = singleBook
        bookCard.classList.add('col');
        bookCard.innerHTML = `
        <div class="card shadow-lg">
            <div class="">
                <img src="https://covers.openlibrary.org/b/id/${cover_i}-M.jpg" alt="..." class="card-img-top w-full">
            </div>
            <div class="card-body">
                <h5 class="card-title">Book Title: <span class="text-info">${title}</span></h5>
                <p class="card-text">Author: <span class="text-success">${author_name[0]}</span></p>
                <p class="card-text">Publish date: <span class="text-muted">${publish_date[0]}</span></p>
            </div>
            <div class="card-footer">
                <button class="btn btn-outline btn-outline-success" onclick="loadAuthorDetail('${author_key[0]}')">Author Detail</button>
            </div>
        </div>
        `;
        resultContianer.appendChild(bookCard);
    })
}

const loadAuthorDetail = (authid) => {
    // console.log(authid);
    fetch(`https://openlibrary.org/authors/${authid}.json`)
        .then(res => res.json())
        .then(data => displayAuthorDetails(data))
}
const displayAuthorDetails = (author) => {
    // console.log(author);
    window.scrollTo(0, 40);
    const detailContainer = document.getElementById('author-detail');
    const { name, birth_date } = author
    detailContainer.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">Author Name: <span class="text-info">${name}</span></h5>
            <p class="card-text">Author DOB: <span class="text-success">${birth_date ? birth_date : 'N/A'}</span></p>
        </div>
    `
}