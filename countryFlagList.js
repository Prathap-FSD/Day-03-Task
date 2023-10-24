let XMLHttpRequest = require('xhr2')

let xhr = new XMLHttpRequest();

xhr.open("GET", 'https://restcountries.com/v3.1/all');

xhr.onload = function() {
    let details = JSON.parse(xhr.responseText)

    for(let data of details){
    
        console.log(data.flags.svg)
    }
}
xhr.send();