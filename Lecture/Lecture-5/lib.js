// console.log(typeof module.exports);
// console.log(module.exports);
// console.log(typeof exports);
// console.log(exports);

exports = function sayhi() {
    console.log(`I has cahnged the address of module.exports`)
  };
  
  module.exports=function greeter(){
    console.log("I has cahnged the address of module.exports")
  }
  exports.exportedfn = function() {
    console.log("It is a method of export ");
  };
  module.exports.mxportedfn = function() {
    console.log("It is a method of mxexport ");
  };
  // module.exports.property = "I am a porperty which was exported from lib";
  ;
  // exports = function() {
  //   console.log("exported through exports");
  // };
  
  
  
  //client
  var lib = require("./lib");
  // lib();
  console.log(lib);
  // lib.exportedfn();
  // console.log(lib.property);