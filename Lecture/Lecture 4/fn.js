function c(){
    var myVar;             //comment this line and see magic ,concept of lexical scope
    console.log("Inside fn c "+myVar);
}
function a(){
    var myVar=2;
    global.d="in function a";                 //do variation for better understanding
    //console.log(d);

    function b(){
        
        c();
        console.log("Inside b "+myVar);
    }
    console.log("Inside a befoure b call "+myVar);
    b();
    console.log("Inside a after b call "+myVar);
}

console.log(myVar);
var myVar=1;
a();
console.log("After all calls "+d);
console.log("Global "+myVar);