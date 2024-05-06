function obj_destructure(){  //means to extract the values from the objects.
    const obj1={
        name:"surya",
        email:"abc@gmail.com",
        price:1000
    }
    const{name}=obj1 // destrcuturing
    console.log(name);

    const{price:myprice}=obj1  //Customizing the vlaues as per our variables.
    console.log(myprice);

}
obj_destructure()

function obj_api(){
    {} //this is the notation of Json format, in this format only we get data from api's.
    // {
    //     "name":"surya"   //json are usually in object format and both key and value are strings.
    //     "age":15
    // }

    // [           //sometimes we can also get api in the form of array of objects.   
    //     {}
    //     {}
    // ]
}