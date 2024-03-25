/*In Js dataypes are only divided in 2 categories: Primitive and Non-Primitive,
this divison is done on the basis that how the data is strored and retrieved from the memory.
*/

//Primtive Datatype: Here they are call by value i.e whenever we do any change in them we basically do changes in their copy not original data.
//types: String,boolean,null,Number,Undefined,BigINt,Symbol

let num=100 //eg of a NUmber datatype.
let num1=101.3 //Considered as a number only, float representation doesn't exist in js.
let loggedin=true//eg of boolean datatype.
let name="surya" //eg of string datatype.
let age; //eg of undefined 
let gender=null; //eg of null

//example of symbol and it's usage, symbol is basically used to provide uniqueness, here value returned by Symbol() will be different.
let tag=Symbol('123')
let bab=Symbol('123')
//console.log(tag)
// console.log(bab)
// console.log(tag===bab) // not equal in values, equal in datatype onyl i.e symbol.



//Non-primitve(Reference) Datatype: Their reference is given to us directly, i.e we can directly manipulate the original data.
//types: Array,Objects,functions


let marks=["100","200","300"]; // representation of an array.

let myobj={  // example of object
    name:"surya",
    age:19,
}

const valuefunction = function(){
    console.log("hello");
}

console.log(typeof marks);
console.log(typeof myobj);
console.log(typeof valuefunction); //note: the return type of all the non-primitive datatypes is object only, in case of function it does say it's of type function but originally it is type of "object-function".





//**************************Very Important Note******************************//

/*JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.*/