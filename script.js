// Wait until full page loads
window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    // Smooth fade out effect
    loader.style.transition = "opacity 0.6s ease";
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 600);

});


// Optional: Navbar scroll effect (premium feel)

window.addEventListener("scroll", function () {

    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.9)";
        navbar.style.height = "70px";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.4)";
        navbar.style.height = "80px";
    }

});
window.addEventListener("load", function () {

    const elements = document.querySelectorAll(".animate");

    elements.forEach(function(el, index) {

        setTimeout(function () {
            el.classList.add("show");
        }, index * 400);

    });

});
