function datetest(){
    function datemethods(){
    let mydate=new Date()
    console.log(mydate.toString());
    console.log(mydate.toDateString());
    console.log(mydate.toISOString());
    console.log(mydate.toLocaleDateString());}

    let createddate=new Date(2022,1,17,4,30) //parameter fromat-> year,month,day,hours,mins
    console.log(createddate.toLocaleString());
}
//datetest()

function timetest(){
        let time= Date.now() //It will give the value in miliseconds from jan 1 1970 till now.
        console.log(time);
        let newdate= new Date()
        console.log(newdate.toLocaleString('default',{
            
            hourCycle:"h12",
        }));
}
timetest()