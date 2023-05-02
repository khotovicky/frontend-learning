let slideIndex = 0;
let startX = 0;
let currentX = 0;
const slides = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

function showSlide(n, direction) {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    slides[i].style.opacity = 0;
    slides[i].style.transform = `translateX(${direction * 100}%)`;
  }

  // Calculate the new slide index
  slideIndex += n;

  // Reset the slide index if it goes out of bounds
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // Show the current slide
  slides[slideIndex].classList.add('active');
  slides[slideIndex].style.opacity = 1;
  slides[slideIndex].style.transform = 'translateX(0%)';
}

function handleGesture() {
  const distance = currentX - startX;

  if (distance > 0) {
    showSlide(-1, 1);
  } else if (distance < 0) {
    showSlide(1, -1);
  }
}

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  event.preventDefault();
  currentX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  handleGesture();
}

function handleMouseDown(event) {
  startX = event.clientX;
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
}

function handleMouseMove(event) {
  currentX = event.clientX;
}

function handleMouseUp(event) {
  document.removeEventListener('mousemove', handleMouseMove);
  handleGesture();
}

// Attach event listeners to the control buttons and slider container
prevButton.addEventListener('click', () => showSlide(-1, 1));
nextButton.addEventListener('click', () => showSlide(1, -1));
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);
document.addEventListener('touchend', handleTouchEnd);
document.addEventListener('mousedown', handleMouseDown);

// Call the showSlide function to start the slide show
showSlide(0, 0);
