const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
});

document
  .getElementById("contact-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document
      .querySelector(".section_contact")
      .scrollIntoView({ behavior: "smooth" });
  });

document
  .getElementById("services-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document
      .querySelector(".section_featured")
      .scrollIntoView({ behavior: "smooth" });
  });
document
  .getElementById("about-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document
      .querySelector(".section_trusted")
      .scrollIntoView({ behavior: "smooth" });
  });
