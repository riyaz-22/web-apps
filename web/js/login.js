$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    event.preventDefault();

    var email = $('#email').val();
    var password = $('#password').val();

    $.ajax({
      type: 'POST',
      url: 'php/login.php',
      data: {
        email: email,
        password: password
      },
      success: function(response) {
        alert(response);
        if (response === "Login successful!") {
          // Save the login session using localStorage
          localStorage.setItem('loggedIn', true);
          window.location.href = 'profile.html';
        }
      },
      error: function(xhr, status, error) {
        alert('Error: ' + xhr.responseText);
      }
    });
  });
});
