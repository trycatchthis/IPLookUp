function login() {
 
    var username = document.getElementById("username");
    var pass = document.getElementById("pass");
 
    if (username.value == "") {
        alert("Please enter a valid username");
    } else if (pass.value  == "") {
        alert("Please enter the password");
    } else if(username.value == "admin" && pass.value == "password"){
        window.location.href="welcome.html";
    } else {
        alert("Please enter username and password！")
    }
}
