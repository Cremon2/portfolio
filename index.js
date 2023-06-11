/* Get all the navbar links */
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const portfolioLink = document.getElementById('portfolio-link');
const contactLink = document.getElementById('contact-link');

/* Add a click event listener to each link */
homeLink.addEventListener('click', () => slowScroll(document.getElementById('home')));
aboutLink.addEventListener('click', () => slowScroll(document.getElementById('about')));
portfolioLink.addEventListener('click', () => slowScroll(document.getElementById('portfolio')));
contactLink.addEventListener('click', () => slowScroll(document.getElementById('contact')));

/* Function to add a slow scroll effect */
function slowScroll(target) {
  const targetPosition = target.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

/* Easing function for smooth scrolling */
function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

/* Toggle the visibility of the navbar list on button click */
const menuButton = document.getElementById('menu-button');
const navbarList = document.getElementById('navbarList');
menuButton.addEventListener('click', () => {
  navbarList.style.display = navbarList.style.display === 'none' ? 'block' : 'none';
});
