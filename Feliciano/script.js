// fader script function
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".feature-card, .card, .room-card, .info-card");

  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, {
    threshold: 0.25
  });

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});