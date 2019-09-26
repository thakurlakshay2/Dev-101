function multiplier(val1,val2)
{
    return val1*val2;
}
function composer(arr,fn){   //or use arr.reduce(multiplier)
    var prod=arr[0];
    for(var i=1;i<arr.length;i++){
        prod=fn(prod,arr[i]);
    }

    return prod;
}
var arr=[1,2,3,4,5];
var ans=composer(arr,multiplier);
console.log(ans);