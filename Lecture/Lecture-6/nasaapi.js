var https=require("https");
var fs=require("fs");
var writeStream=fs.createWriteStream("img.jpg");
var options={
    hostname: "api.nasa.gov",
    post:443,
    path:"/planetary/apod?api_key=DEMO_KEY",
    method:"GET"
}

var request=https.request(options,function(res){
    
    var data="";
    
    res.on("data",function(chunk){
             
        data=data+chunk;              
        
    });
    res.on("end",function(){
        console.log("Data stream has been ended");
        var json=JSON.parse(data);                         
         
           console.log(json);
          createFiles(data);
         var imgUrl=json["url"];
          var imgreq=https.get(imgUrl,function(res){
              res.pipe(writeStream);
          });
          imgreq.end();
       
        
       
    });
})

request.end();

function createFiles(obj){

    
    
        var sd = JSON.stringify(obj)
        sd = sd.slice(1,(sd.length)-1)
        sd = sd.split(",")
        sd = sd.join("\n")
    
        fs.writeFileSync("NASA APOD.txt",
        sd)
        
    
    
    
    }