document.getElementById('registerForm').addEventListener('submit', function(event) {
    let isValid = true;


    document.getElementById('username-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('pass-error').textContent = '';
    document.getElementById('confpass-error').textContent = '';

    const username = document.getElementById('username').value;
    if (username === '') {
        document.getElementById('username-error').textContent = 'Harap masukkan username';
        isValid = false;
    }

    const email = document.getElementById('email').value;
    if (email === '') {
        document.getElementById('email-error').textContent = 'Harap masukkan email';
        isValid = false;
    }

    const password = document.getElementById('pass').value;
    const confirmPassword = document.getElementById('confpass').value;
    if (password === '') {
        document.getElementById('pass-error').textContent = 'Harap masukkan password';
        isValid = false;
    }
    if (confirmPassword === '') {
        document.getElementById('confpass-error').textContent = 'Harap masukkan konfirmasi password';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confpass-error').textContent = 'Password tidak cocok';
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
