// script.js
document.getElementById('loginform').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'admin' && password === 'password') {
      // Redirect to spinner.html on successful login
      window.location.href = "../Spinpage/Spin.html";
    } else {
      // Show an error message
      document.getElementById('message').textContent = 'Invalid username or password.';
    }
  });
  