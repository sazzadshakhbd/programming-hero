const images = [
    'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg'
]
let imgIndex = 0;
const img = document.getElementById('carousel-img');
setInterval(() => {
    // console.log('helo')
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgLink = images[imgIndex];

    img.setAttribute('src', imgLink);
    // console.log(imgLink)
    imgIndex++;
}, 2000)