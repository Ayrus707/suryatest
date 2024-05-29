// we sometimes have to immediately invoke functions, so we use  the IFFE meethod. This is done to protect the polllution that could be cuased by global varaibles.

// const sur=function(){ //normal function declaration and usage without IFFE.
//     console.log("DB Connected");
// }
//sur();

(function sur(){  //called as named iffe as the function has a name.
    console.log(`DB CONNTECTED`);
})();   //need to add the semicolon to end this iffe method,invoke call.To stop the context.



((num)=>{  //unamed iffe, we can pass values here as well.
console.log(`db connected2 ${num}`);
})(64)