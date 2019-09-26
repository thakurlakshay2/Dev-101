function getFirstName(Name){
    return Name.split(" ")[0];
}

function getLastName(Name){
    return Name.split(" ")[1];
}

function greeter(fullName,fn){
    var great=fn(fullName);
    console.log("Hi "+great);
}

greeter("Steve Rogers",getFirstName);

greeter("Steve Rogers",getLastName);