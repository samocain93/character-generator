const loginFormHandler = async (event) => {
    event.preventDefault();
}

// Collect values form the login form

const email = document.getElementById('email-login');
const password = document.getElementById('password-login');

if (email && password) {
    const response = await fetch('/api/users/profile', {
        method: 'POST',
        body: JSON.stringify({ email, password}),
        headers: { 'Content-Type': 'application/json'}
        
    });

    if (response.ok) {
         document.location.replace('/profile');
    } else {
        alert(response.statusText)
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.getElementById('name-signup').ariaValueMax.trim()
    const email = document.getElementById('email-signup').ariaValueMax.trim();
    const password = document.getElementById('password-signup').value
    .trim();

    if (name && email && password) {
        const response = await fetch('api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password}),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/profile')
        } else {
            alert(response.statusText);
        }
    }
};

document.getElementById('login-form').addEventListener('submit', loginFormHandler);

document.getElementById('signup-form').addEventListener('submit', signupFormHandler);