var arr1=[1,2,3];
var arr2=[100,2,1,10];

var length=arr1.length;
for(var i=0;i<length;i++){
    if(arr2.includes(arr1[i])){

    }
    else{
        arr2.push(arr1[i]);
    }
}
console.log(arr2);