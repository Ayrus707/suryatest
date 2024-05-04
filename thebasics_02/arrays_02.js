function arraytest(){
    const arr1=[1,6,0,5] //method-1 of declaring an array, arrays in js are dynamic i.e their size can be increased.
    const arr2= new Array(0,6,4,7) //method-2 of declaring array
   // arr1.push(arr2) //takes array as an element-mmeging arrays
   // console.log(arr1);
    //console.log(arr1[4][2]); //creates a sort of 2-D array.
    //*Method-2 to merge arrays
    const arr3=arr1.concat(arr2) //merges the 2 arrays properly, also .concat() returns a new array.
    console.log(arr3);
}
//arraytest()

//* Spread and Flat methods in array.
function array_methods(){
    const arr1=[1,6,0,5] 
    const arr2= new Array(0,6,4,7) 
    const arr3= [...arr1,...arr2] //syntax for spread
    console.log(arr3);

    const arr=[1,2,[3,4],6,[7,8,[0,0,2]]] //combines all the elements of the subarray-array and returns as simple elements of array.
    console.log(arr.flat(Infinity))
//**Important menthods */
function arrimp(){
    const str="surya"
    console.log(Array.isArray(str));
    console.log(Array.from(str)); //makes array from given paramenter- could be string,object,number etc.
    const a=100
    const b=200
    const c=300
    console.log(Array.of(a,b,c)); //makes array using multiple parameters given to it.
}
arrimp()
}
array_methods()