document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from members.json file
    fetch('members.json')
        .then(response => response.json())
        .then(data => {
            // Filter members with Gold or Silver membership
            const qualifiedMembers = data.members.filter(member => {
                return member.membership === "Gold Membership" || member.membership === "Silver Membership";
            });

            // Shuffle qualified members
            shuffleArray(qualifiedMembers);

            // Display spotlight advertisements
            const spotlightContainer = document.querySelector('#spotlight-container');
            qualifiedMembers.slice(0, 3).forEach(member => {
                const ad = document.createElement('div');
                ad.classList.add('spotlight-ad');
                ad.innerHTML = `
                    <h2>${member.name}</h2>
                    <img src="${member.img}" alt="${member.name}">
                    <p>Address: ${member.address}</p>
                    <p>Phone Number: ${member.number}</p>
                    <a href="${member.url}" target="_blank">Visit Website</a>
                `;
                spotlightContainer.appendChild(ad);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to shuffle array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});
