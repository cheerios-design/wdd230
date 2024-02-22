const nav = document.querySelector('banner-container');

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
            <p>❗️ Watch the highlights of our President's conference on Wednesday at 7:00 p.m. ❗️ <button id="close-banner">❌</button></p>
        `;
        banner.style.backgroundColor = "#62ab32";
        banner.style.padding = "2rem";
        banner.style.textAlign = "center";
        banner.style.position = "relative";
        banner.style.top = '150px';
        banner.style.height = '150px';
        banner.style.display = 'flex'
        banner.style.flexDirection = 'row'

        bannerContainer.appendChild(banner);
        document.body.insertBefore(bannerContainer, nav.nextSibling);

        // Event listener to close the banner
        const closeButton = document.getElementById('close-banner');
        closeButton.addEventListener('click', () => {
            bannerContainer.style.display = 'none';
        });
    }
}

window.onload = displayBanner;
