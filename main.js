function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value.replace(/\s+/g, ''); // hapus spasi dari password

    if (username === "admin" && password === "admin 8") {
        window.location.href = "https://www.google.com/search?q=google&oq=google+&aqs=chrome..69i57j35i39l2j69i60l5.9544j0j7&sourceid=chrome&ie=UTF-8";
    } else if (username === "" || password === "") {
        alert("Password atau Username Tidak boleh kosong");
    } else {
        alert("Username atau password salah!");
    }
}
