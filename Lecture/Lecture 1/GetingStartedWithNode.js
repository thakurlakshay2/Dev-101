#!/usr/bin/env node
//console.log(process);  process is an object with numerous keys
//inbuilt modules=>require
// var os=require("os");
var fs=require("fs");
//input
console.log(process.argv[2]);
//console.log(process.argv.slice(2));   /same work as substring in java
//input
var input=process.argv[2];
var ans=fs.existsSync(input); //checks whether it exists befoure or not

//mkdir use
if(input==undefined){
    console.log("Please input a folder name");
    return;
}

if(ans==true){
    console.log(input+" already exists");
}
else{
    fs.mkdirSync(input);   //makes a new folder
    console.log("Folder "+input+" is made");
}


//console.log.(os.cpus)())
//os.networkIngfaces()
// for(var i=1;i<=20;i++){
   
//     fs.mkdirSync("Lecture "+ i);
// }
//fs.rmdirSync(input);  used to remove a file

