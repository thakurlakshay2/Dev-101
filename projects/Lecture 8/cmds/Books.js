var List=require(`../utilities/List`);
var indiv=require(`../utilities/individual`);
module.exports=async function(need,find){
    var axios=require("axios");
   // var response=await axios.get(`https://anapioficeandfire.com/api/books`);
    if(need=="List"){
        var list=await List('Books');
        console.log(list);
    }

    else if(need="indiv"){
        var ans=await indiv(need,find);
        console.log(ans);
    }
}