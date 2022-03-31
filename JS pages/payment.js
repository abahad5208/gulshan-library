// Variable Definitions
var plan = document.getElementById('plan');
var months = document.getElementById('months');
var total = document.getElementById('total');
var errorMsg = document.getElementById('error');
var paymentForm = document.getElementById('paymentForm');
var totalamt = document.getElementById('totalamt');
var monthsError = document.getElementById('monthsError');
var subPlan;
var jazzcash_details = document.getElementById('jazzcash_details');
var easypaisa_details = document.getElementById('easypaisa_details');
var card_details = document.getElementById('card_details');
var COD_details = document.getElementById('COD_details');
var jazzcash = document.getElementById('mode_jazzcash');
var jazz = document.querySelectorAll('.jazz')
var easypaisa = document.getElementById('mode_easypaisa');
var paisa = document.querySelectorAll('.paisa');
var credit = document.getElementById('mode_credit');
var card = document.querySelectorAll('.card');
var cash = document.getElementById('mode_cod');
var errors;

// Calculate the total
function calc(period) {
    if(period == "" || parseInt(period) > 12 || parseInt(period) < 1) {
        totalamt.style.display = 'none';
        monthsError.style.display = 'block';
    } else {
        if(subPlan == "Basic") {
            total.innerHTML = '' + (parseInt(period)*500);
            totalamt.style.display = 'block';
            monthsError.style.display = 'none';
        } else if(subPlan == "Advanced") {
            total.innerHTML = '' + (parseInt(period)*1000);
            totalamt.style.display = 'block';
            monthsError.style.display = 'none';
        } else if(subPlan == "Premium") {
            total.innerHTML = '' + (parseInt(period)*1500);
            totalamt.style.display = 'block';
            monthsError.style.display = 'none';
        };
    };
};

function verifyPayment() {
    errors = 0;
    if(months.value == "" || parseInt(months.value) > 12 || parseInt(months.value) <1) {
        alert("Please enter the number of months you wish to be subscribed for!");
        errors++;
    };

    if(jazzcash.checked === false && easypaisa.checked === false && credit.checked === false && cash.checked === false) {
        alert("Please select a mode of payment!");
        errors++;
    };

    if(errors > 0) {
        return false;
    } else {
        alert("Your details have been recorded, and your account will be created once your payment has been verified. Thank you for your patronage.")
        setTimeout(function() { window.close(); }, 500);
    };
};

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
    
    setInputFilter(document.getElementById('JC_account'), function(value) {
    return /^\d*\.?\d*$/.test(value);
    });

    setInputFilter(document.getElementById('EP_account'), function(value) {
        return /^\d*\.?\d*$/.test(value);
        });

document.addEventListener('DOMContentLoaded', function() {
    subPlan = localStorage.getItem('subPlan');

    if(subPlan == null) {
        paymentForm.style.display = 'none';
        errorMsg.style.display = 'block';
        localStorage.removeItem("subPlan");
    } else {
        paymentForm.style.display = 'block';
        errorMsg.style.display = 'none';
        plan.innerHTML = subPlan;
    };

    jazzcash.addEventListener('click', function() {
        easypaisa_details.style.display = 'none';
        card_details.style.display = 'none';
        COD_details.style.display = 'none';
        jazzcash_details.style.display = 'block';

        jazz.forEach(function(el) {
            el.required = true;
        });
        paisa.forEach(function(elem) {
            elem.required = false;
        });
        card.forEach(function(e) {
            e.required = false;
        });
    });

    easypaisa.addEventListener('click', function() {
        card_details.style.display = 'none';
        COD_details.style.display = 'none';
        jazzcash_details.style.display = 'none';
        easypaisa_details.style.display = 'block';

        jazz.forEach(function(el) {
            el.required = false;
        });
        paisa.forEach(function(elem) {
            elem.required = true;
        });
        card.forEach(function(e) {
            e.required = false;
        });
    });

    credit.addEventListener('click', function() {
        COD_details.style.display = 'none';
        jazzcash_details.style.display = 'none';
        easypaisa_details.style.display = 'none';
        card_details.style.display = 'block';

        jazz.forEach(function(el) {
            el.required = false;
        });
        paisa.forEach(function(elem) {
            elem.required = false;
        });
        card.forEach(function(e) {
            e.required = true;
        });
    });

    cash.addEventListener('click', function() {
        jazzcash_details.style.display = 'none';
        easypaisa_details.style.display = 'none';
        card_details.style.display = 'none';
        COD_details.style.display = 'block';

        jazz.forEach(function(el) {
            el.required = false;
        });
        paisa.forEach(function(elem) {
            elem.required = false;
        });
        card.forEach(function(e) {
            e.required = false;
        });
    });
});