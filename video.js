document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.querySelector(".next-btn");

    nextButton.addEventListener("click", function () {
        // Redirect to Lesson 1 page
        window.location.href = "lesson1.html";
    });
});
