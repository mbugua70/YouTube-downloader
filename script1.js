var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');
convertBtn.addEventListener('click', () => {
    sendURL(URLinput.value);
});

function sendURL(URL) {
    fetch('http://localhost:4000/check?videoID=${URL}', {
        method: 'GET'
    }).then(res => res.json())
        .then(json => console.log(json));
}