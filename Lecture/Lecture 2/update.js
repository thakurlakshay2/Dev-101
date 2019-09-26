var contacts = [
    {
        "firstName": "Abhishekh",
        "lastName": "Kumar",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name,properties){
    
    for(var i=0;i<contacts.length;i++){
       
       
        if(contacts[i].firstName==name){               //use dot in specific name
            if(contacts[i][properties]){
                return contacts[i][properties];
                
            }
            else{
                return "No such Properties"
            }
            
        }
        
     
        
    }
    return "No such Contact";

   
}


console.log(lookUpProfile("Abhishekh", "likes"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Abhishekh", "address"));

//2> check these statment
