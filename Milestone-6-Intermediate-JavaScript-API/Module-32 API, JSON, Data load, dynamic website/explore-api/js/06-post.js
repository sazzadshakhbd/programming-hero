function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayData(data))
}
function displayData(data) {
    const postContainer = document.getElementById('post-container');
    for (post of data) {
        console.log(post);
        const div = document.createElement('div');
        div.classList.add("bg-indigo");
        div.innerHTML = `
            <h4>User: ${post.userId} </h4>
            <h5>Post: ${post.title} </h5>
            <p>Post Description ${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}
loadPost()