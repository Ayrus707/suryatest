//How to declare strings
function stringdeclaration(){
let str="surya"
const mystr='surya'
const str2=new String('surya') //in this method the string is stored in key-value format, here string is considered as an object.
/*     0:"s 1:"u" 2:"r" 3:"y"  4:"a" ->key-val format            */  
console.log(str,typeof(str))
console.log(mystr,typeof(mystr))
console.log(str2,typeof(str2))
function stringprint(){
    console.log("My name is "+str) //old way, don't use this method
    let age=10
    console.log(`My name is ${mystr} and my age is ${age}`) // new and better way for strings [this method is called String Interpolation], this method has section of prototype and can be seen from web browser embedded js.
}
stringprint()
}
//stringdeclaration()

function stringprototyping(){
    const str1=new String("surya sharma") //**Note: spaces are also counted as character
    console.log(str1.length); //ans is 12.
    console.log(str1.toUpperCase()); //ans is 12.
    const newstring=str1.substring(0,7)  //end index is exlcuded!, substring method doesn't accept negative values
    console.log(newstring);
    const anotherstring=str1.slice(-11,3) //end index is excluded, does accept negative indexes, this means last char=-1,-2 eg: a:-1,m:-2 and so on.
    console.log(anotherstring);

    let mystring="   surya  sharma   "
    console.log(mystring+"hello")
    console.log(mystring.trim()+"hello") //trim  function basically removes the whitespaces and line terminators from begg and end of the string.
}
stringprototyping()
