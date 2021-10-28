//factorial for loop

let number=10;

let fact = 1;

if(number<0){
    console.log("cant able to find fact");

}else{

    for(let num=1;num<=number;num++){
        fact=fact*num;
    }
     console.log("the fact of number is",fact);   
    
}
//factorial while loop

let number2=5;
let fact2 = 1;

while(number2>1){
    
    fact2=fact2*number2;
    number2--;
    
}console.log("the factorial of number2 is ", fact2);



//find radius of the object using arrow function

const areaofobject=calculator=(radius)=>{
    return 4*3.14*square(radius);
}
let square=(ans)=>{ return ans*ans;}
console.log("the area of the object is",areaofobject(20));


// using normal  function
function areaofobject2(radius) {
    return 4 * 3.14 * square2(radius);
}
function square2(ans) { return ans * ans; }
console.log("the area of the object is",areaofobject(10));



//recursive function  // the function that can call itself
//factorial

function facto(n){
    if(n==0 || n==1){ return 1;}

    return n*facto(n-1);
}
console.log(facto(10));
document.write('the factorial of 3 is ',facto(3));


//regular expression//using string method to search

let text1 = "hello world!"; 
let ser = text1.search("world");
console.log(ser);


//using regular exp to search string

let text2 = "hello world!"; 
let sea = text2.search(/world/i);
console.log(sea);


//using string method to replace

function function1() {
    let text3 = document.getElementById("three").innerHTML;
    document.getElementById("three").innerHTML =
    text3.replace("student","ashok");
  } 


//using regular exp to replace string

function function2() {
    let text4 = document.getElementById("four").innerHTML;
    document.getElementById("four").innerHTML =
    text4.replace(/student/i, "ashok");
  }

//Modifiers can be used to perform case-insensitive more global searches:


function newFun() {
    let text5 = "\Isthis all there is,THE BRILLIANT STUDENT!";
    let result1 = text5.match(/s/g);
    let result2 = text5.match(/student/i);
    let result3 = text5.match(/^is/m);
    document.getElementById("five1").innerHTML = result1;
    document.getElementById("five2").innerHTML = result2;
    document.getElementById("five3").innerHTML = "Result is: " + result3;

}

