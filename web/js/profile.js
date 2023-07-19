$(document).ready(function()
 {
  $('#profileForm').submit(function(event) {
    event.preventDefault();

    var formData = $(this).serialize();

    $.ajax({
      type: 'POST',
      url: 'http://localhost/web/php/profile.php',
      data: formData,
      success: function(response) {
        console.log(response); // Check the response in the console
        alert('Updated successfully!');
        window.location.href = 'profile.html';
      },
      error: function(error) {
        alert('Error: ' + error.responseText);
      }
    });
  });
});
