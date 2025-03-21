document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedback-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Show the thank you message
        thankYouMessage.style.display = "block";

        // Delay the redirection for 2 seconds without affecting layout
        setTimeout(function () {
            window.location.href = "thank.html"; // Redirect to the thank you page
        }, 2000); // 2-second delay before redirect
    });
});
