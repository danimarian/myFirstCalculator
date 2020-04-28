//we create a function for pressing every key in the  calculator
function printSymbol(e) { 
     //we create a function so we can prints out symbol on the calculator
    let result = document.getElementById("result"); 
    //when prin the symbol we get the result object
    let obj = e.target; 
    //get the target (meaning whatever we click on) 
    if (result.value == 0)  
        result.value = obj.textContent; 
        //if result begins with 0 then overwrite 
    else result.value = result.value + obj.textContent; 
    //if it's not 0 then append
}


/*
let nr0 = document.getElementById("nr0");
let nr1 = document.getElementById("nr1");
let nr2 = document.getElementById("nr2");
let nr3 = document.getElementById("nr3");
let nr4 = document.getElementById("nr4");
let nr5 = document.getElementById("nr5");
let nr6 = document.getElementById("nr6");
let nr7 = document.getElementById("nr7");
let nr8 = document.getElementById("nr8");
let nr9 = document.getElementById("nr9");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let mult = document.getElementById("mult")
let division = document.getElementById("division");
let decimal = document.getElementById('decimal');
let rightp = document.getElementById("rightp")
let leftp = document.getElementById("leftp")
*/
let result = document.getElementById("result");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
//we asign all elements with class symbol to let symbols:
let symbols = document.getElementsByClassName("symbol");



for (let i = 0; i < symbols.length; i++)
    symbols[i].addEventListener("click", printSymbol);

/* 
nr0.addEventListener("click", printSymbol);
nr1.addEventListener("click", printSymbol);
nr2.addEventListener("click", printSymbol);
nr3.addEventListener("click", printSymbol);
nr4.addEventListener("click", printSymbol);
nr5.addEventListener("click", printSymbol);
nr6.addEventListener("click", printSymbol);
nr7.addEventListener("click", printSymbol);
nr8.addEventListener("click", printSymbol);
nr9.addEventListener("click", printSymbol);
plus.addEventListener("click", printSymbol);
minus.addEventListener("click", printSymbol);
mult.addEventListener("click", printSymbol);
division.addEventListener("click", printSymbol);
decimal.addEventListener("click", printSymbol);
rightp.addEventListener("click", printSymbol);
leftp.addEventListener("click", printSymbol);
*/
 
clear.addEventListener("click", () => document.getElementById("result").value = 0 );
equal.addEventListener("click", e => result.value = eval(result.value) ) // we add a built-in function(eval) which EVALUATE the result as a string and put that value to result