module.exports=async function(choice,find){
 
    var axios=require("axios");
    //var response=await axios.get(`https://anapioficeandfire.com/api/${choice}`);
   // console.log(response);
    var check=isNaN(find);
    if(check==false){
        // for(var i=0;i<response.data.length;i++){
        //     var url=response.data[i]["url"];
        //     var sarr= url.split("/");
        //     var num=sarr[sarr.length-1];
        //     console.log(num)
            var ans=(await axios.get(`https://anapioficeandfire.com/api/${choice}/${find}`)).data;
            //console.log(ans);
        // }
        // console.log("number ");
        return ans;
    }   
    else {
        
        var response=await axios.get(`https://anapioficeandfire.com/api/${choice}/${find}`);
        return response;
    }

}
// module.exports("houses",5);