"use strict"
console.log(this);

// function myfn(){
//     console.log(this);
// }
// myfn();

// const cap={
//     name:"Steve",

//     getname:function(){
//         console.log(this.name);
//             function hello(){
//             console.log("inside hello");
//             console.log(this);
//         }       
//         hello();
// }
// }

// cap.getname();

class Human {
    constructor(name,age){
    this.name=name;
    this.age=age;
    }
    getName() {
        console.log(this.name);
    }
    getAge(){
        console.log(this.age);
    }
}
//here it is not class of java , but a fake representtion real is shown below but it is made to look simple
const varun=new Human("varun",10);
const Tarun=new Human("tarun",10);
varun.getName();
varun.getAge();

function oldHuman(name,age){
    this.name=name;
    this.age=age;
    this.getname=()=>{
        console.log(this.name);
    }
    this.getage=()=>{
        console.log(this.age);
    }
}

const kashish=new oldHuman("kashish",12);
const ram=new oldHuman("ram",155);

kashish.getage();
ram.getage();