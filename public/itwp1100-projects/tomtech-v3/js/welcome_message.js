document.addEventListener("DOMContentLoaded", function() {
    // Welcome Message
    const welcomeMessage = document.getElementById("welcomeMessage");
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    let timeOfDay;
    const hour = date.getHours();
    if (hour < 12) {
        timeOfDay = "morning";
    } else if (hour < 18) {
        timeOfDay = "afternoon";
    } else if (hour < 21) {
        timeOfDay = "evening";
    } else {
        timeOfDay = "night";
    }

    welcomeMessage.textContent = `Welcome! Today is ${formattedDate}. Have a great ${timeOfDay}!`;
});