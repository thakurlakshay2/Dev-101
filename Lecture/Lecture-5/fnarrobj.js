function greeter(){
    console.log("It is a actual function");
}

greeter.myproperty="Because it is also an object";
greeter.mymethod=function(){
    return "Because it is also an object";
};
greeter();
console.log(greeter.myproperty);
console.log(greeter.mymethod());

