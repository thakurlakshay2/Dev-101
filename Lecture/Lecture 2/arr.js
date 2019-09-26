var arr=[1,
    1.1,  "a",
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

//console.log(arr.length());
console.log(arr[arr.length]);  //here we get null
arr[95]="Some Value";
//console.log(arr[84]); //
console.log(arr);
console.log("'''''''''''''''''''''''''''''''''''''''''");
//1> push== addLast
arr.push("Last Value");
// console.log(arr);
//2> pop=>removeLast
// arr.pop();   has a return value
//3> unshift =>addFirst
arr.unshift("First value");
//4> shift =>removeFirst
arr.shift();
//5> slice=> Java substring
//2 uses 1> arr.slice(2)  and arr.slice(2,6)  where 6 not included
//splice=>delete some part of original array
// var splicearr=arr.splice(2,4);
// console.log("Spliced array");
// console.log(splicearr);
// console.log("Original array");
// console.log(arr);

//6> include=>true false return ,shows if it is present
var ans1=arr.includes("a");
console.log(ans1);
//7> index of=> gves position of a given element
var ans2=arr.indexOf("a");
console.log(ans2);
ans2=arr.indexOf("b");
console.log(ans2);