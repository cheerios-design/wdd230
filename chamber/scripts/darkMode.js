const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const h1 = document.querySelector("main h1")

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌚")) {
		body.style.color = "#203864";
        h1.style.color = "#fefefe"
        main.style.background = "#203864";
		main.style.color = "#f84c2c";
		modeButton.textContent = "🔆";
	} else {
		body.style.color = "#fefefe";
        h1.style.color = "#203864"
        main.style.background = "#fefefe";
		main.style.color = "#000";
		modeButton.textContent = "🌚";
	}
});
