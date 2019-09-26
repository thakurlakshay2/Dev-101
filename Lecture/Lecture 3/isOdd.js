function isOdd(val){
    
   return val%2==0;
}

function includer(arr,fn){                     //or use arr.filter(isOdd) if is odd is giving return value as boolean
   var narr=[];
    for(var i=0;i<arr.length;i++){
        var ans=fn(arr[i]);
        if(!ans){
            narr.push(arr[i]);
        }
    }

    return narr;
}

var narr=includer([5,8,14,17,23,6,8],isOdd);

console.log("'''''''''''''''''''''''''''''''''''''''");
console.log(narr);