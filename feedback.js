document.addEventListener("DOMContentLoaded", () => {
    // Message on page load
    console.log("Welcome to 101 DJing Course! Let's get started!");

    // Smooth scroll on button click
    const startButton = document.querySelector('.cta-btn');
    if (startButton) {
        startButton.addEventListener('click', () => {
            document.querySelector('#level1').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Button hover effect (scale animation)
    const levelButtons = document.querySelectorAll('.level-btn');
    levelButtons.forEach((button) => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Confirm pop-up before navigating to a level
    const level1Btn = document.querySelector('#level1 .level-btn');
    const level2Btn = document.querySelector('#level2 .level-btn');
    const level3Btn = document.querySelector('#level3 .level-btn');

    function showConfirmation(level) {
        const confirmation = confirm(Are you sure you want to start Level ${level}?);
        if (confirmation) {
            window.location.href = level${level}.html; // Redirect to the corresponding level page
        }
    }

    if (level1Btn) {
        level1Btn.addEventListener('click', () => showConfirmation(1));
    }

    if (level2Btn) {
        level2Btn.addEventListener('click', () => showConfirmation(2));
    }

    if (level3Btn) {
        level3Btn.addEventListener('click', () => showConfirmation(3));
    }

    // Example of progress tracking (for future use)
    const userProgress = JSON.parse(localStorage.getItem('userProgress')) || { level: 1, completed: false };

    function updateProgress() {
        const level = userProgress.level;
        const levelText = document.querySelector(.level#level${level} .level-header span);
        if (levelText) {
            levelText.textContent += ' - In Progress'; // Displaying progress for the current level
        }
    }

    updateProgress();

    // Save progress when user clicks the "Start Level" button
    const levelBtns = document.querySelectorAll('.level-btn');
    levelBtns.forEach((button, index) => {
        button.addEventListener('click', () => {
            userProgress.level = index + 1;
            userProgress.completed = false; // Reset completion status on level start
            localStorage.setItem('userProgress', JSON.stringify(userProgress));
        });
    });

    // Scroll to top button functionality (for quick navigation)
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.classList.add('scroll-top-btn');
    scrollTopBtn.innerHTML = '↑';
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    // Show the scroll to top button when user scrolls down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
});
