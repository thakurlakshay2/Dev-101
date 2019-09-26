var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999",
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};


function updateRecords(id,prop,value){
    if(prop=="tracks"){
        if(collection[id].tracks===undefined){
            collection[id].tracks=[value];
        }
        
        else{
            if(value!=""){
                collection[id].tracks.push(value);
            }
            else{
                delete collection[id][prop];    
            }
        }
    }

    else{
        
        if(value===""){
            delete collection[id][prop];
        }
       else{
            collection[id][prop]=[value];
        }
    }
}

console.log(collection);
updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me"), 
updateRecords(2548, "artist", "");
console.log("After''''''''''''''''''''''''''''''''''''''''''''")
console.log(collection);