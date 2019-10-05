var minimist=require("minimist");
// //normal input
// console.log(process.argv.slice(2));
// //
// var modifiedArgv=minimist(process.argv.slice(2));
// console.log(modifiedArgv);
// console.log(modifiedArgv["_"][0]);
// // console.log(modifiedArgv.location);
// // console.log(modifiedArgv.S);
var modifiedArgv=minimist(process.argv.slice(2));
// console.log(modifiedArgv);
// console.log((modifiedArgv["_"].length));

var forecast=require("./cmds/forecast");
var help=require("./cmds/help");

var today=require("./cmds/today");
var version=require("./cmds/version");

var cmd=modifiedArgv["_"][0];
if(modifiedArgv["_"].length==0){
    console.log("''''''''''''''''''''''''''''''''''");
    help();
    console.log("'''''''''''''''''''''''''''''''''");
    return;
}
var location=modifiedArgv.location||modifiedArgv.l;
if(cmd=="help"){
    help();
}
else if(cmd=="version"){
    version();
}
else if(cmd=="forecast"){
    forecast();
}
else if(cmd=="today"){
    today();
}
else{
    console.log("Wrong command");
}