document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  if (!email.includes('@') || name.trim() === "" || message.trim() === "") {
    alert('Please fill in all fields correctly.');
    return;
  }

  alert('Form submitted! Backend not connected yet.');
});
