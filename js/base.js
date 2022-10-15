
// fixed nav bar
window.addEventListener("scroll", ()=>{
    let header = document.querySelector("header");
    header.classList.toggle("fixed-header", window.scrollY>0)
})



function toggleNavbar(){
    let mobNavbar = document.querySelector(".nav-list");
    mobNavbar.classList.toggle("toggel-nav")
    this.style.zIndex="2"
    if(mobNavbar.classList.contains("toggel-nav"))
        this.innerHTML =`<i class="bi bi-x-circle"></i>`
    else
        {
            this.innerHTML = `<i class="bi bi-list-nested"></i>`
    }
 }


let navBarToggler = document.querySelector(".nav-toggle-btn")

navBarToggler.addEventListener('click', toggleNavbar)
