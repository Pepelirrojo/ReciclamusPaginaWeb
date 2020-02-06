var photos = document.querySelector('#photos');
var info = document.querySelector('#info');
var content1 = document.querySelector('#content1');
var content2 = document.querySelector('#content2');
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
let request = new XMLHttpRequest();
request.open('GET', 'https://picsum.photos/v2/list?page=2&limit=100');
request.responseType = 'json';
var j = 12;

function takePhotos() {
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            const response = request.response;
            for (let i = 0; i < 12; i++) {
                let photo = document.createElement('img');
                photos.appendChild(photo);
                console.log(response[i].download_url);
                photo.setAttribute("src", response[i].download_url);
            }
        }
    };
    request.send();
}

function showMeetUs() {
    content2.innerHTML = "";
    var text1 = document.createElement('p');
    content1.appendChild(text1);
    text1.setAttribute('id', 'text1');
    content1.style.transition = '1s';
    content1.style.background = '#4cba4d';
    text1.innerHTML = "Somos una pequeña empresa que se dedica a la restauración y deccoración de muebles antiguos.";
    btn1.disabled = true;
    btn2.disabled = false;

}

function showWhereAre() {
    content1.innerHTML = "";
    var text2 = document.createElement('p');
    content2.appendChild(text2);
    text2.setAttribute('id', 'text2');
    content2.style.background = '#b27bb3';
    content2.style.transition = '1s';
    text2.innerHTML = "Somos una pequeña empresa que se dedica a la restauración y deccoración de muebles antiguos.";
    btn2.disabled = true;
    btn1.disabled = false;
}

function next() {
    const responseAux = request.response;
    let photoAux = document.querySelectorAll('img');
    for (let i = 0; i < i + 12; i++
    ) {
        console.log(photoAux);
        photoAux[i].src = responseAux[i + j].download_url;
    }
    j += 12;
}