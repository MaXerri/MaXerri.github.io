const hamburger_toggle = document.querySelector('#hamburger-toggle');
const navbar = document.querySelector('#navbar');
hamburger_toggle.addEventListener('click', onHamburgerClick)

function onHamburgerClick(){
    if (!navbar.classList.contains("open")){
        navbar.classList.add("open");
    }else {
        navbar.classList.remove("open");
    }
    
    
}