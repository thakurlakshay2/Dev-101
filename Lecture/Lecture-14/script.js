var d=document;
//to select element form your document
var body=d.querySelector("body");

body.style.backgroundColor="#3498db";
//to create a element

//h1
var h1=d.createElement("h1");
//set texxt  inside an element
h1.textContent="Heading created from JS";
h1.style.color="white";

//add  a chile to an element

//h2
var h2=d.createElement("h2");
h2.textContent="Sub heading";
h2.style.backgroundColor="brown";
h2.style.color="white";

//p
var p=d.createElement("p");
p.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, similique.";

body.appendChild(p);
body.appendChild(h1);
body.appendChild(h2);

//always below the append of the elements 
body.insertBefore(p,h1);

var myClass=d.getElementsByClassName("myclass")[0];
console.log(myClass);

myClass.style.height="40vh";
myClass.style.width="40vw";
myClass.style.backgroundColor="#2ecc71";

//attributes
//only selects first anchor tag
// var anchor=d.querySelector("a");

//returns an array of anchor tag
var aArray=d.getElementsByTagName("a");
console.log(aArray);
for(var i=0;i<aArray.length;i++){
    aArray[i].style.fontSize="2rem";
    aArray[i].setAttribute("class","violet");
    aArray[i].addEventListener("click",function(e){
        e.preventDefault()
        console.log(e.target.getAttribute("value"))         //aArray[i].getAttribute("values") will not work as array is changing sp we write this
        //because we want target of the necessary event or here "a" e.target means selecting target who generated that event
        //event lister is itself a loop so when it works, it doesn't know what aArray[i] is  so it shows error   ,   
    })
}

var values=[];
for(var i=0;i<aArray.length;i++){
    values.push(aArray[i].getAttribute("value"));           
}
console.log(values);




