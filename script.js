// Contact Form Submission Handling
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            document.getElementById("response-message").textContent = "Thank you for contacting us!";
        });
    }
});
