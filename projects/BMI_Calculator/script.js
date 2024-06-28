const btn=document.querySelector(".btn")
btn.addEventListener('click',function(e){
    e.preventDefault();
    get_input();
})
const btn2=document.querySelector(".btn2")
btn2.addEventListener('click',function(e){
    e.preventDefault()
   reset();
})
function reset(){
     const result=document.querySelector(".result")
     const height=document.querySelector('#Height')
     const weight=document.querySelector('#Weight')
    result.textContent="";
    height.value=" ";
    weight.value=" ";
}
function get_input(){
    const height=document.querySelector('#Height').value.trim();
    const weight=document.querySelector('#Weight').value.trim();
    const result=document.querySelector(".result")
    if((height ==='' || height<0 || isNaN(height)))
        result.textContent="Please Enter a valid Height"
    else if ((weight ==='' || weight<0 || isNaN(weight) ) )
        result.textContent="Please Enter a valid Weight"
    else{
        let val=(weight/((height*height)/10000)).toFixed(2)
       result.textContent=`Your Body Index Mass is: ${val}`
       display_image(val)
    }
  
}
function display_image(val){
    if(val<18.5){
        const img=document.querySelector(".one");
       img.style.display="block";
    }
}
