let userInput = document.getElementById("bud_input");
// console.log(userInput);
let submitBtn = document.querySelector('.btn');
// console.log(submitBtn);
let list = document.querySelector('ul');
// console.log(list);

submitBtn.addEventListener('click', ()=>{
   let task= userInput.innerText;
   list.appendChild(task);
})