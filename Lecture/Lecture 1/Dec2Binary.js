var num=13;
var binary=0;
var mul=1;
while(num!=0){
    var temp=num%2;
    binary=binary+temp*mul;
    
       // num=(num-temp)/2;
       //or use Math.floor
       num=Math.floor(num/2);
    
    mul=mul*10;
}
console.log(binary);