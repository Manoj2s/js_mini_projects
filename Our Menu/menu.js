
const item = document.querySelectorAll(".card")

document.querySelector('#breakfastBtn').addEventListener('click',()=>{
    item.forEach(item => {
        if (item.id != 'breakfast'){
            item.style.display = 'none';
        }
        else {
            item.style.display = 'flex';
        }
        
    })
})
document.querySelector('#lunchBtn').addEventListener('click',()=>{
    item.forEach(item => {
        if (item.id != 'lunch'){
            item.style.display = 'none';
        }
        else {
            item.style.display = 'flex';
        }
        
    })
})
document.querySelector('#shakesBtn').addEventListener('click',()=>{
    item.forEach(item => {
        if (item.id != 'shakes'){
            item.style.display = 'none';
        }
        else {
            item.style.display = 'flex';
        }
        
    })
})
document.querySelector('#dinnerBtn').addEventListener('click',()=>{
    item.forEach(item => {
        if (item.id != 'dinner'){
            item.style.display = 'none';
        }
        else {
            item.style.display = 'flex';
        }
        
    })
})


document.querySelector('#allBtn').addEventListener('click', ()=>{
    item.forEach(element => {
        element.style.display = 'flex'; 
    });
})
