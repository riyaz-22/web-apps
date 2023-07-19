$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    event.preventDefault();

    var formData = $(this).serialize();

    $.ajax({
      type: 'POST',
      url: 'http://localhost/web/php/login.php',
      data: formData,
      success: function(response) {
        alert(response);
        if (response === "Login successful!") {
          window.location.href = 'profile.html';
        }
      },
      error: function(xhr, status, error) {
        alert('Error: ' + xhr.responseText);
      }
    });
  });
});
