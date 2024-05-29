document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Send the form data to the server (or simulate sending)
    // Here you can add AJAX request or send the data via email

    // For demonstration purposes, let's just show a success message
    var successMessage = document.getElementById('success-message');
    successMessage.textContent = "Message sent successfully!";
    successMessage.style.display = "block";

    // Reset the form after a delay
    setTimeout(function() {
        document.getElementById('contact-form').reset();
        successMessage.style.display = "none";
    }, 3000);
});
