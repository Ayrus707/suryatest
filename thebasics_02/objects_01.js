//If we use constructor to make object then the object created will be Singleton object. Singleton object-> only has one instance throughout it's lifetime.
//Syntax: object.Create()

function myobj(){
    const obj1={    //syntax of declaring an object, this object is literal object.[Has kye-value format]
        name:"surya",  //*The keys are stored as String by default, although we don't need to Explicitly declare/write them as String.
        age:10,
        location:"goa",
        isLoggedIn: false,
        lastLoggedInDays:["Monday","Sunday"]
    }
    console.log(obj1.age); //Method-1 to access the memebers of an object.
    //console.log(obj1[location]); //This will give error, we should pass the parameter as string.

    console.log(obj1["location"]); //Method-2 to access the members of an object.

    obj1.location="United Kingdom" //Changing the values in the object.
  
    Object.freeze(obj1)
    obj1.name="raghav" //Freexess the object and no chnages can be made in the object. 
    console.log(obj1)
}
// myobj()

//*Important Concept-> Add symbol as key in an object and print it.
function symbolobj(){
    const symbol1=Symbol("Key1")
    const myuser={
        name:"bablu",
        age:34,
        [symbol1]:"mykey1" //adding symbol in object.
    }
    console.log( myuser[symbol1]); //Correct syntax for accessing symbol.
    console.log(typeof(myuser.age));
    console.log(myuser);

    myuser.greeting=function(){  //gets added in the object.
        console.log(`hello bro ${this.name}`);
    }
    console.log(myuser.greeting());
    console.log(myuser);
}
symbolobj()

