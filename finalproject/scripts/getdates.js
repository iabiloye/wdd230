

document.addEventListener("DOMContentLoaded", function () {
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModifiedDate = document.lastModified;

    lastModifiedElement.textContent = lastModifiedDate;
});
