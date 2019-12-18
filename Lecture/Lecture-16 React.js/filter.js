const arr=[1,2,3,4,5,6];

function isOdd(i){
    return i%2;
}

const oddarr=arr.filter(isOdd);

console.log(arr);
console.log(oddarr);