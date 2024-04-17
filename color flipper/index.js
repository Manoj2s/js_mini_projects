const colors = ["red", "green", "yellow", "blue", "pink", "rgb(176,240,229)", "#CF2BCF"];
let colorname = document.querySelector('.clrName')
let div = document.getElementById('main');
console.log(div);
// console.log(colorname.innerText);
let btn = document.getElementById('press');
btn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    // console.log(randomNumber);
    div.style.backgroundColor = colors[randomNumber];
    colorname.textContent =colors[randomNumber];

});

