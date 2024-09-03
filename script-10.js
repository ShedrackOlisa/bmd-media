// Array of background images for the desktop version
const backgrounds = [
    'url("https://shedrackolisa.github.io/bmd-media/img/bmd-img-40.webp")',
    'url("https://shedrackolisa.github.io/bmd-media/img/special.webp")',
    'url("https://shedrackolisa.github.io/bmd-media/img/bmd-img-46.webp")'
];


// Index to keep track of the current background image
let currentIndex = 0;

// Function to change the background image with fade effect
function changeBackground() {
    const backgroundElement = document.querySelector('.background');

    // Fade out
    backgroundElement.style.opacity = 0;

    // Wait for fade-out transition to complete (1s)
    setTimeout(() => {
        // Change the background image
        backgroundElement.style.backgroundImage = backgrounds[currentIndex];

        // Fade in
        backgroundElement.style.opacity = 1;

        // Move to the next background, loop back to the start if at the end
        currentIndex = (currentIndex + 1) % backgrounds.length;
    }, 1000); // Match this timing with the CSS opacity transition duration
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Set initial background
changeBackground();
















// Function to open the lightbox and display the clicked image
function openLightbox(imageElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    // Set the source of the lightbox image to the clicked image's source
    lightboxImg.src = imageElement.src;

    // Display the lightbox
    lightbox.style.display = 'flex';
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    // Hide the lightbox
    lightbox.style.display = 'none';
}








const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const body = document.body;

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    body.classList.toggle('active-menu');
});



document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('image-loaded');
          // Optionally, stop observing once the image is loaded
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Adjust this value as needed
    });
  
    images.forEach(image => {
      observer.observe(image);
    });
  });
  
