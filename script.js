// Show button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// Scroll to top smoothly
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll for navbar
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* ========================= */
/* Back to Top Button */
/* ========================= */

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ========================= */
/* Smooth Scroll Navigation */
/* ========================= */

document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* ========================= */
/* Reveal Animation on Scroll */
/* ========================= */

const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* ========================= */
/* Feedback Popup */
/* ========================= */

function showPopup() {
  document.getElementById('popupMessage').classList.add('show');
}

function closePopup() {
  document.getElementById('popupMessage').classList.remove('show');
}

/* ========================= */
/* Contact Form Action */
/* ========================= */

// Initialize EmailJS
(function() {
    emailjs.init("-Goi9RSvpYhgg-GXo"); // example: emailjs.init("A1b2C3D4.....");
})();

window.onload = function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop page reload

        // Collect form data
        const templateParams = {
            name: document.getElementById("from_name").value,
            email: document.getElementById("from_email").value,
            //subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        // Send email
        emailjs.send("service_f1no7th", "template_u1pyh47", templateParams)
            .then(
                function (response) {
                    alert("Message sent successfully!");
                    console.log("SUCCESS!", response.status, response.text);
                    form.reset(); // Clear form
                },
                function (error) {
                    alert("Failed to send message. Check console for error.");
                    console.error("FAILED...", error);
                }
            );
    });
};

