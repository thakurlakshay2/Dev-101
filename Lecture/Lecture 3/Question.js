//secret message
var animals=['Hen','elephant','llama','leopard','ostrich','Whale','octopus','rabbit','lion','dog'];
function StringMap(str){
    return  str.charAt(0);
}
var str=animals.map(StringMap);
console.log(str.join(" "));
