function doubleIt(value){
    return value*2;
}
function transformer(arr,fn){
    var narr=[];
    for(var i=0;i<arr.length;i++){
        
        narr.push(doubleIt(arr[i]))
    }

    console.log("New array is "+ narr);

}

transformer([1,2,3,4,5,6,7,8],doubleIt);