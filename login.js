function loginUser() {

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value.trim();


    // Gmail validation
    const gmailPattern =
        /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


    // Check empty fields

    if (email === "" || password === "") {

        alert(
            "Please enter your Gmail ID and password."
        );

        return;

    }


    // Check Gmail

    if (!gmailPattern.test(email)) {

        alert(
            "Please enter a valid Gmail ID."
        );

        return;

    }


    // Login successful

    alert("Login successful!");


    // Open dashboard

    window.location.href =
        "dashboard.html";

}