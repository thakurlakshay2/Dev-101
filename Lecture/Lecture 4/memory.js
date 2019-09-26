//code runs and every variable is allocated a space and undefined ,,but if variable is not defined then anywhere in code
//then the variable will be defined in global area then code runs, and if var is defined no need for global even a var
//is written twice. global gets "undefined"........
a=10; 
var a=20;
//global.a=10;

var b=15;
console.log(a);
console.log(global.a);
console.log(b);
console.log(global.b);