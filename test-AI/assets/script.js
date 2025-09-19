// Contact form submission
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    formMsg.classList.remove("hidden");
    contactForm.reset();
    setTimeout(() => {
      formMsg.classList.add("hidden");
    }, 4000);
  });
}
