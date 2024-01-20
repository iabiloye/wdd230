// getdates.js

document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Set the copyright year in the first paragraph of the footer
    document.getElementById("copyrightYear").innerText = currentYear;

    // Set the last modified date in the second paragraph of the footer
    const lastModified = new Date(document.lastModified);
    document.getElementById("lastModified").innerText = lastModified.toLocaleString();
});