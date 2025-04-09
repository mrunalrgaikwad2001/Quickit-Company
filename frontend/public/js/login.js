document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Login script loaded!");

    const loginForm = document.getElementById("loginForm");
    
    if (loginForm) {
        console.log("✅ Login form found!");
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            console.log("🟢 Login form submitted!");

            const identifier = document.getElementById("identifier").value;
            const password = document.getElementById("password").value;

            try {
                const response = await fetch("http://localhost:4000/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ identifier, password }),
                });

                const data = await response.json();
                console.log("🔵 Login response:", data);

                if (response.ok) {
                    localStorage.setItem("token", data.token);
                    alert("✅ Login successful!");
                    window.location.href = "index.html"; // Redirect to home
                } else {
                    alert(data.message || "❌ Login failed");
                }
            } catch (error) {
                console.error("🔴 Error during login:", error);
                alert("⚠ Something went wrong. Please try again.");
            }
        });
    } else {
        console.error("❌ Login form not found!");
    }
});