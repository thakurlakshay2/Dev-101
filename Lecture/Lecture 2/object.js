var cap={
    firstName:"Steve",
    lastName:"Rogers",
    movies:["First Avengers","Winter Soilder","Civil War"],
    address:{
        state:"Brooklyn",
        city:"New York"
    },
    10:"we are ten Avengers",
    age:29,
    sayHI:function(){
        console.log("Cap says HI");
    }
    
};
var variable="age";
console.log(cap[variable]);    //is different from cap.age
for(var key in cap){
console.log(key+" : " + cap.key);
console.log(key+ " : "+ cap[key]);
}
//get
var variable=cap.firstName;
variable=cap.movies[1];
//cap.saysHI();
console.log(variable);
//set
cap.friends=["Bruce","tony","simon"];
console.log(cap);
//delete
delete cap.movies;
//console.log("'''''''''''''''''''''''''''''''''''''''''''''''"");
//get  ,, new way
//new way mostly used for variables
//console.log(cap[age]);   //use brackets if we have a changing value inside and dot it we have a definite name

