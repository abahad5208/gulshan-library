// Variable Definitions
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var contact_no = document.getElementById("contact_no");
var gender;
var cnic = document.getElementById("cnic");
var address1 = document.getElementById("inputAddress");
var address2 = document.getElementById("inputAddress2");
var email = document.getElementById("emailID");
var username_main = document.getElementById("username");
var password1 = document.getElementById("Password1");
var password2 = document.getElementById("Password2");
var subscription = document.getElementById("sub_plan")
var submit = document.getElementById("submit_button");
var message = document.getElementById("message");
var birthDate = document.getElementById("birth");
var error;

// Function Definition
function verify() {
error = 0;
message.innerHTML = ""; // Clear Error Messages

// Verify First Name
if(fname.value == "") {
    message.innerHTML += "Please enter a valid first name!" + "<br>";
    fname.style.backgroundColor = "red";
    error++;
} else if(fname.value.length < 2) {
    message.innerHTML += "First name should be at least 2 characters!" + "<br>";
    fname.style.backgroundColor = "red";
    error++;
} else {
    fname.style.backgroundColor = "white";
};

// Verify Last Name
if(lname.value == "") {
    message.innerHTML += "Please enter a valid last name!" + "<br>";
    lname.style.backgroundColor = "red";
    error++;
} else if(lname.value.length < 2) {
    message.innerHTML += "Last name should be at least 2 characters!" + "<br>";
    lname.style.backgroundColor = "red";
    error++;
} else {
    lname.style.backgroundColor = "white";
};

// Verify Contact Number
if(contact_no.value.length != 10) {
    message.innerHTML += "Please enter a valid contact number!" + "<br>";
    contact_no.style.backgroundColor = "red";
    error++;
} else  {
    contact_no.style.backgroundColor = "white";
};

// Verify Gender
if(document.getElementById('gender_male').checked) {
    gender = "male";
} else if(document.getElementById('gender_female').checked) {
    gender = "female";
} else if(document.getElementById('gender_other').checked) {
    gender = "other";
} else {
    message.innerHTML += "Please select your gender!" + "<br>";
    error++;
};

// Verify CNIC
if(cnic.value.length != 13) {
    message.innerHTML += "Please enter a valid CNIC number!" + "<br>";
    cnic.style.backgroundColor = "red";
    error++;
} else {
    cnic.style.backgroundColor = "white";
};

// Verify Birth Date
if(birthDate.value == "") {
    message.innerHTML += "Please enter your date of birth!" + "<br>";
    birthDate.style.backgroundColor = "red";
    error++;
} else {
    birthDate.style.backgroundColor = "white";
};

// Verify Address
if(address1.value == "" || address2.value == "") {
    message.innerHTML += "Please enter a valid address!" + "<br>";
    address1.style.backgroundColor = "red";
    address2.style.backgroundColor = "red";
    error++;
} else {
    address1.style.backgroundColor = "white";
    address2.style.backgroundColor = "white";
};

// Verify Email
if(email.value == "") {
    message.innerHTML += "Please enter a valid email ID!" + "<br>";
    email.style.backgroundColor = "red";
    error++;
} else {
    email.style.backgroundColor = "white";
};

// Verify Username
if(username_main.value == "") {
    message.innerHTML += "Please enter a valid username!" + "<br>";
    username_main.style.backgroundColor = "red";
    error++;
} else {
    username_main.style.backgroundColor = "white";
};

// Verify Password
if(password1.value == "") {
    message.innerHTML += "Please enter a valid password!" + "<br>";
    password1.style.backgroundColor = "red";
    error++;
} else {
    password1.style.backgroundColor = "white";
};

// Verify Password Recheck
if(password2.value != password1.value) {
    message.innerHTML += "Please re-enter the same password!" + "<br>";
    password2.style.backgroundColor = "red";
    error++;
} else {
    password2.style.backgroundColor = "white";
};

// Verify Subscription Selection
if(subscription.options[subscription.selectedIndex].value == "NA") {
    message.innerHTML += "Please select your subscription plan!" + "<br>";
    error++;
};

if(error > 0) {
    message.scrollIntoView();
    return false;
} else {
    localStorage.setItem("subPlan", subscription.options[subscription.selectedIndex].value);
    window.open("payment.html", "_blank", "menubar=no");
}
};

//Ensure only numbers are allowed in the contact number field
function setInputFilter(textbox, inputFilter) {
["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
    if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
    } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
    } else {
        this.value = "";
    }
    });
});
}

setInputFilter(contact_no, function(value) {
    return /^\d*\.?\d*$/.test(value);
});

function alphaOnly(event) {
    var key = event.keyCode;
    return ((key >= 65 && key <= 90) || key == 8 || key == 37 || key == 39 || key == 46 || key == 9);
};

document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

    today = yyyy+'-'+mm+'-'+dd;
    birthDate.setAttribute("max", today);
});