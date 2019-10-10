module.exports=function(){
    var os=require("os");
    var wficonfig=os.networkInterfaces();
    var Ipv6=wficonfig["Wi-Fi"][0]["address"];
    var Ipv4=wficonfig["Wi-Fi"][1]["address"];
    var Subnet=wficonfig["Wi-Fi"][1]["netmask"];
    console.log("Network Configuration");
    console.log(`Link-local IPv6 Address . . . . . : ${Ipv6}`);
    console.log(`IPv4 Address. . . . . . . . . . . : ${Ipv4}`);
    console.log(`Subnet Mask . . . . . . . . . . . : ${Subnet}`);
}