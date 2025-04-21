document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    const errorMessageDiv = document.getElementById('errorMessage');
    errorMessageDiv.innerHTML = '';

    // Get form values
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation flags
    let isValid = true;

    // Validate Full Name
    if (fullName === '' || fullName.length < 2) {
        errorMessageDiv.innerHTML += '<p>Please enter a valid full name (at least 2 characters).</p>';
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessageDiv.innerHTML += '<p>Please enter a valid email address.</p>';
        isValid = false;
    }

    // Validate Phone Number
    const phonePattern = /^\d{10}$/; // Adjust pattern as needed (e.g., for international formats)
    if (!phonePattern.test(phone)) {
        errorMessageDiv.innerHTML += '<p>Please enter a valid phone number (10 digits).</p>';
        isValid = false;
    }

    // Validate Subject
    if (subject === '' || subject.length < 2) {
        errorMessageDiv.innerHTML += '<p>Please enter a valid subject (at least 2 characters).</p>';
        isValid = false;
    }

    // Validate Message
    if (message === '' || message.length < 10) {
        errorMessageDiv.innerHTML += '<p>Please enter a valid message (at least 10 characters).</p>';
        isValid = false;
    }

    // If all validations pass, you can submit the form or perform further actions
    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can submit the form or perform an AJAX request
        // document.getElementById('contact-form').submit(); // Uncomment to submit the form
    }
});