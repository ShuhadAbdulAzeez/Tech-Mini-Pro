

// Navbar Responsive box

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}


let slides = document.querySelectorAll('.slide-contai');
let index = 0;



// Background 

//next function
function next(){
    slides[index].classList.remove('active');
    index = (index + 1)% slides.length;
    slides[index].classList.add('active');
}

//prev function

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length)% slides.length;
    slides[index].classList.add('active');
}

//autoplay

setInterval(next, 5000); //slides changes every 7seconds
