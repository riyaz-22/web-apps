$(document).ready(function() {
  $('#signupForm').submit(function(event) {
    event.preventDefault();

    var formData = {
      username: $('#username').val(),
      email: $('#email').val(),
      password: $('#password').val()
    };

    $.ajax({
      type: 'POST',
      url: 'php/signup.php',
      data: formData,
      success: function(response) {
        alert(response);
        // Redirect to login page after successful signup
        window.location.href = 'login.html';
      },
      error: function(xhr, status, error) {
        alert('Error: ' + xhr.responseText);
      }
    });
  });
});
