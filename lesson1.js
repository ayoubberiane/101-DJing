document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.querySelector(".next-btn");

    nextButton.addEventListener("click", function () {
        // Redirect to Lesson 2 page
        window.location.href = "lesson2.html";
    });
});
