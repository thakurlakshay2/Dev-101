module.exports=function(dirName){
    var path=require("path");            //necessary to fond path where folder is needed   or else dirname directly can be used
    //but folder will be made where the code ran; 
    var fs=require("fs");           //contains mkdirsync and exist sync
    dirname=path.join(process.cwd(),dirName);
		if(fs.existsSync(dirName)){
			console.log("Folder Already Exists");
		}
		else{
            fs.mkdirSync(dirName);
            console.log(`Folder Made`);
		}

}