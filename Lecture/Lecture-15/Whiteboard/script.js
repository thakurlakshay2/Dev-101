
var pencil=document.querySelector(".pencil");
//mousedown
//mousemove
//mouseup


var isdown=false;



board.addEventListener("mousedown",function(event){
    
    ctx.beginPath();
    ctx.moveTo(event.clientX,event.clientY-rect.top);
    isdown=true;
});


board.addEventListener("mousemove",function(event){
    console.log(event.clientX);
    console.log(event.clientY);
    if(!isdown) {return; }
    ctx.lineTo(event.clientX,event.clientY-rect.top);
    // ctx.fillStyle="red";
    ctx.stroke();
});


board.addEventListener("mouseup",function(event){
    
    
    ctx.closePath();
    isdown=false;
})