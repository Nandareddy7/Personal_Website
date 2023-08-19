
const scriptURL = 'https://script.google.com/macros/s/AKfycbzg5Kz66eT3vbQNlJxa_TS5f153qeC3cdyZIwNcDDNRCsf6qwzxrsG1NbG5mefKXuZNtQ/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response);
            showAlert('Message sent successfully!');
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

function showAlert(message) {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert');
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);

    setTimeout(() => {
        document.body.removeChild(alertDiv);
    }, 3000); // Show the alert for 3 seconds
}
