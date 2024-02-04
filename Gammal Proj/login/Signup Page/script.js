document.addEventListener("DOMContentLoaded", function () {
    var signUpPage = document.getElementById("signUpPage");
    var registrationPage = document.getElementById("registrationPage");
    var signUpForm = document.getElementById("signUpForm");
    var registrationForm = document.getElementById("registrationForm");
    var signUpButton = document.getElementById("signUpButton");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPassword");
    var emailInput = document.getElementById("emailInput");
    var emailWarning = document.getElementById("emailWarning");
    var passwordWarning = document.getElementById("passwordWarning");
    var confirmPasswordWarning = document.getElementById("confirmPasswordWarning");
    var emailMessage = document.getElementById("emailMessage");
    var passwordMessage = document.getElementById("passwordMessage");
    var confirmPasswordMessage = document.getElementById("confirmPasswordMessage");

    // Function to validate email format
    function isValidEmail(email) {
        return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
    }

    // Function to show/hide email warning
    function toggleEmailWarning() {
        if (!isValidEmail(emailInput.value)) {
            emailWarning.textContent = "Please enter a valid email.";
            emailWarning.style.display = "inline";
            emailInput.style.borderColor = "red";
            emailMessage.textContent = "";
        } else {
            emailWarning.textContent = "";
            emailWarning.style.display = "none";
            emailInput.style.borderColor = "";
            emailMessage.textContent = "Email is valid.";
        }
    }

    // Function to show/hide password warning
    function togglePasswordWarning() {
        if (passwordInput.value.length < 8 || passwordInput.value.length > 16) {
            passwordWarning.textContent = "Password must be between 8 and 16 characters.";
            passwordWarning.style.display = "inline";
            passwordInput.style.borderColor = "red";
            passwordMessage.textContent = "";
        } else {
            passwordWarning.textContent = "";
            passwordWarning.style.display = "none";
            passwordInput.style.borderColor = "";
            passwordMessage.textContent = "Password length is valid.";
        }
    }

    // Function to show/hide confirm password warning
    function toggleConfirmPasswordWarning() {
        if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordWarning.textContent = "Passwords do not match.";
            confirmPasswordWarning.style.display = "inline";
            confirmPasswordInput.style.borderColor = "red";
            confirmPasswordMessage.textContent = "";
        } else {
            confirmPasswordWarning.textContent = "";
            confirmPasswordWarning.style.display = "none";
            confirmPasswordInput.style.borderColor = "";
            confirmPasswordMessage.textContent = "Passwords match.";
        }
    }

    // Function to highlight empty input fields with a warning color
    function highlightEmptyFields() {
        // Highlight empty email input field
        if (emailInput.value === "") {
            emailInput.style.borderColor = "red";
            emailMessage.textContent = "You must enter a valid email.";
        } else {
            emailInput.style.borderColor = "";
            emailMessage.textContent = "Email is valid.";
        }

        // Highlight empty password input field
        if (passwordInput.value === "") {
            passwordInput.style.borderColor = "red";
            passwordMessage.textContent = "You must enter a password.";
        } else {
            passwordInput.style.borderColor = "";
            passwordMessage.textContent = "Password length is valid.";
        }

        // Highlight empty confirm password input field
        if (confirmPasswordInput.value === "") {
            confirmPasswordInput.style.borderColor = "red";
            confirmPasswordMessage.textContent = "You must confirm your password.";
        } else {
            confirmPasswordInput.style.borderColor = "";
            confirmPasswordMessage.textContent = "Passwords match.";
        }
    }

    // Function to enable/disable the sign-up button
    function toggleSignUpButton() {
        if (isValidEmail(emailInput.value) && 
            passwordInput.value.length >= 8 && passwordInput.value.length <= 16 &&
            passwordInput.value === confirmPasswordInput.value) {
            signUpButton.disabled = false;
        } else {
            signUpButton.disabled = true;
        }
    }

    // Function to highlight empty fields on sign-up button click
    function highlightEmptyFieldsOnSignUp() {
        // Highlight empty email input field
        if (emailInput.value === "") {
            emailInput.style.borderColor = "red";
            emailMessage.textContent = "You must enter a valid email.";
        }

        // Highlight empty password input field
        if (passwordInput.value === "") {
            passwordInput.style.borderColor = "red";
            passwordMessage.textContent = "You must enter a password.";
        }

        // Highlight empty confirm password input field
        if (confirmPasswordInput.value === "") {
            confirmPasswordInput.style.borderColor = "red";
            confirmPasswordMessage.textContent = "You must confirm your password.";
        }
    }

    // Add input event listeners for real-time validation
    emailInput.addEventListener("input", function () {
        toggleEmailWarning();
        toggleSignUpButton();
    });

    passwordInput.addEventListener("input", function () {
        togglePasswordWarning();
        toggleConfirmPasswordWarning();
        toggleSignUpButton();
    });

    confirmPasswordInput.addEventListener("input", function () {
        toggleConfirmPasswordWarning();
        toggleSignUpButton();
    });

    signUpButton.addEventListener("click", function () {
        // Highlight empty input fields with a warning color
        highlightEmptyFieldsOnSignUp();

        // Check for email format and password match
        if (isValidEmail(emailInput.value) &&
            passwordInput.value.length >= 8 && passwordInput.value.length <= 16 &&
            passwordInput.value === confirmPasswordInput.value) {
            // Hide the sign-up page
            signUpPage.style.display = "none";
            // Show the registration page
            registrationPage.style.display = "block";
        }
    });
});