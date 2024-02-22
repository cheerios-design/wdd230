const bannerDiv = document.querySelector('#bannerdiv')

function isBannerDay() {
    const today = new Date();
    const dayOfWeek = today.getDay(); 
    return dayOfWeek >= 1 && dayOfWeek <= 3; 
}


function displayBanner() {
    if (isBannerDay()) {
        const bannerContainer = document.createElement('div');
        bannerContainer.id = 'banner-container';

        const banner = document.createElement('div');
        banner.id = 'banner';
        banner.innerHTML = `
            <p>❗️ Attend the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.❗️  <button id="close-banner">❌</button></p>
            
        `;
        banner.style.backgroundColor = "#081a3a";
        banner.style.padding = "2rem";
        banner.style.textAlign = "center";
        banner.style.position = "absolute";
        banner.style.top = '100px';
        

        bannerContainer.appendChild(banner);
        document.body.appendChild(bannerContainer);

        // Event listener to close the banner
        const closeButton = document.getElementById('close-banner');
        closeButton.addEventListener('click', () => {
            bannerContainer.style.display = 'none';
        });
    }
}
// console.log('Hello Worlddddddddd');

window.onload = displayBanner;