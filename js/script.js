const nav = document.querySelector(".nav");

nav.onclick = (event) =>{
    if(event.target.tagName === 'A') {
        nav.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
    }
};

let menuIcon=document.querySelector('#menu-icon')
let navbar=document.querySelector('.nav')
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}