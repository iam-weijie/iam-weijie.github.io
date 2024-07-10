// Frontpage animation
var typed = new Typed(".typing", {
  strings: ["ML Enthusiastic", "McGill Student"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Sidebar
let sidebar = document.querySelector(".sidebar");

// Contact form
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const emailInput = document.querySelector("#user_email");
const nameInput = document.querySelector("#user_name");
const messageInput = document.querySelector("#message");
// Get needed data from emailJS
const publicKey = "OcY4_jUcIu4KDpLEI";
const serviceID = "service_u48x7o7";
const templateID = "template_zci1a7u";
// Initialize emailJS with public key
emailjs.init(publicKey);
// Add submit event to the form
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBtn.innerText = "Just a moment...";
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  emailjs.send(serviceID, templateID, inputFields).then(
    () => {
      submitBtn.innerText = "Message sent successfully";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    },
    (error) => {
      console.log(error);
      submitBtn.innerText = "Something went wrong";
    }
  );
});
