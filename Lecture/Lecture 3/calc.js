function sum(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}


function number(a,b,fn){
    var ans=fn(a,b);
    console.log("answer is "+ ans);
}

number(3,4,sum);
number(3,4,mul);
number(3,4,div);