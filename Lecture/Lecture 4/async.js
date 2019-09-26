//Asynchronus code
function greeter() {
    console.log("I will say Hi  Later");
}
//3000 is miimum time of wait
setTimeout(greeter,3000);
//will make greeter wait 3 seconds and while waiting it runs rest of the code
for(var i=0;i<=10;i++){
    console.log("I am "+i);
}