// Handle next button click to ensure smooth transition to next lesson
document.querySelector('.button').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent default link behavior
    window.location.href = "lesson2.html";  // Redirect to next lesson (Lesson 2)
});
