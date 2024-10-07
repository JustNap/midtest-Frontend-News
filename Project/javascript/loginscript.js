document.getElementById('loginForm').addEventListener('submit', function(event) {
    let isValid = true;

    document.getElementById('email-error').textContent = '';
    document.getElementById('pass-error').textContent = '';

    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    if (email === '') {
        document.getElementById('email-error').textContent = 'Harap masukkan email';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('pass-error').textContent = 'Harap masukkan password';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); 
    }

    if(isValid){
        event.preventDefault();
        window.location.href = 'home.html';
    }
});
