function showAlert() {
  alert("Welcome to WallArt Gallery!");
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("formMessage").innerText = "✅ Thank you! Your message has been sent.";
  this.reset();
});
