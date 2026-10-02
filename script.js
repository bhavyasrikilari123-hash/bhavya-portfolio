// =========================================
// PORTFOLIO JAVASCRIPT
// =========================================


// Display current year in footer

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================================
// SMOOTH SCROLLING
// =========================================

const navigationLinks =
    document.querySelectorAll("nav a");


navigationLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const sectionId =
            this.getAttribute("href");

        const section =
            document.querySelector(sectionId);

        if (section) {

            section.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =========================================
// WELCOME MESSAGE
// =========================================

console.log(
    "Welcome to K. Bhavya Sri's Portfolio!"
);