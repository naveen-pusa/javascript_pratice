function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === "") {
        alert("Please enter both fields");
        return;
    }

    let userData = {
        username: username,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(userData));

    document.getElementById("welcome").innerText =
        "Welcome " + username;

    // ✅ CLEAR INPUTS AFTER LOGIN
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}