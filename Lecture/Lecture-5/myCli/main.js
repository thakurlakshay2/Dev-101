// Que Write your own cli "mycli" using readline module 
// that implements two commands ipconfig,mkdir 
// Input : Node mycli to start your cli
	// myipconfig => Object with that your network information{}
	// mymkdir folder=> create a directory named folder
	// else should output wrong command
	// ON exit should print "See you later"   



var chalk=require("chalk");
var readline=require("readline");
var reader=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "~>>"                 //it is $ sign in git bash
});

var ip=require("./ipconfig");
var dir=require("./mkdir");

reader.prompt();
reader.on("line",function(data){
	var cmd=data.split(" ")[0];
	var name=data.split(" ").slice(1).join(" ");
	
	if(cmd=="myipconfig"){
		ip();
	}
	
	else if(cmd=="mymkdir"){
        if(name.length>0){
        dir(name);
        }
        else{
            console.log("Enter a Name");
        }
		
	}	

	else{
		console.log(chalk.red("Wrong Command"));
	}
    reader.prompt();
})

reader.on("close",function(){
    console.log(chalk.green("See you later"));
});


