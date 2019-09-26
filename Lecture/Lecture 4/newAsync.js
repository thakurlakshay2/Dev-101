function downloadFile(url, cb) {
    console.log("Downloading from ....  "+url);
   var name=url.split("/").pop();
   var path="C:\\Downloads\\";
   var dFile=path+name ;
    //set time out takes a name and calls it but it wount take a function call
    //settimeout calls a function for you
    setTimeout(function(){cb(dFile,uploadFile);},3000);

}
function compressFile(diskpath,cd){
    var name=diskpath.split(".").pop();
    var np="-resized.";
    var first=diskpath.split(".")[0];
    var npath=first+np+name;
    setTimeout(function(){
        cd(npath,filePath)
    },2000);
}

function uploadFile(diskpath,ud){
    console.log(diskpath);
   var name=diskpath.split("\\").pop();
   var path="http://pep/uploads/";
   var dFile=path+name;
    setTimeout(function(){
        ud(dFile)
    },3000);
}

function filePath(dFile){
    
    console.log(dFile);
}

var url="http://google.com/logo.png";

downloadFile(url,compressFile);