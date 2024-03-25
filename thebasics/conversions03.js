let score="surya"
let IntNumber=Number(score)
//console.log(IntNumber)
//console.log(typeof IntNumber)

// Notes:
/*    
 33=> val:33, type->number
 33abc=> val:NAN, type->number
 "surya"=> val:NAN, type->number  
*/

//*******************OPERATIONS***********************//
//console.log(4%3) //modulus
//console.log(4**3) //power

//string operations
let str1="surya"
let str2=" sharma"
let str3= 1+2+"2" //note: if numbers are added to a string first, the operation of numbers occur and then contatenated to string.
let str4="1"+2+2 //note: if string is concatenated to a number first, then no operation is perfomed on numbers they are directly contatenated to the string.
//console.log(typeof str3)
// console.log( str3)
//console.log(typeof str4)
// console.log( str4)

// console.log(+true) //adding value to true, whicb is one only
// console.log(+ "") //empty string has value '0', so adding will do nothing,whicb is zero only

//increment n decrement,let x=5
// pre-> let a= ++x, first increment(6) then assign to a i.e a=6,x=6
//post-> let b=x++, first assign to b, then increment i.e b=5,x=6

let x=5
let a=++x
//console.log(x,a)
let y=5
let b=y++
//console.log(y,b)

//********Comparisons in js*******//
// note: comparisons should be between similar datatypes else sometimes we can get an unexpected result.
// console.log(null>-1);  // note:comparisons operators work differntly as they convert the null to "0"  and then compare it. eg: <,>,<=,>=,!=
//console.log(null==0);  // note:eqality operator work differntly as it does-not convert the null to "0".
 
//note: triple check operator "===", striclty checks the varibles, it checks the dataype and value, if both are same then only gives true.

console.log("2"==2) //this will be true as js converts string to number first and then compares it.
console.log("2"===2) //strictly checks the datatype and value, as datatype is different it will give false.


