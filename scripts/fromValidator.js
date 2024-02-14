document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;
        const email = document.getElementById('email').value;

        // Validate username
        if (!isValidUsername(username)) {
            alert('Username must be at least 8 characters long and can only be alphanumeric.');
            return;
        }

        // Validate password
        if (!isValidPassword(password)) {
            alert('Password must be at least 8 characters long and can only be alphanumeric.');
            return;
        }

        // Validate email
        if (!isValidEmail(email)) {
            alert('Email must be from the byui.edu domain.');
            return;
        }

        // Validate password match
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            document.getElementById('password').value = '';
            document.getElementById('confirm_password').value = '';
            document.getElementById('password').focus();
            return;
        }

        // If all validations pass, submit the form
        form.submit();
    });

    function isValidUsername(username) {
        return /^[a-zA-Z0-9]{8,}$/.test(username);
    }

    function isValidPassword(password) {
        return /^[a-zA-Z0-9]{8,}$/.test(password);
    }

    function isValidEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@byui\.edu$/.test(email);
    }
});
