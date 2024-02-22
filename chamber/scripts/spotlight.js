// spotlight.js

// Function to filter members with silver or gold membership levels
function filterMembers(members) {
    return members.filter(member => member.membership.toLowerCase().includes('silver') || member.membership.toLowerCase().includes('gold'));
}

// Function to randomly select two or three members
function selectRandomMembers(filteredMembers) {
    const selectedMembers = [];

    while (selectedMembers.length < 2 && filteredMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredMembers.length);
        selectedMembers.push(filteredMembers.splice(randomIndex, 1)[0]);
    }

    return selectedMembers;
}

// Function to display spotlight advertisements
function displaySpotlightAdvertisements() {
    // Fetch members data from members.json file
    fetch('members.json')
        .then(response => response.json())
        .then(data => {
            const filteredMembers = filterMembers(data.members);
            const selectedMembers = selectRandomMembers(filteredMembers);
            const spotlightContainer = document.getElementById('spotlight-container');

            selectedMembers.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.classList.add('spotlight-ad');

                const memberName = document.createElement('h2');
                memberName.textContent = member.name;
                memberDiv.appendChild(memberName);

                const memberImg = document.createElement('img');
                memberImg.src = member.img;
                memberImg.alt = member.name;
                memberDiv.appendChild(memberImg);

                const memberAddress = document.createElement('p');
                memberAddress.textContent = member.address;
                memberDiv.appendChild(memberAddress);

                const memberUrl = document.createElement('a');
                memberUrl.href = member.url;
                memberUrl.textContent = 'Visit Website';
                memberDiv.appendChild(memberUrl);

                spotlightContainer.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error fetching members data:', error));
}

// Display spotlight advertisements when the page loads
window.onload = displaySpotlightAdvertisements;
