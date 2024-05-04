// JavaScript to adjust scroll position after navigating to a section from the navbar
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId); // Get the target section element
        const navbarHeight = document.querySelector('nav').offsetHeight; // Get the height of the navbar
        const windowHeight = window.innerHeight; // Get the height of the viewport

        // Calculate the offset to center the section vertically in the viewport
        const offset = (windowHeight - targetSection.offsetHeight) / 2;

        // Scroll to the target section with an offset to ensure it's visible below the navbar
        window.scrollTo({
            top: targetSection.offsetTop - navbarHeight + -50, // Adjust the offset as needed
            behavior: 'smooth' // Smooth scrolling behavior
        });
    });
});
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#333'; // New background color when scrolled
    } else {
        navbar.style.backgroundColor = 'transparent'; // Transparent when at the top
    }
});







