// for of() loop, it can be used with anything like array,string etc, gives the value directly and not the keys.

let arr=[3,4,6,8,2,1,4,0]
for (const i of arr) {
    //console.log(`The array elements are:${i}`);
}

const mystring="Hello bro sirr!!!"

for (const i of mystring) {
    if(i==" ") continue;
    //console.log(i)    
}

// Map data structure: Used to store data in Key value format, and doesn't contain any duplicate entry. It only contains distinct elements.

const mpp=new Map();
mpp.set("IN","India")
mpp.set("US","USA")
mpp.set("RS","RUSSIA")
// console.log(mpp);

// Map is iterable also

// for (const [key,val] of mpp) {
//     console.log(`The key is:${key} and value is${val}`);
// }

//For of() can't be used to itrate through objects**


//-------------------------------------------------------------------------
//for in() loop, we can apply this loop on objects to iterate over them but we can't apply this loop with map.

const arr1=[1,2,3,4,5] //The indices of the array are its keys.
for (const key in arr1) {
    //console.log(`The key is ${key} and the value is ${arr1[key]}`);
}
const myobj={
    name:"surya",
    age:"12"
}
for (const key in myobj) {
    console.log(`key is ${key} and the value is ${myobj[key]}`);
}