var chalk=require("chalk");
var figlet=require("figlet");
var readline=require("readline");
var reader=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ">"                 //it is $ sign in git bash
});

console.clear();
console.log(chalk.blue(figlet.textSync("Tasker")));
console.log(chalk.cyan("Type a command (Type help to see the list of commands)"))
var arr=[];
reader.prompt();
reader.on("line",function(data){
   dataarr=data.split(" ");
   var cmd=dataarr[0];
   var data=dataarr.slice(1);
   
    if(cmd=="help"){
    
    console.log(`Available Commands:
    1. add Task_name
    2. ls (to list all tasks)
    3.delete id(enter task id to delete it)   `);
    }

    else if(cmd=="add"  && data.length>0){
        arr.push(data.join(" "));
        console.log(chalk.green("added "+data.join(" ")));
        
        
    }
    
    else if(cmd=="ls"){
        for(var i=0;i<arr.length;i++){
            console.log(`${i+1}. ${arr[i]}`);
        }
    }

    else if(cmd=="delete" && data.length>0 ){
        var id=Number.parseInt(data[0]);
        var temparr=[];
        console.log(`Deleted ${id}. ${arr[id-1]}`);
        for(var i=0;i<arr.length;i++){
            if(i !=id-1){
                temparr.push(arr[i]);
            }
        }
        arr=temparr;
        
    }

    else{
        console.log(chalk.red("Wrong command"));
    }
    reader.prompt();
})
