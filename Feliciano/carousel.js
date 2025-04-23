document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const slides = Array.from(track.children);
  const indicatorContainer = document.querySelector(".carousel-indicators");

  let currentSlide = 0;
  let slideWidth;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    if (i === 0) dot.classList.add("active");
    indicatorContainer.appendChild(dot);
  });

  const indicators = Array.from(indicatorContainer.children);

  let isSliding = false;

  function updateSlidePosition(direction = "next") {
    if (isSliding) return;
    isSliding = true;
  
    slideWidth = slides[0].getBoundingClientRect().width;
  
    
    const offset = direction === "next" ? 100 : -100;
    track.style.transition = "none";
    track.style.transform = `translateX(calc(-${currentSlide * slideWidth}px + ${offset}px))`;
  
    
    void track.offsetWidth;
  
    
    track.style.transition = "transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)";
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  
    indicators.forEach(dot => dot.classList.remove("active"));
    indicators[currentSlide].classList.add("active");
  
    setTimeout(() => {
      isSliding = false;
    }, 500);
  }
  

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition("next");
  });
  
  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlidePosition("prev");
  });

  window.addEventListener("resize", updateSlidePosition);

  indicators.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentSlide = i;
      updateSlidePosition();
    });
  });
});
