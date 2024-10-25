// Desktop Background Images Array
const desktopImages = [
  'https://shedrackolisa.github.io/bmd-media/img/bmd-img-36.webp',
  'https://shedrackolisa.github.io/bmd-media/img/bmd-img-46.webp',
  'https://shedrackolisa.github.io/bmd-media/img/special.webp'
];

let currentIndex = 0;

// Function to Change Background Images for Desktop
function changeBackground() {
  const screenWidth = window.innerWidth;
  const backgroundContainer = document.querySelector('.background-container');

  // Only change the background for desktop
  if (screenWidth >= 769) {
      backgroundContainer.style.backgroundImage = `url(${desktopImages[currentIndex]})`;
      currentIndex = (currentIndex + 1) % desktopImages.length;
  }
}

// Set interval to change the background every 5 seconds for desktop only
setInterval(changeBackground, 5000);

// Initial background setup
changeBackground();







function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('show');

  const hamburgerIcon = document.getElementById('hamburger-icon');
  hamburgerIcon.textContent = hamburgerIcon.textContent === "☰" ? "X" : "☰";
}



function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('show');
  document.body.classList.toggle('menu-open');
}
