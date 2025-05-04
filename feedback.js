document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedback-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Show the thank you message
        thankYouMessage.style.display = "block";

        // Delay the redirection for 5 seconds without affecting layout
        setTimeout(function () {
            window.location.href =  "index.html"; // Redirect to homepage
        }, 5000); // 5-second delay before redirect
    });
});
