// Function to handle form submission
function submitDonation(event: Event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form elements
    const form = document.getElementById('donation-form') as HTMLFormElement;
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const amountInput = document.getElementById('amount') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;

    // Extract form data
    const name = nameInput.value.trim();
    const amount = parseInt(amountInput.value.trim());
    const message = messageInput.value.trim();

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
        body: JSON.stringify({ name, amount, message })
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your donation!');
            form.reset(); // Reset the form after successful submission
        } else {
            alert('Failed to process donation. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please try again later.');
    });
}

// Add event listener to the donation form
document.addEventListener('DOMContentLoaded', () => {
    const donationForm = document.getElementById('donation-form');
    if (donationForm) {
        donationForm.addEventListener('submit', submitDonation);
    }
});
