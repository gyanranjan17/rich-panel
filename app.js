function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorText = document.getElementById("errorText");

    // Check if username and password are correct (you can replace this with your authentication logic)
    if (username === "yourusername" && password === "yourpassword") {
        alert("Login successful!");
        // You can redirect to another page here.
    } else {
        errorText.innerText = "Invalid username or password.";
    }
}
