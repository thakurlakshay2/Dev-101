arr=[1,2,3,4,5,6];


function sumof2(x,y){
    return x+y;
}

const narr=arr.reduce(sumof2);

console.log(arr);
console.log(narr);