function lastUpdated() {
  let currentYear = new Date().getFullYear();
  document.getElementById("currentyear").textContent = currentYear;

  let lastModified = document.lastModified;
  document.getElementById(
    "lastmodified"
  ).textContent = `Last Modified: ${lastModified}`;
}

lastUpdated();
