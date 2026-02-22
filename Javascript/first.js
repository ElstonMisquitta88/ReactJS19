var a=100;
let b=200;

if(true){
    
    var a=10;
    let b=20;

    console.log("Inside Function: " + a);
    console.log("Inside Function: " + b);
}

console.log("Outside Function: " + a);
console.log("Outside Function: " + b);

//console.log(i);
//var i=100;


function callfunc(){
    console.log(arguments);
}

callfunc(1,2,3,4,5);