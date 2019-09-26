var str1="I'm a little tea pot";
str1=str1.toLowerCase();
var sarr=str1.split(" ");
var narr=[];
for(var i=0;i<sarr.length;i++){
    var word=sarr[i];
    word=word.replace(word.charAt(0),word.charAt(0).toUpperCase());
    narr.push(word);
}

console.log(narr.join(" "));