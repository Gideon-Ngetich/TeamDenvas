// Function to handle form submission
function submitDonation(event) {
    event.preventDefault(); // Prevent default form submission behavior
    // Get form elements
    var form = document.getElementById('donation-form');
    var nameInput = document.getElementById('name');
    var amountInput = document.getElementById('amount');
    var messageInput = document.getElementById('message');
    // Extract form data
    var name = nameInput.value.trim();
    var amount = parseInt(amountInput.value.trim());
    var message = messageInput.value.trim();
    // Perform basic validation
    if (!name || !amount) {
        alert('Please fill in all required fields.');
        return;
    }
    // Perform additional validation if needed
    // Send donation data to the backend
    fetch('/api/donate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, amount: amount, message: message })
    })
        .then(function (response) {
        if (response.ok) {
            alert('Thank you for your donation!');
            form.reset(); // Reset the form after successful submission
        }
        else {
            alert('Failed to process donation. Please try again later.');
        }
    })["catch"](function (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please try again later.');
    });
}
// Add event listener to the donation form
document.addEventListener('DOMContentLoaded', function () {
    var donationForm = document.getElementById('donation-form');
    if (donationForm) {
        donationForm.addEventListener('submit', submitDonation);
    }
});
