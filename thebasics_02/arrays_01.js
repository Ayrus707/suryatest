function myarray(){
    const arr=[0,1,2,3,4,"surya","shrma"] //Declaring array, the array in Js can contain hetrogenous elements.
    console.log(arr[7]); //out of index is undefined, doesn't give any errors.
    console.log(arr.length); //length method is used to Find the lenngth of the array in js.
    arr.push(7) //pushing elements in the array at last
    console.log(arr);
    x=arr.pop() //used to pop the last most element in the array.
    console.log(x);
    one=arr.shift() //used to remove the first array element.
    arr.unshift(3) //used to insert the specified parameter as the first element in the array.
    console.log(one);
}
//myarray()


//** Some Important Concepts**
//1. Join method in array-> basically converts the elements on the given array into string
//2. Slice vs Splice
function imparray(){
    function arryajoin(){
        const arr=[1,2,3,4,5]
        const join_arr=arr.join()
        console.log(arr);
        console.log(join_arr);
    }
    //arryajoin()
    const arr2=[1,2,3,4,5,6]
    const sliced_arr=arr2.slice(1,4) //In slice the end index is not included, also no change is made to the original array.
    console.log("Original Array-Sliced",arr2);
    console.log(sliced_arr); 
    const spliced_arr=arr2.splice(1,4) //In splice the end index is included, and the indexes that are spliced are removed form original array.
    console.log("Original Array-Spliced",arr2);
    console.log(spliced_arr); 
}
imparray()
