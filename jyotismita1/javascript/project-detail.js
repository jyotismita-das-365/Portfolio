const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -30px 0px",
    },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

const parallaxPhotos = document.querySelectorAll(".parallax-photo");

if (parallaxPhotos.length > 0) {
  const updateParallax = () => {
    const viewportCenter = window.innerHeight / 2;

    parallaxPhotos.forEach((photo) => {
      const bounds = photo.getBoundingClientRect();
      const offset = bounds.top + bounds.height / 2 - viewportCenter;
      const move = Math.max(-18, Math.min(18, -offset * 0.04));
      photo.style.transform = `translateY(${move}px)`;
    });
  };

  updateParallax();
  window.addEventListener("scroll", updateParallax, { passive: true });
  window.addEventListener("resize", updateParallax);
}
