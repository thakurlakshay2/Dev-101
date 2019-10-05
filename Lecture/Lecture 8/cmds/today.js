var getlocation=require("../utilities/location");
var getweather=require("../utilities/whether");
module.exports=async function(location){
    var mylocation=location||(await getlocation());
    var myweather=await getweather(mylocation);
    //console.log(myweather);
     var condition=(myweather[0]["weather_state_name"]);
     var temp=Math.ceil(myweather[0][ "the_temp"]);
     console.log(`Current condition in ${mylocation} =>   ${temp} °C     ${condition}`);
                        
    
}

// module.exports();