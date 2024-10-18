// HOME PAGE
document.addEventListener("DOMContentLoaded", function() {
    // Search functionality
    const searchInput = document.querySelector('input[type="text"]');
    const restaurantCards = document.querySelectorAll('.card'); // Select all restaurant cards

    searchInput.addEventListener('keyup', function() {
        const query = searchInput.value.toLowerCase();
        
        // Loop through all restaurant cards
        restaurantCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            // Check if the title includes the search query
            if (title.includes(query)) {
                card.style.display = 'block'; // Show card if it matches
            } else {
                card.style.display = 'none'; // Hide card if it doesn't match
            }
        });
    });

    // Contact form submission
    const shareButton = document.querySelector('.btn-danger');
    shareButton.addEventListener('click', function() {
        const emailInput = document.querySelector('input[placeholder="Email"]');
        if (emailInput.value.trim() === '') {
            alert('Please enter a valid email address.');
        } else {
            alert(`Link to download the app will be sent to: ${emailInput.value}`);
            emailInput.value = ''; // Clear the input after submission
        }
    });

    // Optional: Add a "See more" functionality for popular localities
    const seeMoreButton = document.querySelector('.badgeSection .card:last-child');
    seeMoreButton.addEventListener('click', function() {
        alert('Displaying more popular localities...');
        // Here, you could dynamically load more content or show a modal with additional places
    });
});


// GET APP SECTION
function shareAppLink() {
    const emailInput = document.querySelector('input[placeholder="Email"]');
    const phoneInput = document.querySelector('input[type="radio"]:checked');

    let message = '';
    let contactMethod = '';

    if (phoneInput && phoneInput.nextSibling.textContent.trim() === 'Phone') {
        const phoneNumber = prompt("Please enter your phone number:");
        if (phoneNumber) {
            message = `Download the Zomato app from this link: [Your App Link Here]`;
            contactMethod = `via Phone: ${phoneNumber}`;
        }
    } else {
        if (emailInput.value) {
            message = `Download the Zomato app from this link: [Your App Link Here]`;
            contactMethod = `via Email: ${emailInput.value}`;
        } else {
            alert("Please enter a valid email address or select a phone option.");
            return;
        }
    }

    // Simulate sending the link
    alert(`App link has been sent ${contactMethod}.`);
}

// Adding event listener to the button
document.querySelector('.btn.btn-danger').addEventListener('click', shareAppLink);


// LOGIN SECTION
function handleLogin() {
    // Get the form elements
    const username = document.forms["newform"]["name"].value;
    const mobileNumber = document.forms["newform"]["mobno"].value;
    const password = document.forms["newform"]["pass"].value;

    // Basic validation
    if (username === "" || mobileNumber === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Example: Basic mobile number validation (should be a number and 10 digits)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(mobileNumber)) {
        alert("Please enter a valid mobile number (10 digits).");
        return;
    }

    // Simulate a successful login
    alert(`Login successful!\nWelcome, ${username}!`);
}

// Adding event listener to the login button
document.querySelector('.btn.btn-primary').addEventListener('click', handleLogin);

// SIGN UP SECTION

function handleSignup() {
    // Get the form elements
    const fullName = document.forms["signupform"]["name"].value;
    const mobileNumber = document.forms["signupform"]["mobno"].value;
    const email = document.forms["signupform"]["emailid"].value;
    const password = document.forms["signupform"]["pass"].value;
    const confirmPassword = document.forms["signupform"]["pass"].value; // Note: Change this to a separate name if needed

    // Basic validation
    if (fullName === "" || mobileNumber === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Validate mobile number (10 digits)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(mobileNumber)) {
        alert("Please enter a valid mobile number (10 digits).");
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Simulate a successful signup
    alert(`Signup successful!\nWelcome, ${fullName}!`);
}

// Adding event listener to the signup button
document.querySelector('.btn.btn-success').addEventListener('click', handleSignup);





// Contact US SECTION
type="text/javascript"
(function(){
    emailjs.init("8nQ0wQkpNz6lsTl2R");  //replace with ur emailJS user or public key
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value; 
    let mobile = document.getElementById('mobile').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let templateParams = {
        name: name,
        mobile: mobile,
        email: email,
        message: message
    };

    email.js.send('service_ceaujah','template_uuh2g3c', templateParams)
    .then(function(response) {
        document.getElementById('statusMessage').innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
     }, function(error) {
        document.getElementById('statusMessage').innerHTML = '<div class="alert alert-danger">Failed to send message. Please try again later.!</div>'
     });
});