var arr=[1,2,3,4,5];
//reversing array
var revarr=[];
while(arr.length!=0){
    var ele=arr.shift();
    revarr.unshift(ele);
}
console.log(revarr);