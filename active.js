// Add active class to the current page's nav link to hghlightactive page in navbar

const navLinksEls = document.querySelectorAll('.nav__link');
const windowPathname = window.location.pathname;

navLinksEls.forEach(navLinkEl => {
    const navLinkPathname = new URL(navLinkEl.href).pathname;
    
    if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/') || 
        (windowPathname.includes("projects") && navLinkPathname.includes("projects"))) { // This last clause allows the individual project pages to make project the active class so the button can be highlighted
        navLinkEl.classList.add('active');
    }
});