// Add active class to the current page's nav link to hghlightactive page in navbar

const navLinksEls = document.querySelectorAll('.nav__link');
const windowPathname = window.location.pathname;

navLinksEls.forEach(navLinkEl => {
    const navLinkPathname = new URL(navLinkEl.href).pathname;
    
    if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')){
        navLinkEl.classList.add('active');
    }
});