function numbers(){
    const score=500 //by default automatically js will detect that score is of type "number" ->implict datatype declaration
    console.log(score);
    const balance= new Number(5000) //becomes and object-> explict datatype declaration , we can use many methods with this, see the embedded js in the browser
    console.log(balance);
    function number_methods(){
        const str=balance.toString()
       // console.log(`The balance in the account is:${balance} and ref id is:${score}`);
        const f_string=str+"hello"
        console.log(f_string);

        const num1=123
        console.log(num1.toFixed(3)); //used to add precision decimal units.

        const num2=123.9566
        console.log(num2.toPrecision(3)); //considers the priority that should be given to teh number of digits before decimal.

        const num3=1000000
        console.log(num3.toLocaleString('en-IN'));
    }
    number_methods()
}
// numbers()

//--------------Maths Library------------------
function mathlib(){
    console.log(Math.abs(-9)); //gives the +ve result for any -ve value
    console.log(Math.ceil(9.019)); //gives ceiling value.
    console.log(Math.round(9.3)); //gives normal rounded-off value like we follow generally.

    //**Note: Concept of Random Numbers generation */

    console.log(Math.random());//will give value b/w 0 and 1 only.

    //note: when we need to define a range-> Min:5, max:15  Forumla-> 

}
mathlib()