document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    if (!searchForm || !searchInput) return;

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const userLocation = searchInput.value.trim().toLowerCase();
        console.log("📍 User searched:", userLocation);

        const availableLocations = [
            "jule solapur", "new rto area", "bombay park", "saiful", "nirmiti vihar",
            "indira nagar", "rajaswa nagar", "indradhanu", "sun city", "avanti nagar",
            "vasat vihar", "railway line", "antrolikar nagar", "aasra"
        ];

        if (availableLocations.includes(userLocation)) {
            alert(` Service is available in ${userLocation}`);
        } else {
            alert("Sorry, service is not available at your location.");
        }
    });
});