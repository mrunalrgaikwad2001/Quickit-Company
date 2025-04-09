document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm"); 
    
    if (signupForm) { // ✅ Check if form exists before adding event listener
        signupForm.addEventListener("submit", async function (event) {
            event.preventDefault(); // ✅ Prevent form from refreshing the page
            console.log("Signup form submitted!"); // Debugging

            // Collect form data
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const mobile = document.getElementById("mobile").value;
            const password = document.getElementById("password").value;

            try {
                const response = await fetch("http://localhost:4000/api/auth/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, mobile, password }),
                });

                const data = await response.json();
                console.log("Signup Response:", data); // Debugging

                if (response.ok) {
                    if (data.token) {
                        localStorage.setItem("token", data.token); // ✅ Store token
                        console.log("Token Stored:", localStorage.getItem("token")); // Debugging
                        alert("Signup Successful!");
                        window.location.href = "index.html"; // ✅ Redirect to home page
                    } else {
                        alert("Token not received");
                    }
                } else {
                    alert(data.message || "Signup Failed");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Something went wrong");
            }
        });
    } else {
        console.error("Signup form not found!"); // Debugging message
    }
});