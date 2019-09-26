//make your copy of original variables
var y=2, z=3;
console.log(y+" "+z);
function change(x){
    y=y*x;
    z=y*x;
    return x+y;
}

console.log("After using function "+change(5));
console.log("change in values "+y+ " "+z);
console.log("After using function "+change(5));
console.log("change in values "+y+ " "+z);


//new way make copies of y and z
var y1=2, z1=3;
console.log(y+" "+z);
function change1(x,y,z){
    y=y*x;
    z=y*x;
    return x+y;
}

console.log("After using function "+change1(5,2,3));
console.log("change in values "+y1+ " "+z1);
console.log("After using function "+change1(5,2,3));
console.log("change in values "+y1+ " "+z1);