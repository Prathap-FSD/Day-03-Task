let obj1 = { name: 'Person 1', age: 5}
let obj2 = { age: 5, name: 'Person 1'}

let obj1Keys = Object.keys(obj1)
let obj2Keys = Object.keys(obj2)

let flag= true;

if(obj1Keys.length == obj2Keys.length){
    for(let key in obj1){
        if(obj1[key] != obj2[key]){
            flag = false
        }
    }
}else{
    flag = false;
}
if(flag){
    console.log('Object Keys & Values are Same');
}else{
    console.log('Object Keys & Values are NOT Same');
}
