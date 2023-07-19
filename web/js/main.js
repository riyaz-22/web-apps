$(document).ready(function() {
  // Code specific to the signup form
  $('#signupForm').submit(function(event) {
    event.preventDefault();
    alert('Form submitted!');
    // Add AJAX code here to send the form data to the server
  });

  // Code specific to the login form
  $('#loginForm').submit(function(event) {
    event.preventDefault();
    alert('Login form submitted!');
    // Add AJAX code here to send the login data to the server
  });

  // Code specific to the profile form
  $('#profileForm').submit(function(event) {
    event.preventDefault();
    alert('Profile form submitted!');
    // Add AJAX code here to send the profile data to the server
  });
});
