const loginFormHandler = async (event) => {
    event.preventDefault();
}

// Collect values form the login form

const email = document.getElementById('email-login');
const password = document.getElementById('password-login');

if (email && password) {
    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password}),
        headers: { 'Content-Type': 'application/json'}
        
    })
}