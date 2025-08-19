document.addEventListener("DOMContentLoaded", function() {
    var path = document.documentElement.getAttribute('data-path-to-root');
    fetch(path + "navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
            // Initialize navbar features after content is loaded
            initializeNavbarFeatures();
        });
});



// Function to initialize all navbar-related features (hamburger, dropdowns)
function initializeNavbarFeatures() {
    const hamburger_toggle = document.querySelector('#hamburger-toggle');
    const navbar = document.querySelector('#navbar-open');

    // Ensure elements exist before attaching listeners
    if (hamburger_toggle && navbar) {
        hamburger_toggle.addEventListener('click', onHamburgerClick);
    }

    function onHamburgerClick(){
        if (!navbar.classList.contains("open")){
            navbar.classList.add("open");
        }else {
            navbar.classList.remove("open");
        }
    }

    const navLinks = document.querySelectorAll('.nav__link');

    // Logic for initial active link highlighting
    const currentPath = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Ensure other links are not active
        }
    });

    // Logic for active link highlighting on click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
}