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
    const pathToRoot = document.documentElement.getAttribute('data-path-to-root');

    navLinks.forEach(link => {
        // Prepend pathToRoot to the href if it's a relative path
        let originalHref = link.getAttribute('href');
        if (originalHref && !originalHref.startsWith('http') && !originalHref.startsWith('/') && !originalHref.startsWith('#')) {
            link.setAttribute('href', pathToRoot + originalHref);
        }

        // Logic for initial active link highlighting
        const currentFullPath = window.location.pathname;
        const currentFileName = currentFullPath.split('/').pop();
        const linkPath = link.getAttribute('href').split('/').pop(); // Use the potentially modified href

        // Check if the current page is projects.html itself
        // OR if the current page is inside the projects folder
        if (linkPath === 'projects.html' && currentFullPath.includes('/projects/')) {
            link.classList.add('active');
        } else if (linkPath === currentFileName) { // Original logic for other pages
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