// Variable Definitions
var old_password = document.getElementById('old_password');
var new_password_1 = document.getElementById('new_password_1');
var new_password_2 = document.getElementById('new_password_2');
var password_div = document.getElementById('p_change');
var password_errors = document.getElementById('err_message');
var p_errors_count;
var con;
var phone = document.getElementById('contact_no');
var email = document.getElementById('emailID');
var address1 = document.getElementById('inputAddress');
var address2 = document.getElementById('inputAddress2');
var personal_errors = document.getElementById('personal_errors');
var personal_err_count;
var subscription = document.getElementById("sub_plan");
var renewal_submit = document.getElementById('renewal_submit_button');
var renewal_error = document.getElementById('renewal_error');

// Redirect Function
function button() {
    document.getElementById('password_change').addEventListener('click', function() {
        document.getElementById('options').style.display = 'none';
        document.getElementById('p_change').style.display = 'block';
        document.getElementById('p_change').scrollIntoView();
        document.getElementById('options_heading').innerHTML = "Change Password";
    });

    document.getElementById('pass_cancel').addEventListener('click', function() {
        document.getElementById('p_changeForm').reset();
        password_errors.innerHTML = "";
        p_errors_count = 0;
        old_password.style.backgroundColor = "white";
        new_password_1.style.backgroundColor = "white";
        new_password_2.style.backgroundColor = "white";
        document.getElementById('p_change').style.display = 'none';
        document.getElementById('options').style.display = 'block';
        document.getElementById('options').scrollIntoView();
        document.getElementById('options_heading').innerHTML = "Options";
    });

    document.getElementById('pers_change').addEventListener('click', function() {
        document.getElementById('options').style.display = 'none';
        document.getElementById('personal_change').style.display = 'block';
        document.getElementById('personal_change').scrollIntoView();
        document.getElementById('options_heading').innerHTML = "Edit Personal Info";
    });

    document.getElementById('personal_cancel').addEventListener('click', function() {
        document.getElementById('personal_changeForm').reset();
        personal_errors.innerHTML = "";
        personal_err_count = 0;
        phone.style.backgroundColor = "white";
        email.style.backgroundColor = "white";
        address1.style.backgroundColor = "white";
        address2.style.backgroundColor = "white";
        document.getElementById('personal_change').style.display = 'none';
        document.getElementById('options').style.display = 'block';
        document.getElementById('options').scrollIntoView();
        document.getElementById('options_heading').innerHTML = "Options";
    });

    document.getElementById('renew').addEventListener('click', function() {
        document.getElementById('options').style.display = 'none';
        document.getElementById('renew_membership').style.display = 'block';
        document.getElementById('renew_membership').scrollIntoView();
        document.getElementById('options_heading').innerHTML = "Renew Membership";
    });

    document.getElementById('renewal_cancel').addEventListener('click', function() {
        renewal_error.innerHTML = "";
        document.getElementById('renew_membership').style.display = 'none';
        document.getElementById('options').style.display = 'block';
        document.getElementById('options').scrollIntoView();
        document.getElementById('options_heading').innerHTML = "Options";
    });
};

// Password Verification
function pass_verify() {
    p_errors_count = 0;
    password_errors.innerHTML = "";

    if(old_password.value == "") {
        password_errors.innerHTML += "Please enter your old password!" + "<br>"; 
        p_errors_count++;
        old_password.style.backgroundColor = "red";
    } else if(old_password.value != "password") {
        password_errors.innerHTML += "Your old password is incorrect!" + "<br>"; 
        p_errors_count++;
        old_password.style.backgroundColor = "red";
    } else {
        old_password.style.backgroundColor = "white";
    };

    if(new_password_1.value == "" ||new_password_2.value == "") {
        password_errors.innerHTML += "Please enter your new password both times!" + "<br>"; 
        p_errors_count++;
        new_password_1.style.backgroundColor = "red";
        new_password_2.style.backgroundColor = "red";
    } else if(new_password_1.value != new_password_2.value) {
        password_errors.innerHTML += "Your new password doesn't match!" + "<br>"; 
        p_errors_count++;
        new_password_1.style.backgroundColor = "red";
        new_password_2.style.backgroundColor = "red";
    } else if(new_password_1.value == old_password.value) {
        password_errors.innerHTML += "Your new password must be different from your old password!" + "<br>"; 
        p_errors_count++;
        new_password_1.style.backgroundColor = "red";
        new_password_2.style.backgroundColor = "red";
    } else {
        new_password_1.style.backgroundColor = "white";
        new_password_2.style.backgroundColor = "white";
    };

    if(p_errors_count > 0) {
        password_errors.scrollIntoView();
        return false;
    } else {
        con = confirm("Are you sure that you want to change your password?");
        if(con == true) {
            alert("Your password has been changed successfully. Please login again");
            setTimeout(function() { window.location.href ="index.html"; }, 1500);
        }
    };
};

function personal_verify() {
    personal_err_count = 0;
    personal_errors.innerHTML = "";

    if(phone.value == "") {
        personal_errors.innerHTML += "Please enter your phone number" + "<br>";
        personal_err_count++;
        phone.style.backgroundColor =  "red";
    } else {
        phone.style.backgroundColor =  "white";
    };

    if(email.value == "") {
        personal_errors.innerHTML += "Please enter your email address" + "<br>";
        personal_err_count++;
        email.style.backgroundColor =  "red";
    } else {
        email.style.backgroundColor =  "white";
    };

    if(address1.value == "" || address2.value == "") {
        personal_errors.innerHTML += "Please enter a valid address!" + "<br>";
        address1.style.backgroundColor = "red";
        address2.style.backgroundColor = "red";
        personal_err_count++;
    } else if (address1.value == address2.value) {
        personal_errors.innerHTML += "Please enter different information in each address field!" + "<br>";
        address1.style.backgroundColor = "red";
        address2.style.backgroundColor = "red";
        personal_err_count++;
    } else {
        address1.style.backgroundColor = "white";
        address2.style.backgroundColor = "white";
    };

    if(personal_err_count > 0) {
        personal_errors.scrollIntoView();
        return false;
    } else {
        con = confirm("Are you sure that you want to update your information as entered?");
        if(con == true) {
            alert("Your request to update your information has been recorded. We will contact you to confirm the update and implement it as soon as possible.");
            document.getElementById('personal_cancel').click();
        }
    };    
};

renewal_submit.addEventListener('click', function() {
    renewal_error.innerHTML = "";

    if(subscription.options[subscription.selectedIndex].value == "NA") {
        renewal_error.innerHTML = "Please select your subscription plan!";
    } else {
        localStorage.setItem("subPlan", subscription.options[subscription.selectedIndex].value);
        window.open("payment.html", "_blank", "menubar=no");
    };
});

document.addEventListener('DOMContentLoaded', button);