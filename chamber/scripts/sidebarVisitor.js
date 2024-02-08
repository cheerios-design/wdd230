document.addEventListener('DOMContentLoaded', function () {
    // Get the current date
    var currentDate = new Date();
    var currentDateString = currentDate.toDateString(); // Convert to string for comparison

    // Get the last visit date from localStorage
    var lastVisitDateString = localStorage.getItem('lastVisitDate');

    if (lastVisitDateString === null) {
        // First visit
        displaySidebarMessage("Welcome! Let us know if you have any questions.");
    } else {
        var lastVisitDate = new Date(lastVisitDateString);
        var timeDifference = currentDate - lastVisitDate;
        var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

        if (daysDifference === 0) {
            displaySidebarMessage("Back so soon! Awesome!");
        } else {
            var message;
            if (daysDifference === 1) {
                message = "You last visited 1 day ago.";
            } else {
                message = "You last visited " + daysDifference + " days ago.";
            }
            displaySidebarMessage(message);
        }
    }

    // Store the current visit date in localStorage
    localStorage.setItem('lastVisitDate', currentDateString);
});

function displaySidebarMessage(message) {
    var visitorDiv = document.querySelector('.visitor');
    var messageElement = document.createElement('p');
    messageElement.textContent = message;
    visitorDiv.appendChild(messageElement);
}
