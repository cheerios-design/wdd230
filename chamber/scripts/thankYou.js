document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("join-form");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission

      // Redirect to thankyou.html
      window.location.href = "thankyou.html";
    });
  });