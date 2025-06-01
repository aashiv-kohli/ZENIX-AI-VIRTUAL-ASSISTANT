
// DOM Elements
const getStartedBtn = document.getElementById('getStartedBtn');
const tryItBtn = document.getElementById('tryItBtn');
const nameInputModal = document.getElementById('nameInputModal');
const nameInputForm = document.getElementById('nameInputForm');
const userNameInput = document.getElementById('userNameInput');
const welcomeMessage = document.getElementById('welcomeMessage');
const closeBtns = document.querySelectorAll('.close');
const logoutBtn = document.getElementById('logoutBtn');

// Open Name Input Modal
getStartedBtn.addEventListener('click', () => {
    const userName = sessionStorage.getItem('userName');
    if (!userName) {
        // If the user hasn't entered their name, show the name input modal
        nameInputModal.style.display = 'block';
    } else {
        // If the user has already entered their name, open the assistant page
        window.open('assistant.html', '_blank'); 
    }
});

// Try It Button Click
tryItBtn.addEventListener('click', () => {
    nameInputModal.style.display = 'block';
});

// Close Modals
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        nameInputModal.style.display = 'none';
    });
});

// Name Input Form Submission
nameInputForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const userName = userNameInput.value.trim();

    if (!userName) {
        alert('Please enter your name.');
        return;
    }

    // Store the user's name in sessionStorage
    sessionStorage.setItem('userName', userName);
    nameInputModal.style.display = 'none';
    updateUI();
});

// Logout
logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('userName');
    updateUI();
});

// Update UI based on login status
function updateUI() {
    const userName = sessionStorage.getItem('userName');

    if (userName) {
        // Display the user's name with typing animation
        welcomeMessage.textContent = ''; // Clear the text
        welcomeMessage.style.animation = 'none'; // Reset animation
        setTimeout(() => {
            welcomeMessage.style.animation = 'typing 3s steps(40, end)';
            welcomeMessage.textContent = `Welcome, ${userName}`; // Display the user's name
        }, 10);

        // Show the "Get Started" button and hide the "Try It" button
        getStartedBtn.style.display = 'block';
        tryItBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
    } else {
        welcomeMessage.textContent = 'Welcome to Z E N I X';
        // Show the "Try It" button and hide the "Get Started" button
        tryItBtn.style.display = 'block';
        getStartedBtn.style.display = 'none';
        logoutBtn.style.display = 'none';
    }
}
const themeToggleBtn = document.getElementById("themeToggleBtn");
const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set theme based on system preference or saved choice
function setInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    const theme = savedTheme || (userPrefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
    updateThemeIcon(theme);
}

// Toggle between light and dark
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
}

// Change icon based on theme
function updateThemeIcon(theme) {
    themeToggleBtn.innerHTML = theme === "dark"
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
}

// Event listener
themeToggleBtn.addEventListener("click", toggleTheme);

// On load
setInitialTheme();


// Initialize UI
updateUI();
