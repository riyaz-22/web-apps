$(document).ready(function() {
  $('#signupForm').submit(function(event) {
    event.preventDefault();

    // Get form data
    var formData = {
      username: $('input[name="username"]').val(),
      email: $('input[name="email"]').val(),
      password: $('input[name="password"]').val()
    };

    // Send AJAX request
    $.ajax({
      type: 'POST',
      url: 'http://localhost/web/php/signup.php',
      data: formData,
      success: function(response) {
        // Handle success response
        alert(response);

        // Reset the form after successful submission
        $('#signupForm')[0].reset();
      },
      error: function(xhr, status, error) {
        // Handle error response
        alert('Error: ' + xhr.responseText);
      }
    });
  });
});
