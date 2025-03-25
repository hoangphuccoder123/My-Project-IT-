// Get the slider track element
const sliderTrack = document.querySelector('.slider-track');

// Set the width of each slider item
const sliderItemWidth = document.querySelector('.slider-item').offsetWidth;

// Set the number of slider items
const numSliderItems = document.querySelectorAll('.slider-item').length;

// Set the animation duration
const animationDuration = 500; // in milliseconds

// Set the animation interval
const animationInterval = 3000; // in milliseconds

// Initialize the current slide index
let currentSlideIndex = 0;

// Function to animate the slider
function animateSlider() {
  // Calculate the new left position of the slider track
  const newLeftPosition = -currentSlideIndex * sliderItemWidth;

  // Animate the slider track using a CSS transition
  sliderTrack.style.transition = `left ${animationDuration}ms`;
  sliderTrack.style.left = `${newLeftPosition}px`;

  // Increment the current slide index, and reset to 0 if it reaches the end
  currentSlideIndex = (currentSlideIndex + 1) % numSliderItems;
}

// Start the animation interval
setInterval(animateSlider, animationInterval);

// Add a CSS class to enable the animation
sliderTrack.classList.add('animate');

// Optional: Add a CSS class to hide the slider track initially
sliderTrack.classList.add('hidden');

// Optional: Add a CSS class to show the slider track after the animation starts
setTimeout(() => {
  sliderTrack.classList.remove('hidden');
}, animationInterval);