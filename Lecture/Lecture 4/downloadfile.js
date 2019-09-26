// function downloadFile(url, downloaded) {
  // We are downloading the file here
  // var path = "C:\\Downloads\\";
  // let's assume it takes 3 seconds to download
  // accepts url of image and callback which is called when downloading is done
// }


// function downloaded(dFile){
//   console.log(dFile)
// }

// downloadFile(url,downloaded)
// Input:
// var url:http://google.com/logo.png


// output:
// Downloading file from:     
// http://google.com/logo.png
// File saved to: C:\Downloads\logo.png

function downloadFile(url, cb) {
    console.log("Downloading from ....  "+url);
   var name=url.split("/").pop();
   var path="C:\\Downloads\\";
   var dFile=path+name ;
    //set time out takes a name and calls it but it wount take a function call
    //settimeout calls a function for you
    setTimeout(function(){cb(dFile);},3000);

}

function downloaded(dFile){
    
    console.log(dFile);
}

var url="http://google.com/logo.png";

downloadFile(url,downloaded);