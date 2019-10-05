module.exports=async function(choice){
 
    var axios=require("axios");
    var response=await axios.get(`https://anapioficeandfire.com/api/${choice}`);
   // console.log(response);
    if(choice=="Books"){
        var arr=[];
        //console.log(response.data.length);
        for(var i=0;i<response.data.length;i++){
            arr.push({
                Name:response.data[i]["name"],
                Author:response.data[i]["authors"][0],
                Code:response.data[i]["isbn"]
            }); 
          
        }

    }

    else if(choice=="Characters"){
        var arr=[];
        //console.log(response.data.length);
        for(var i=0;i<response.data.length;i++){
           
                arr.push({
                    Name:response.data[i]["name"],
                    Gender:response.data[i]["gender"],
                    //Culture:response.data[i]["culture"],
                    Alias:response.data[i]["aliases"][0]
                }); 
        
        }
    // console.log(arr);

    }

    else if(choice=="Houses"){
        var arr=[];
        console.log(response.data.length);
        for(var i=0;i<response.data.length;i++){
            arr.push({
                Name:response.data[i]["name"],
                Region:response.data[i]["region"],
                CodeOfArms:response.data[i]["coatOfArms"]
            }); 
          
        }

        // console.log(arr);
    }
    
    else {
        console.log("Wrong input");
    }

    return(arr);
}
// module.exports("Houses");