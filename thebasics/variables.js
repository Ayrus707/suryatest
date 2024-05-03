const myid=12778
let myname="surya"
var myemail="suryagmail.com"
myplace="delhi"  //note: this is another method to declare variable but this is not a recommened way to do so!

let accountstate; //note: when we don't assign a value to any variable then by default js considers as undefined

myname="raghav"
myemail="raghav@gmail.com"
myplace="India"

//due to scoping issues 'var' is not used now in javascript generally, so only let and const are used to declare the varibales.

console.table([myid,myname,myemail,myplace,accountstate])

//note: const and let are blocked scoped i.e they can be only accessed withing the {}, whereas var is functional scoped->refer to gfg.

//3 types of scopes in javscript: 1. Bracket scope(can be accesses within a bracket only) , 2.Functional Scope(can be accessed within a function), 3.Global scope

function myfoo(){
    var str=1                 // inside brackets, let keyword cannot accept redeclaration of the same variable,it will give error.
    var str=2                //but var does allow this.
    console.log(str)
}
myfoo()
function surya(){
    let a=2
    if(a>2){
        let b=3
        var c=4
    }
    console.log(c)
    console.log(b)
}
surya()
