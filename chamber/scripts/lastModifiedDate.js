document.addEventListener('DOMContentLoaded', function () {
    // Get the last modified date of the current page
    var lastModifiedDate = document.lastModified;

    // Display the last modified date in the designated element in the footer
    var lastModifiedElement = document.getElementById('lastmodified');
    lastModifiedElement.textContent = "Last Modified: " + lastModifiedDate;
});
