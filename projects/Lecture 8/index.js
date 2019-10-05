// var minimist=require(minimist);
// var modifiedargv=minimist(process.argv.slice(2));
// console.log(modifiedargv);
var books=require(`./cmds/Books`);
var characters=require(`./cmds/Characters`);
var houses=require(`./cmds/Houses`);
var help=require(`./help`);

var input=process.argv.slice(2);
console.log(input);
if(input.length==0){
    help();
    return;
}

else{
    if(input[0]==="Books"){
        books(input[1],input[2]);
    }
    else if(input[0]==='Characters'){
        characters(input[1],input[2]);
    }
    else if(input[0]==='Houses'){
        houses(input[1],input[2]);
    }
    else{
        console.log("Wrong input   1");
    }

}

