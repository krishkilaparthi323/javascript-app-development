let myString ="string data type "
let myNumber = [1,2]

let myArray =[1,2,"three","four",false,["1","2","3"]]

let myObject={
    number:1
    string:"mystring"
    array:"myarray"
    anotherObject:{
        number :1
        string:"mystring"
        array:myArray,
    }
};
let add=function(a,b){
return a+b;
}

let functionWithRunTimeException =function(){
    try{
    console.log(myObject.anotherObject.array);
    }
    catch(e){
        console.
        console.error(e);

    }
};
function hoistingExample(){ // what the complier sees
    console.log(message)
    var message=' hoising is all the rage!'
}

// difference between var , let & const

var myNewVariable =5;
// var can be re-declared

var myNewVariable= "some string"; //valid

// let doesnt support redeclaration

let myLetVariables =3;
let myLetVariables ="new string"; // invaid

//scope

let myFunction =function() {
    let i;npm
    var y;

};

for(let i=1, i<=20,i++)  {// i is scoped with the loop 
//do the stuff
}

// const keyword

const myfirstconstant =5;
myfirstconstant =6;

const myfirstconstant 

let n=134
n



