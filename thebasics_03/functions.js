function add_two_num(num1,num2){ //called as function definiton.num1 and num2 are called as parameters of a function.
    //console.log(num1+num2);
    return num1+num2 //returning the values to the function call statement.
}

//const ans=add_two_num(3,8)  //function call or execution. 6,7 are called as arguments of the functions.
//console.log(ans);

function say_my_name(name){
    if(!name){ //by default undefined is considered as false in js.
    return "Error:please enter a name"}
    return `Your name is ${name}`

}
//const myname=say_my_name("")
//console.log(myname);

function calc_cart_price(num1,num2,...price){ //Rest operator is resembeled to spread operator, but here rest operator is used in a function when we are unsure about the number of arguments that a function may receive.
    return price
}
console.log(calc_cart_price(400,500,600,1000)) // rest operator returns an array of all the arguments that have been passed through the function.
//*Note: as we added 2 more variables in arguments the val 400 and 500 got stored in num1 and num2 while rest others got stored in array by rest operator.


//passing objects and array as parameters in functions.
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));