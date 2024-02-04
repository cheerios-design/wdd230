const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    // Check if the input is not blank
    if (input.value.trim() !== "") {
        // Create a new list item
        const listItem = document.createElement('li');
        
        // Add the entered chapter to the list item
        listItem.textContent = input.value;

        // Create a delete button for each list item
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'; // Set the button text content to ❌

        // Add a CSS class to the delete button for styling
        deleteButton.classList.add('delete');

        // Add an event listener to the delete button that removes the corresponding list item
        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Append the list item to the unordered list
        list.appendChild(listItem);

        // Clear the input field
        input.value = "";

        // Return focus to the input field
        input.focus();
    } else {
        // If the input is blank, provide a message or do nothing
        // For now, just log a message to the console
        console.log("Input is blank. Please enter a chapter.");
        
    }
});
