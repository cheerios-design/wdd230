const articleElement = document.querySelector('.members');
let membersUrl = "https://zchexmix.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    try {
    
        const response = await fetch(membersUrl);

        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayMembers(data.members);
            displaySpotlights(data.members);
        } else {

            throw new Error(`Error: ${response.statusText}`);
        }
    } catch (error) {
    
        console.error('An error occurred:', error.message);
    }

}
getMembers();

const displayMembers = (members)=> {
    members.forEach(member => {
        const sect = document.createElement('section');
        const imgElement = document.createElement('img');
        const bizName = document.createElement('h4');
        const bizAddress = document.createElement('p');
        const bizNum = document.createElement('p');
        const bizMembership = document.createElement('p');
        const bizSite = document.createElement('a');

        bizName.setAttribute('id', 'biz-name');
        bizAddress.setAttribute('id', 'address');
        bizNum.setAttribute('id', 'number');
        bizSite.setAttribute('id', 'biz-site');

        imgElement.setAttribute('src', member.img);
        imgElement.setAttribute('alt', 'Company Logo');
        imgElement.setAttribute('width', '240');
        imgElement.setAttribute('height', 'auto');
        bizName.textContent = member.name;
        bizAddress.textContent = member.address;
        bizNum.textContent = member.number;
        bizSite.textContent = `${member.name} Website`;
        bizSite.setAttribute('href', member.url);
        bizMembership.textContent = member.membership;

        articleElement.appendChild(sect);
        sect.appendChild(imgElement);
        sect.appendChild(bizName);
        sect.appendChild(bizAddress);
        sect.appendChild(bizNum);
        sect.appendChild(bizSite);
        sect.appendChild(bizMembership);

    });
}