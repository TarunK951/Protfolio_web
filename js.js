// function toggleMenu() {
//   document.getElementById("mobileMenu").classList.toggle("active");
// }
const menuButton = document.querySelector(".menu-button");
const head = document.querySelector(".navBar");

menuButton.addEventListener("click", () => {
  head.classList.toggle("show-menu");
});

document.querySelectorAll(".icon").forEach((button) => {
  button.addEventListener("touchstart", () => {
    button.style.animation = "rotateCube 1s linear infinite";
  });

  button.addEventListener("touchend", () => {
    button.style.animation = "none";
  });
});
document.querySelectorAll(".icon").forEach((button) => {
  button.addEventListener("touchstart", () => {
    button.classList.add("rotating"); // Start Shine Effect
    button.style.animation = "rotateCube 1s linear infinite"; // Start Rotation
  });

  button.addEventListener("touchend", () => {
    button.classList.remove("rotating"); // Stop Shine Effect
    button.style.animation = "none"; // Stop Rotation
  });
});

//submitting data ...............
function sendEmail(event) {
  event.preventDefault(); // Prevent form refresh

  // Get form data
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let website = document.getElementById("website").value;
  let message = document.getElementById("message").value;

  // Check if all fields are filled
  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }
}

// Send email using emailjs

// Initialize EmailJS with your Public Key
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("pZoKlOxSnjpqbwJnI"); // Replace with your public key
});

// Function to send email
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let website = document.getElementById("website").value || "N/A"; // Optional
    let message = document.getElementById("message").value;

    let templateParams = {
      name: name,
      email: email,
      website: website,
      message: message,
    };

    emailjs.send("service_yebc3yi", "template_oiln25g", templateParams).then(
      function (response) {
        alert("✅ Email sent successfully!");
        document.getElementById("contactForm").reset(); // Clear form
      },
      function (error) {
        alert("❌ Email failed to send. Please try again.");
        console.error("EmailJS Error:", error);
      }
    );
  });
