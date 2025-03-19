// Get the form and the thank you message element
const form = document.getElementById('feedback-form');
const thankYouMessage = document.getElementById('thank-you-message');

// Function to handle form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect form data (if needed, you can process it here)
    const formData = new FormData(form);
    // Optionally, you can log the form data to the console
    console.log('Form Data Submitted:', formData);

    // Hide the form and show the thank you message
    form.style.display = 'none';
    thankYouMessage.style.display = 'block';
});
