document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const password1 = form.querySelector("#password").value;
        const password2 = form.querySelector("#confirm_password").value;

        if (password1 !== password2) {
            alert("Passwords do not match! Please try again.");
            form.querySelector("#password").value = "";
            form.querySelector("#confirm_password").value = "";
            form.querySelector("#password").focus();
        }


        form.submit();
    });
});
