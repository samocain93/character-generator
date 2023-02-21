//
const loggingIn = async (event) => {
    event.preventDefault();

const email = document.getElementById('email-login').value.trim();
const password = document.getElementById('password-login').value.trim();

if (email && password) {
    // changed line below from profile to login. I think this is correct?
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
         document.location.replace('/profile');
    } else {
        alert(response.statusText)
    }
}
};

const signingUp = async (event) => {
    event.preventDefault();

    const username = document.getElementById('user-signup').value.trim();
    const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document.getElementById('login-form').addEventListener('submit', loggingIn);

document.querySelector('.signup-form').addEventListener('submit', signingUp);