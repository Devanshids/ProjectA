function myfunction(){

document.getElementById("login-form").addEventListener("submit", function(event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username !== "local admin" || password !== "amagi1234") {
        event.preventDefault();
        alert("Invalid username or password. Please try again.");
    }
});
}