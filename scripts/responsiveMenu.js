// Get references to the hamburger button and the main menu
const hamburgerButton = document.querySelector('#hamburger-button');
const mainMenu = document.querySelector('.nav-links');

// Function to toggle the 'open' class on the main menu
const toggleMenu = () => {
    mainMenu.classList.toggle('open');

    // Change the hamburger symbol immediately when toggling
    hamburgerButton.innerHTML = mainMenu.classList.contains('open') ? '✖' : '&#8801;';
};

// Add a click event listener to the hamburger button
hamburgerButton.addEventListener('click', toggleMenu);

// Optionally, close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!mainMenu.contains(event.target) && event.target !== hamburgerButton) {
        toggleMenu();
    }
});

// Change the hamburger symbol to 'X' when the menu is open
mainMenu.addEventListener('transitionend', () => {
    if (mainMenu.classList.contains('open')) {
        hamburgerButton.innerHTML = '✖';
    } else {
        // Delay changing back to the default symbol slightly to allow for smooth transition
        setTimeout(() => {
            hamburgerButton.innerHTML = '&#8801;';
        }, 100);
    }
});
