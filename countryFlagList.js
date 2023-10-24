let XMLHttpRequest = require('xhr2')

let xhr = new XMLHttpRequest();

xhr.open("GET", 'https://restcountries.com/v3.1/all');

xhr.onload = function() {
    let datas = JSON.parse(xhr.responseText)

    for(let data of datas){
    
        console.log(data.flags.svg)
    }
}
xhr.send();