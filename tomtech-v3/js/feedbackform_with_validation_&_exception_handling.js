document.addEventListener("DOMContentLoaded", function () {
// Form Validation
const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function(event) {
    // Prevent form submission
    event.preventDefault();

    // Tracks the overall form validity
    let isValid = true;

    // Validate First Name
    const firstName = document.getElementById("firstName");
    if (!firstName.value || !/^[a-zA-Z]+$/.test(firstName.value)) {
        firstName.placeholder = "Please enter a valid first name (letters only)";
        firstName.value = ""; // Clear field to show placeholder
        firstName.classList.add("error-placeholder"); // Apply error style
        isValid = false;
    }  else {
        firstName.placeholder = "First Name"; // Reset placeholder
        firstName.classList.remove("error-placeholder"); // Remove error style
    }

    // Validate Last Name
    const lastName = document.getElementById("lastName");
    if (!lastName.value || !/^[a-zA-Z]+$/.test(lastName.value)) {
        lastName.placeholder = "Please enter a valild last name (letters only)";
        lastName.value = "";
        lastName.classList.add("error-placeholder"); // Apply error style
        isValid = false;
    }  else {
        lastName.placeholder = "Last Name";
        lastName.classList.remove("error-placeholder"); // Remove error style
    }

    // Validate Email
    const email = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value || !emailPattern.test(email.value)) {
        email.placeholder = "Please enter a valid email address (e.g., example@domain.com";
        email.value = "";
        email.classList.add("error-placeholder"); // Apply error style
        isValid = false;
    }  else {
        email.placeholder = "someemail@email.com";
        email.classList.remove("error-placeholder"); // Remove error style
    }

    // Validate Phone Number
    const phone = document.getElementById("phone");
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phone.value || !phonePattern.test(phone.value)) {
        phone.placeholder = "Please enter a valid phone number in the format: 555-555-5555";
        phone.value = "";
        phone.classList.add("error-placeholder"); // Apply error style
        isValid = false;
    } else {
        phone.placeholder = "123-456-7890";
        phone.classList.remove("error-placeholder"); // Remove error style
    }

    // Validate Interest Dropdown
    const interest = document.getElementById("interest");
    if (interest.selectedIndex === 0) { // Assuming first option is a placeholder
        interest.placeholder = "Please select an item in the list";
        interest.classList.add("error-placeholder"); // Apply error style
        isValid = false;
    } else {
        interest.placeholder = "Please select an item in the list";
        interest.classList.remove("error-placeholder"); // Remove error style
    }

    // Validate Feedback Box
    const comments = document.getElementById("comments");
    const commentsPattern = /^[a-zA-Z0-9 .,!?'"()-]{10,500}$/;
    if (!comments.value || !commentsPattern.test(comments.value)) {
        comments.placeholder = "Feedback should be 10-500 characters.";
        comments.value = "";
        comments.classList.add("error-placeholder"); // Apply error style
        isValid = false;
    } else {
        comments.placeholder = "Enter feedback here.";
        comments.classList.remove("error-placeholder"); // Remove error style
    }

    // Submit the form if valid
    if (isValid) {
        form.reset(); // Clear the form

        // Show a success message
        alert("Thank you for your feedback!");
    }
    });
});