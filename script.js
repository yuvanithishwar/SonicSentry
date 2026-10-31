// ==========================================
// SONICSENTRY - LOGIN
// ==========================================

function loginUser() {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();


    // Check empty fields

    if (email === "" || password === "") {

        alert("Please enter your Gmail ID and password.");

        return;
    }


    // Check Gmail address

    const gmailPattern =
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


    if (!gmailPattern.test(email)) {

        alert("Please enter a valid Gmail ID.");

        return;
    }


    // Login successful

    alert("Login successful!");


    // Go to dashboard

    window.location.href = "dashboard.html";
}



// ==========================================
// SONICSENTRY - CREATE ACCOUNT
// ==========================================

function createAccount() {

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("signupEmail").value.trim();

    const password =
        document.getElementById("signupPassword").value.trim();

    const confirmPassword =
        document.getElementById("confirmPassword").value.trim();


    // Check empty fields

    if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        alert("Please fill all the fields.");

        return;
    }


    // Check Gmail address

    const gmailPattern =
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


    if (!gmailPattern.test(email)) {

        alert("Please enter a valid Gmail address.");

        return;
    }


    // Check password length

    if (password.length < 6) {

        alert(
            "Password must contain at least 6 characters."
        );

        return;
    }


    // Check passwords

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;
    }


    // Account created

    alert(
        "Account created successfully!"
    );


    // Return to login page

    window.location.href = "index.html";
}