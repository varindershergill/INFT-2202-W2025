/**
 * 
Name : Varinder Shergill
StudentID : 100895299
Date : February 9, 2025

 */

document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded!");

    // Add Content into Sections
    injectContent();

    // Modify Navbar Links
    modifyNavbar();

    // Add Fixed Bottom Navbar
    addBottomNavbar();
});

/**
 * Function to inject content dynamically into sections.
 */
function injectContent() {
    document.getElementById("left-section").innerHTML = `
        <h3>My Interests</h3>
        <p>I enjoy working on web development projects, learning new programming languages, and experimenting with AI-driven applications.</p>
    `;

    document.getElementById("main-content").innerHTML = `
        <h2>About Me</h2>
        <p>I am currently enrolled in the Computer Programming and Analysis program at Durham College. I have a strong passion for technology, coding, and developing innovative solutions.</p>
    `;

    document.getElementById("right-section").innerHTML = `
        <h3>Why Learn to Code?</h3>
        <img src="https://images.squarespace-cdn.com/content/v1/63d40fe2cbd65e16cb8098b6/1678437282243-XL1EAF7FXW1KFY61HJ5V/why%2Blearn%2Bto%2Bcode.jpg" class="img-fluid rounded shadow" alt="Why Learn to Code">
        <p>Coding is an essential skill that enables problem-solving, logical thinking, and endless opportunities in the tech industry.</p>
    `;
}

/**
 Modifies the navigation bar by changing Products to Interests
 Adds Human Resources dynamically
 */
function modifyNavbar() {
    console.log("Modifying Navbar...");

    let productsLink = document.querySelector("a[href='product.html']");
    if (productsLink) {
        productsLink.innerText = "Interests";
    }

    let navbarList = document.querySelector("#navbarNav ul");
    if (!navbarList) {
        console.log("Navbar list not found.");
        return;
    }

    let hrLink = document.createElement("li");
    hrLink.classList.add("nav-item");
    hrLink.innerHTML = '<a class="nav-link" href="hr.html"><i class="fas fa-users"></i> Human Resources</a>';

    // Insert Human Resources
    let contactLink = document.querySelector("a[href='contact.html']").parentElement;
    if (contactLink) {
        navbarList.insertBefore(hrLink, contactLink);
        console.log("Human Resources link added.");
    }
}

/**
Add a fixed bottom navbar dynamically.
 */
function addBottomNavbar() {
    console.log("Adding Fixed Bottom Navbar...");

    let bottomNav = document.createElement("nav");
    bottomNav.classList.add("navbar", "fixed-bottom", "navbar-dark", "bg-dark", "text-center", "py-2");

    bottomNav.innerHTML = `
        <div class="container text-white">
            <span>&copy; ${new Date().getFullYear()} My Website | All Rights Reserved</span>
        </div>
    `;

    document.body.appendChild(bottomNav);
}
