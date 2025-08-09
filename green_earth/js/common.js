document.querySelectorAll(".logo .mobile-menu").forEach(function(nav) {
    nav.addEventListener("click", function() {
        this.classList.toggle("active");

        document.querySelector(".menu").classList.toggle("active");
        document.querySelector("html").classList.toggle("overflow-hidden");
        document.querySelector("body").classList.toggle("overflow-hidden");
        document.querySelector("header").classList.toggle("overflow-hidden");
    });
});

// Marquee animation start {
const marquee = document.querySelector('.marquee');
const marqueeInner = document.querySelector('.marquee-inner');

// Step 1: Duplicate .marquee-part until we exceed 2x the container width
let containerWidth = marquee.offsetWidth;
let contentWidth = marqueeInner.scrollWidth;

while (contentWidth < containerWidth * 2) {
  marqueeInner.innerHTML += marqueeInner.innerHTML;
  contentWidth = marqueeInner.scrollWidth;
}

// Step 2: Animate with modifiers for smooth wrap-around
gsap.to(marqueeInner, {
  x: `-=${contentWidth / 2}`,
  duration: 50,
  ease: "none",
  repeat: -1,
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % (contentWidth / 2))
  }
});

// Marquee animation end }

document.querySelectorAll(".accordion-item").forEach(function(accordion) {
    accordion.addEventListener("click", function() {
        this.classList.toggle("active");
        
        document.querySelector(".accordion-header ").classList.toggle("active");
        document.querySelector(".flush-collapseOne").classList.toggle("active");
    });
});