function outer(){
    const name="surya"
    function inner(){
        const age=42
        
        console.log(`Your name is ${name} and age is ${age}`); //name here is global to inner() function.
    }
    inner()
   
    // console.log("Your age is",age); //this will give error because age is local variable to inner() function only and outer function cannot access it.
}
//outer()

//*****************How to define functions *************************/
//Method 1
myname()           //This method willl work even if we are calling the function before it's declaration
function myname(){
    console.log("Hello surya");
}

//Method 2
//urname() //throws error here as the function is being called before the initilization of varibale.
const urname=function(){
    console.log("hello");
}
urname() //if we call the function after initilization/declartion of the variable that is holding function value then there will be no error.