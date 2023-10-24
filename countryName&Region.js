let XMLHttpRequest = require('xhr2')

let xhr = new XMLHttpRequest();

xhr.open("GET", 'https://restcountries.com/v3.1/all');

xhr.onload = function() {
    let datas = JSON.parse(xhr.responseText)

    for(let data of datas){
    
        console.log('Country Name : '+ data.name.common+',',  'Region : '+ data.region+',',  'Subregion : '+data.subregion)
    }
}
xhr.send();