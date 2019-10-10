var events=require("events");
var eventEmitter=new events();

eventEmitter.on("myevent",function(){          //1st one to run
    console.log("myevent was called");
});

eventEmitter.on("anotherEvent",function(){          //1st one to run
    console.log("anotherEvent was called");
    eventEmitter.emit("myevent","-inside-a button was clicked");
}); 

eventEmitter.on("myevent",function(data){         //runs the function beside it if event is matched
    console.log("myevent was emitted with "+data);
    
});

//check ever eventemitter which is on for "myevent" and runs the function beside it
// eventEmitter.emit("myevent","a button was clicked");

eventEmitter.on("myevent",function(){          //1st one to run
    console.log("20 myevent was called");
});

eventEmitter.emit("anotherEvent","a button was clicked");
eventEmitter.emit("myevent"," -after- a button was clicked");
//see the differnet position of my event and see the change ina answer ,, eventmaker ,first add the name of event and all the 
//listner associated with it in an array  (only adds ones which are read) in case of inside a function
//it reads every one i.e. total 3 function and and doesnt remove them after use
//but outside the  anotherevent and above the last myevent it only saves 2 function as last one is not read
// on calling again it just adds the new function 
//eventmaker/emmitter=("_name",[function 1,function 2])
//whem emit is calles it just goes to above line and runs all the function added in name