document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // In a real app, this would be an API call to your backend
    // For client-side demo, we'll use dummy logic
    if (email === 'user@example.com' && password === 'password') {
        alert('User Login Successful!');
        window.location.href = 'user_dashboard.html'; // Redirect to user dashboard
    } else {
        alert('Invalid Credentials!');
    }
});

document.getElementById('adminLoginBtn').addEventListener('click', function() {
    // In a real app, this might lead to a separate admin login page
    // Or handle admin login on the same form with role check
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin@example.com' && password === 'adminpass') {
        alert('Admin Login Successful!');
        window.location.href = 'admin_dashboard.html'; // Redirect to admin dashboard
    } else {
        alert('Invalid Admin Credentials!');
    }
});
