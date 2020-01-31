var photos = document.querySelector('#photos');
var info = document.querySelector('#info');

function takePhotos() {
    console.log('entra');
    let request = new XMLHttpRequest();
    request.open('GET', 'https://picsum.photos/v2/list?page=2&limit=100');
    request.responseType = 'json';
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            const response = request.response;
            const arrayPhotos = response.download_url;
            for (let i = 10; i > 0; i--) {
                let photo = document.createElement('img');
                photos.appendChild(photo);
                console.log(response[i].download_url);
                photo.setAttribute("src", response[i].download_url);
            }
        }
    };
    request.send();
}