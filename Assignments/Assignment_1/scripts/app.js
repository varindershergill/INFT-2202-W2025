// Modify's The Navigation Bar
modifyNavbar();

// 2. Handle Contact Form Submission
handleContactForm();

/**
 Modify's the navigation bar by changing products to interests,
 Adds human resources and updates copywrite year
*/
function modifyNavbar() {
    let navbar = document.getElementById("productsLink");
    if (navbar) {
        navbar.innerText = "Interests";
    }

    let hrLink = document.createElement("li");
    hrLink.classList.add("nav-item");
    hrLink.innerHTML = '<a class="nav-link" href="hr.html"><i class="fas fa-users"></i> Human Resources</a>';

    let navbarList = document.querySelector("#navbarNav ul");
    if (navbarList) {
        navbarList.insertBefore(hrLink, navbarList.children[4]);
    }

    document.getElementById("currentYear").innerText = new Date().getFullYear();
}

/**
Function handle's the contact form submission,
Validates form input fields and redirects to the home page after 3 seconds
*/
function handleContactForm() {
    let contactForm = document.getElementById("contactForm");

    if (!contactForm) return;

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let inputName = document.getElementById("name").value.trim();
        let inputEmail = document.getElementById("email").value.trim();
        let inputMessage = document.getElementById("message").value.trim();

        // Validate form inputs
        if (!validateForm(inputName, inputEmail, inputMessage)) {
            return;
        }

        console.log({ name: inputName, email: inputEmail, message: inputMessage });

        // Display success message
        displaySuccessMessage();

        // Redirect to home page 
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000);
    });
}

/**
 * Function to validate the form inputs
 * - Ensures no empty fields
 * - Checks if email contains '@' and '.'
 */
function validateForm(name, email, message) {
    if (!name || !email || !message) {
        alert("All fields are required!");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Invalid email format! Must contain '@' and '.'");
        return false;
    }

    return true;
}

/**
Ensures email contains '@' and '.'
 */
function validateEmail(email) {
    return email.includes("@") && email.includes(".");
}

/**
Display a Bootstrap success message 
 */
function displaySuccessMessage() {
    let formContainer = document.getElementById("formContainer");
    formContainer.innerHTML = `
        <div class="col-md-6">
            <div class="alert alert-success text-center shadow-lg">
                <h4>Thank you for submitting!</h4>
                <p>I have received your message!</p>
            </div>
        </div>
    `;
}

