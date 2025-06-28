// Fallback image logic
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed.");

  const images = document.querySelectorAll('.project-card img');
  console.log(`Found ${images.length} project images.`);

  images.forEach((img, index) => {
    console.log(`Image ${index + 1}: src = ${img.src}`);

    img.onerror = () => {
      console.warn(`Image failed to load: ${img.src}`);
      img.src = 'assets/images/placeholder.jpg';
      console.log(`Fallback placeholder image set for image ${index + 1}`);
    };

    // Force the error handler if image is already broken
    if (!img.complete || img.naturalWidth === 0) {
      console.warn(`Image ${index + 1} is already broken on load.`);
      img.onerror();
    }
  });

  // Scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
  });
});
