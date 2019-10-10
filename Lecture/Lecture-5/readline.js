var readline=require("readline");
var reader=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "~>>"                 //it is $ sign in git bash
});

reader.prompt();
reader.on("line",function(data){
    console.log("DId you just write "+data);
    reader.prompt();
})

reader.on("close",function(){
    console.log("thank you for using our cli");
});