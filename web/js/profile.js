$(document).ready(function() {
  $('#profileForm').submit(function(event) {
    event.preventDefault();

    var formData = {
      age: $('#age').val(),
      dob: $('#dob').val(),
      contact: $('#contact').val()
    };

    $.ajax({
      type: 'POST',
      url: 'php/profile.php',
      data: formData,
      success: function(response) {
        alert(response);
        // Redirect to profile page after successful update
        window.location.href = 'profile.html';
      },
      error: function(xhr, status, error) {
        alert('Error: ' + xhr.responseText);
      }
    });
  });
});
