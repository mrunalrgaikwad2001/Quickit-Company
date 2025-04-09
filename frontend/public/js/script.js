document.addEventListener("DOMContentLoaded", () => {
    const authButtons = document.getElementById("auth-buttons");
    const logoutBtn = document.getElementById("logoutBtn");

    const token = localStorage.getItem("token");

    if (authButtons && logoutBtn) { // ✅ Check if elements exist
        if (token) {
            // User is logged in, show logout button
            authButtons.style.display = "none";
            logoutBtn.style.display = "inline-block";
        }

        // Logout functionality
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("token");
            window.location.href = "index.html"; // Redirect to homepage
        });
    } else {
        console.error("❌ auth-buttons or logoutBtn not found in the DOM!");
    }
});