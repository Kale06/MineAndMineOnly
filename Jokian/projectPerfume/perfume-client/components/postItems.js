const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(loginForm);
    console.log(formData);
    fetch('/perfume-server/login.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Check the response from PHP
            if (data.success) {
                console.log(data.message); // Log success message
                // Redirect to the URL specified in the response
                if (data.redirect) {
                    window.location.href = data.redirect;
                }
            } else {
                console.error(data.message); // Log error message
                // Handle error scenario (e.g., display an error message)
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle fetch errors or other exceptions
        });
});