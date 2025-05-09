// Cursor Effect
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Tap animation for mobile
document.querySelectorAll('.contact-buttons a').forEach(button => {
  button.addEventListener('touchstart', () => {
    button.classList.add('active');
  });

  button.addEventListener('touchend', () => {
    button.classList.remove('active');
  });

  button.addEventListener('mousedown', () => {
    button.classList.add('active');
  });

  button.addEventListener('mouseup', () => {
    button.classList.remove('active');
  });

  button.addEventListener('mouseleave', () => {
    button.classList.remove('active');
  });
});
