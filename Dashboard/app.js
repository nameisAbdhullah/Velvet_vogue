// Sign-Up Form Handling
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Account Created Successfully!");
    // Logic to save user details (e.g., LocalStorage or API calls)
});

// Sign-In Form Handling
document.getElementById('signin-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Signed In Successfully!");
    // Redirect user to dashboard
    window.location.href = 'dashboard.html';
});

// Edit Profile Form Handling
document.getElementById('edit-profile-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Profile Updated Successfully!");
    // Logic to update user profile
});
