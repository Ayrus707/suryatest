function myobj(){
    const obj1=new Object() //Making objects using constructor-> Singleton Object
    const obj2={} //Non-Singleton Object.
    console.log(obj1,obj2);  //Internally no difference.
}
//myobj()

function addinobj(){
const myobj=new Object()
myobj.name="surya"
myobj.surname="shrma"
myobj.IsLoggedIn=false
console.log(myobj);
}
//addinobj()

function nested_obj(){
    const user1={
     fullname:{
            username:{
                name:"bablu",
                surname:"raj"
            }
        }
    }
console.log(user1.fullname.username.name);
}
//nested_obj()

function merging_obj(){
    const obj1={1:'a',2:'b'}
    const obj2={3:'c',4:'d'}
    const obj10={11:'z',12:"x"}
    const obj3=Object.assign({},obj1,obj2) //Used to merge contents of 2 objects into 1 object and that object is returned.
    //Assing(Target,Source) -> it will transfer all the values from source and copy to target that is why an empty {} obj is passed as target.
    //console.log(obj3);
    const obj4=Object.assign(obj1,obj2,obj10)
    console.log(obj1); //original object changed cuz it acted as Target object in Assign() function.
    console.log(obj4);

    //using spread method
   const obj6={...obj1,...obj2}
    console.log(obj6);
}
//merging_obj()

function obj_methods(){
    const user={name:"bablu",email:"abc@gmail.com",age:34}
    console.log(Object.keys(user)); //returns an array of keys in the object.
    console.log(Object.values(user)); //returns an array of values in the object.
}
obj_methods()