document.addEventListener('DOMContentLoaded', function() {
    const membershipLevelSelect = document.getElementById('membership-level');
    const benefitsTitle = document.getElementById('title');
    const benefitsDescription = document.getElementById('descriptionBenefits');

    // Define an object to store the descriptions for each membership level
    const membershipBenefits = {
        NP: {
            title: "Non-profit Membership",
            description: "Non-profit organizations receive essential support and visibility, including complimentary advertisement space and exclusive access to networking events."
        },
        Bronze: {
            title: "Bronze Membership",
            description: "Enjoy foundational support with discounted business services, priority event registration, and featured spotlights for increased visibility."
        },
        Silver: {
            title: "Silver Membership",
            description: "Expand your influence with specialized training workshops, VIP networking receptions, and corporate recognition at Chamber events."
        },
        Gold: {
            title: "Gold Membership",
            description: "Gain executive-level support with personalized business consultations, exclusive networking opportunities, and priority access to premium Chamber events."
        }
    };

    // Function to update the benefits description based on the selected membership level
    function updateBenefitsDescription() {
        const selectedLevel = membershipLevelSelect.value;
        benefitsTitle.textContent = membershipBenefits[selectedLevel].title;
        benefitsDescription.textContent = membershipBenefits[selectedLevel].description;
    }

    // Call the updateBenefitsDescription function when the page loads
    updateBenefitsDescription();

    // Add an event listener to the membership level select element to update the benefits description when the selection changes
    membershipLevelSelect.addEventListener('change', updateBenefitsDescription);
});
