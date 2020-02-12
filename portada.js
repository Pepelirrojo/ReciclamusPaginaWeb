var photos = document.querySelector('#photos');
var info = document.querySelector('#info');
var content1 = document.querySelector('#content1');
var content2 = document.querySelector('#content2');
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
let request = new XMLHttpRequest();
var btnN = document.querySelector('#btnN')
var btnP = document.querySelector('#btnP')
request.open('GET', 'https://picsum.photos/v2/list?page=2&limit=100');
request.responseType = 'json';
var j = 11;

function takePhotos() {
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            const response = request.response;
            for (let i = 0; i < 12; i++) {
                let photo = document.createElement('img');
                let divImgAux = document.createElement('div');
                divImgAux.setAttribute('class', 'fotos');
                photos.appendChild(divImgAux);
                divImgAux.appendChild(photo);
                photo.setAttribute("src", response[i].download_url);
                photo.onclick = function () {
                    photo.style.zoom = 80;
                }
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
    var text2 = document.createElement('iframe');
    text2.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24270.346316226587!2d-4.252589991288267!3d40.50195382872257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41a89d3dab4d99%3A0xc7af96853c089fc8!2s28294%20Robledo%20de%20Chavela%2C%20Madrid!5e0!3m2!1ses!2ses!4v1581277030407!5m2!1ses!2ses');
    console.log(text2);
    content2.appendChild(text2);
    text2.setAttribute('id', 'text2');
    content2.style.background = '#b27bb3';
    content2.style.transition = '1s';
    btn2.disabled = true;
    btn1.disabled = false;
}

function next() {
    const responseAux = request.response;
    let photoAux = document.querySelectorAll('img');
    if (j < 95) {
        for (let i = 0; i < 12; i++
        ) {
            photoAux[i].src = responseAux[i + j].download_url;
        }
        j += 12;
    }
    if (j >= 95) {
        j = 11;
    }
}

function previous() {
    const responseAux = request.response;
    let photoAux = document.querySelectorAll('img');
    if (j <= 11) {
        j = 96;
    }
    if (j !== 11) {
        for (let i = 0; i < 12; i++
        ) {
            photoAux[i].src = responseAux[j - i].download_url;
        }
        j -= 12;
        console.log(j);
    }
}
