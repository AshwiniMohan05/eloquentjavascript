var a = ["hey", "the" , "the" , "the" , "the"];
var numOfTrue = a.reduce(function(p,c){
    if(c === "the")
       p++;
    return p;
},0);
console.log(numOfTrue);