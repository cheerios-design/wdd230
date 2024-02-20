const gitUrl = "https://cheerios-design.github.io/wdd230/";
const linkUrl = "https://cheerios-design.github.io/wdd230/data/links.json";
const ul = document.querySelector("#assignment-list");
async function getLinks() {
    try {

        const response = await fetch(linkUrl);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeeks(data.weeks);
        } else {

            throw new Error(`Error: ${response.statusText}`);
        }
    } catch (error) {
    
        console.error('An error occurred:', error.message);
    }

    
    
}
getLinks();


const displayWeeks = (weeks) => {
    weeks.forEach((week) => {
        const li = document.createElement("li");
        
        li.textContent = `${week.week}: `;
        week.links.forEach ((link, index) => {
            const aTag = document.createElement("a");
            aTag.setAttribute('href', `${link.url}`);
            aTag.textContent = `${link.title}  `;
            const span = document.createElement('span');
            span.textContent =  ' | ';
            if (index === week.links.length - 1) {
                span.textContent = " "
            }
            li.appendChild(aTag);
            li.appendChild(span)
            
        });
        ul.appendChild(li);
        
        
    });
    

}        