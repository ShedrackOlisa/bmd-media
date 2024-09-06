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






<script>
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', function() {
    menu.classList.toggle('show');
  });
</script>
