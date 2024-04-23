
let modal = document.getElementById("show_modal");

let btn = document.querySelector(".btn");

let closeBtn = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}