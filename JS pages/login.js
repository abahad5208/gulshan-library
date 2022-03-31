username = document.getElementById('u_name');
password = document.getElementById('p_word');

document.getElementById('login').addEventListener('click', function() {
    if(username.value == "" || password.value == "") {
        alert('Please enter a username and/or password!');
    } else if(username.value != "user" || password.value != "password") {
        alert('Username and/or password is incorrect. Please try again!');
    } else if(username.value == "user" && password.value == "password") {
        if(window.location.pathname == "/browse.html") {
            window.location.href = "browse_loggedin.html"
        } else if(window.location.pathname == "/aboutus.html") {
            window.location.href = "aboutus_loggedin.html"
        } else {
            window.location.href = "index_loggedin.html"
        };
    };
});