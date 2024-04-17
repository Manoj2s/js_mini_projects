let decrease = document.getElementById('decrease');
// console.log(decrease);

let reset = document.getElementById('reset');
// console.log(reset);

let increase = document.getElementById('increase');
// console.log(increase);
// 
let value = document.querySelector('#value');
console.log(value);
let conut = 0;


decrease.addEventListener("click",()=>{

conut--;
value.innerText = conut;
if (conut<0){
    value.style.color = "red"
}


});
reset.addEventListener("click",()=>{

conut = 0;
value.innerText = conut;


});
increase.addEventListener("click",()=>{

conut ++;
value.innerText = conut;
if (conut>0){
    value.style.color = "green"
}


});
