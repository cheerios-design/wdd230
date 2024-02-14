document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("join-form");

    form.addEventListener("submit", function(event) {
        const requiredFields = form.querySelectorAll("[required]");
        let isValid = true;

        requiredFields.forEach(function(field) {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add("error");
            } else {
                field.classList.remove("error");
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert("Please fill in all required fields.");
        }
    });
});
