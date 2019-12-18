var d=document;
var add=d.getElementsByTagName("button")[0];

var ul=d.querySelector("#tasks");
var input=d.getElementsByTagName("input")[0];
var counter=1;

add.addEventListener("click",function(){
    var li=d.createElement("li");
    li.innerHTML=`${input.value} <button type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>`;
  li.style.listStyle="none";
    ul.appendChild(li);
    var  span=li.querySelector("span");
    span.addEventListener("click",removeMe);
})

function removeMe(event){
    // console.log("event has bubbled up")
    console.log(event.target);
    var ul=event.target.parentElement.parentElement.parentElement;
    var li=event.target.parentElement.parentElement;
    ul.removeChild(li);

}

