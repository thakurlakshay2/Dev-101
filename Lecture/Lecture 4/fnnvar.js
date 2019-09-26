var x=10;
//functio scope

function myfun(){
    var x=20;
    x+=1;

    console.log("line 8 "+x);
    if(true){
        console.log("line 10 "+x);
        x=30;
        console.log("line 12 "+x);
    }
    console.log("line 14 "+x);
}
myfun();

console.log("line 18 "+x);
//var has function scope ,, i.e. loses its value when function ends,, and can be changed (see my fun);