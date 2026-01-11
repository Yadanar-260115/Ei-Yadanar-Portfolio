const nav = document.querySelector(".nav");

nav.onclick = (event) =>{
    if(event.target.tagName === 'A') {
        nav.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
    }
};