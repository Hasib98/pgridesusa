document.getElementById("contact-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("services-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("services-section").scrollIntoView({ behavior: "smooth" });
});
