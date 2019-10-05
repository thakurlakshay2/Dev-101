var getLocation = require("../utilities/location");
var getweather = require("../utilities/whether");
module.exports = async function(location) {

  var mylocation = location || (await getLocation());
  var myweather=await getweather(mylocation);
  console.log(myweather);
  for(var i=0;i<5;i++){
      var date=(myweather[i]["applicable_date"])
      var condition=(myweather[i]["weather_state_name"]);
      var mintemp=Math.ceil(myweather[i][ "min_temp"]);
      var maxtemp=Math.ceil(myweather[i]["max_temp"]);
      console.log(`Current condition in ${mylocation} 
                  ${date}  -  Low: ${mintemp} °C | High: ${maxtemp}  |  ${condition}`);
  }
  
     
  
};
