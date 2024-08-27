// Select all elements with the 'cards-wrapper' class
const sliders = document.querySelectorAll('.cards-wrapper');

// Function to add drag functionality to each slider
sliders.forEach(slider => {
  let isMouseDown = false;
  let startX, scrollLeft;

  // Mouse Down Event
  slider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  // Mouse Leave Event
  slider.addEventListener('mouseleave', () => {
    isMouseDown = false;
    slider.classList.remove('active');
  });

  // Mouse Up Event
  slider.addEventListener('mouseup', () => {
    isMouseDown = false;
    slider.classList.remove('active');
  });

  // Mouse Move Event
  slider.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return; // Stop the function if the mouse is not down
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Control the scroll speed
    slider.scrollLeft = scrollLeft - walk;
  });
});
