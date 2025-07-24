// Typed.js text effect
new Typed("#typed-text", {
  strings: ["Charan", "Web Developer", "Data Analyst"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Dark Mode Toggle
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Scroll to top button
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
