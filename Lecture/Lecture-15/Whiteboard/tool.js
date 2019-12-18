var activeTool="pencil"
ctx.strokeStyle="red";
ctx.lineWidth=5;

var rect = board.getBoundingClientRect();

var eraser=document.querySelector(".eraser");
var pencil=document.querySelector(".pencil");
function handletoolchange(tool){
    if(tool=="eraser"){
        eraser.classList.add("active");
        pencil.classList.remove("active");
        ctx.strokeStyle="white";

    }

    else if(tool="pencil"){
        pencil.classList.add("active");
        eraser.classList.remove("active");
        ctx.strokeStyle="red";
    }
}