document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // ✅ Prevent form from reloading the page

        // Retrieve the token from localStorage
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You must be logged in to book a service!");
            window.location.href = "login.html"; // Redirect to login page if not logged in
            return;
        }

        // Collect form data
        const bookingData = {
            service: document.getElementById("service").value,
            name: document.getElementById("name").value,
            mobile: document.getElementById("mobile").value,
            email: document.getElementById("email").value,
            address: document.getElementById("address").value,
            date: document.getElementById("date").value,
            time: document.getElementById("time").value,
        };


        console.log("Booking Data:", bookingData); // Debugging

        try {
            const response = await fetch("http://localhost:4000/api/booking/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`// ✅ Attach token
                },
                body: JSON.stringify(bookingData),
            });

            const data = await response.json();
            console.log("Response:", data); // Debugging

            if (response.ok) {
                alert("Booking successful! Redirecting...");
                window.location.href = "index.html"; // ✅ Redirect to home page
            } else {
                alert(`Booking failed: ${data.message}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    });
});