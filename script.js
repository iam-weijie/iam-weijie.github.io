// Frontpage animation
var typed = new Typed(".typing", {
  strings: ["ML Enthusiastic", "McGill Student"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Sidebar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let mainContent = document.querySelector(".main-content");
// Sidebar stays hidden when first load on mobile
if (window.innerWidth <= 768) {
  sidebar.classList.toggle("hidden");
}
btn.onclick = function () {
  sidebar.classList.toggle("hidden");
  mainContent.classList.toggle("shift-right");
};
// Change tooltip color when in the skills section
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const skillsSection = document.querySelector(".skills");

  window.addEventListener("scroll", function () {
    const skillsTop = skillsSection.getBoundingClientRect().top;
    const skillsBottom = skillsSection.getBoundingClientRect().bottom;

    if (
      skillsTop <= window.innerHeight / 3 &&
      skillsBottom >= window.innerHeight / 3
    ) {
      sidebar.classList.add("skills-section");
    } else {
      sidebar.classList.remove("skills-section");
    }
  });
});

// Slider
let items = document.querySelectorAll(".projects .slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".projects .thumbnail .item");
// Config param
let countItem = items.length;
let itemActive = 0;
// Event next click
next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};
//event prev click
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};
// Auto run slider
let refreshInterval = setInterval(() => {
  next.click();
}, 5000);
function showSlider() {
  // remove item active old
  let itemActiveOld = document.querySelector(
    ".projects .slider .list .item.active"
  );
  let thumbnailActiveOld = document.querySelector(
    ".projects .thumbnail .item.active"
  );
  itemActiveOld.classList.remove("active");
  thumbnailActiveOld.classList.remove("active");
  // active new item
  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");
  // clear auto time run slider
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000);
}
// Click thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});

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
  submitBtn.innerText = "One moment...";
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  emailjs.send(serviceID, templateID, inputFields).then(
    () => {
      submitBtn.innerText = "Sent successfully";
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
