// this is used to refer to the current context, it only works with objects doesn't work with functions

const user={
    username:"surya",
    price:100,
    greeting:function(){
        console.log(`${this.username},Hello welcome to the website!`);
        console.log(this); //gives the context of the object.
    }
}
// user.greeting()
// user.username="bablu"
// user.greeting()

//console.log(this); //globally as there is not context so it will give empty bracket and if we are using browser js, then it will given window as context, cuz globally window exists in js embedded in browser.

function surya(){
    let username="hello"
    console.log(this.username); //will give undefined cuz we cannot use this keyword in a function.
}
//surya()

//arrow-function

const x=()=>{
   let user="surya"
    console.log(this.surya);
}
//x()

//explict return in Arrow function,here we have to write the return statement.

const add=(num1,num2)=>{
    return num1+num2
}
console.log(add(5,6));

//implict return type in arrow function, we don't have to write the return statement.

const add2=(num1,num2)=> (num1+num2)
console.log(add2(5,2));
