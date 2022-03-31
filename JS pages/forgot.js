function check() {
    var email = document.getElementById('emailID').value;

    if(email == "") {
        alert("Please enter the email address you used when creating your account.")
    } else if (email == "example_email@gmail.com") {
        document.getElementById('form').style.display = "none";
        document.getElementById('sent').style.display = "block";
    } else {
        alert("This email was not found in our records. Please enter the email address you used when creating your account.")
    };
};