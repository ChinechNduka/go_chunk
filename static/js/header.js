const toggleBtn = document.querySelector(".nav--toggle-btn");
const navLinks = document.querySelector(".nav-links");

if (toggleBtn) {
  toggleBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}
