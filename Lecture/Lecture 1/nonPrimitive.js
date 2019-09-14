//function
function sayHi(Name){
    console.log("Hi" +Name)
}
sayHi("Steve");

//Arrays=>Collection of anything
var arr=[1,
        1.1,
    "Steve",
    undefined,
    null,
    function sayHi(){
        console.log("Say Hi");
    },
    [1,2,3,4,5,6,7],
    {name:"Steve",
     lastName:"Rogers"}
    ];
console.log(arr[7][2]);
arr[5]();  
    
//Object=> Key: values

var cap={
    firstName:"Steve",
    lastName:"Rogers",
    movies:["First Avengers","Winter Soilder","Civil War"],
    address:{
        state:"Brooklyn",
        city:"New York"
    },
    10:"we are ten Avengers",
    sayHI:function(){
        console.log("Cap says HI");
    }
    
};
//get
//object=>valus// properties
//object=>functions //methods
console.log(cap.movies);
console.log(cap.address.city);
cap.friends=["Bruce","tony","simon"];
console.log(cap);
