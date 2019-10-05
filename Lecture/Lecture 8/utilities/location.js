module.exports=async function(location){
    var axios=require("axios");
    var response=await axios.get("http://ip-api.com/json/");
  //  console.log(response)
    var location=await axios.get(`https://www.metaweather.com/api/location/search/?query=${location}`);
    //  console.log(location);
    // console.log(response["data"]["city"])
     return response["data"]["city"];
}
// module.exports("Delhi");