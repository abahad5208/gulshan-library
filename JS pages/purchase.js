var cart_count = 0;
var cart_array = [];
var cart = document.getElementById('cart');
var cartEmpty = document.getElementById('cart-empty');
var cartTable = document.getElementById('cart-table');
var cart_clicked_main = document.querySelectorAll('.add-cart-main');

var wishlist_array = [];
var wishlist_count = 0;
var wishlist = document.getElementById('wishlist');
var wishlistEmpty = document.getElementById('wishlist-empty');
var wishlistTable = document.getElementById('wishlist-table');
var wishlist_clicked_main = document.querySelectorAll('.add-wishlist-main');

var closestTitle;
var closestPicture;

function add_cart() {
    closestTitle = this.closest("div").querySelector("a").getAttribute('data-bs-title');
    closestPicture = this.closest("div").querySelector("a").getAttribute('data-bs-book');

    if(cart_count < 5 && cart_array.includes(closestTitle) == false) {
        cartEmpty.style.display = 'none';

        var row = document.createElement('tr');

        var td1 = document.createElement('td');
        var img = document.createElement('img');
        img.setAttribute('src', "Books/" + closestPicture + ".jpg");
        img.style.width = "50px";
        img.style.height = "auto";
        td1.appendChild(img);

        var td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(closestTitle));
        td2.setAttribute('class','Title');

        var td3 = document.createElement('td');
        var remove_button = document.createElement('button');
        remove_button.setAttribute('class', 'btn btn-outline-danger');
        remove_button.setAttribute('onClick', 'deleteCartRow(this)');
        var icon = document.createElement('i');
        icon.setAttribute('class', 'bi bi-x-lg');
        remove_button.appendChild(icon);
        td3.appendChild(remove_button);

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        cart.appendChild(row);

        cartTable.style.display = 'block';
        cart_count++;
        cart_array.push(closestTitle);
    } else if(cart_count == 5) {
        alert("You have reached the maximum allowable limit for your account. Please remove a book from your cart to add this one.")
    } else if(cart_array.includes(closestTitle) == true) {
        alert("You've already added this title to your cart!")
    };
};

function add_wishlist() {
    closestTitle = this.closest("div").querySelector("a").getAttribute('data-bs-title');
    closestPicture = this.closest("div").querySelector("a").getAttribute('data-bs-book');

    if(wishlist_count < 30 && wishlist_array.includes(closestTitle) == false) {
        wishlistEmpty.style.display = 'none';

        var row = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.setAttribute('class', 'Image')
        var img = document.createElement('img');
        img.setAttribute('src', "Books/" + closestPicture + ".jpg");
        img.style.width = "50px";
        img.style.height = "auto";
        td1.appendChild(img);

        var td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(closestTitle));
        td2.setAttribute('class','Title');

        var td3 = document.createElement('td');
        var remove_button = document.createElement('button');
        remove_button.setAttribute('class', 'btn btn-outline-danger');
        remove_button.setAttribute('onClick', 'deleteWishlistRow(this)');
        var icon = document.createElement('i');
        icon.setAttribute('class', 'bi bi-x-lg');
        remove_button.appendChild(icon);
        td3.appendChild(remove_button);

        var td4 = document.createElement('td');
        var transfer_button = document.createElement('button');
        transfer_button.setAttribute('class', 'btn btn-outline-success');
        transfer_button.setAttribute('onClick', 'transfer(this)');
        var icon2 = document.createElement('i');
        icon2.setAttribute('class', 'bi bi-cart-plus');
        transfer_button.appendChild(icon2);
        td4.appendChild(transfer_button);

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4)
        wishlist.appendChild(row);

        wishlistTable.style.display = 'block';
        wishlist_count++;
        wishlist_array.push(closestTitle);
    } else if(wishlist_count == 5) {
        alert("Your wishlist is full! Try reading some of the books on it first.")
    } else if(wishlist_array.includes(closestTitle) == true) {
        alert("You've already added this title to your wishlist!")
    };
};

cart_clicked_main.forEach(function(el) {
    el.addEventListener('click', add_cart)
});

wishlist_clicked_main.forEach(function(el) {
    el.addEventListener('click', add_wishlist)
});

function deleteCartRow(btn) {
    var delRow = btn.parentNode.parentNode;
    var delTitle = delRow.getElementsByClassName("Title")[0].innerHTML;
    cart_array.splice(cart_array.indexOf(delTitle), 1);
    delRow.parentNode.removeChild(delRow);
    cart_count--;

    if(cart_count == 0) {
        cartEmpty.style.display = 'block';
        cartTable.style.display = 'none';
    };
};

function deleteWishlistRow(btn) {
    var delRow = btn.parentNode.parentNode;
    var delTitle = delRow.getElementsByClassName("Title")[0].innerHTML;
    wishlist_array.splice(wishlist_array.indexOf(delTitle), 1);
    delRow.parentNode.removeChild(delRow);
    wishlist_count--;

    if(wishlist_count == 0) {
        wishlistEmpty.style.display = 'block';
        wishlistTable.style.display = 'none';
    };
};

function transfer(btn) {
    var transferRow = btn.parentNode.parentNode;
    var transferTitle = transferRow.getElementsByClassName("Title")[0].innerHTML;
    var transferImage = transferRow.getElementsByClassName("Image")[0].getElementsByTagName("img")[0].getAttribute("src");
    
    if(cart_count < 5 && cart_array.includes(transferTitle) == false) {
        cartEmpty.style.display = 'none';

        var row = document.createElement('tr');

        var td1 = document.createElement('td');
        var img = document.createElement('img');
        img.setAttribute('src', transferImage);
        img.style.width = "50px";
        img.style.height = "auto";
        td1.appendChild(img);

        var td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(transferTitle));
        td2.setAttribute('class','Title');

        var td3 = document.createElement('td');
        var remove_button = document.createElement('button');
        remove_button.setAttribute('class', 'btn btn-outline-danger');
        remove_button.setAttribute('onClick', 'deleteCartRow(this)');
        var icon = document.createElement('i');
        icon.setAttribute('class', 'bi bi-x-lg');
        remove_button.appendChild(icon);
        td3.appendChild(remove_button);

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        cart.appendChild(row);

        cartTable.style.display = 'block';
        cart_count++;
        cart_array.push(transferTitle);
    } else if(cart_count == 5) {
        alert("You have reached the maximum allowable limit for your account. Please remove a book from your cart to add this one.")
    } else if(cart_array.includes(transferTitle) == true) {
        alert("You've already added this title to your cart!")
    };
};

document.getElementById('modal-cart').addEventListener('click', function() {
    if(cart_count < 5 && cart_array.includes(title) == false) {
        cartEmpty.style.display = 'none';

        var row = document.createElement('tr');

        var td1 = document.createElement('td');
        var img = document.createElement('img');
        img.setAttribute('src', "Books/" + book + ".jpg");
        img.style.width = "50px";
        img.style.height = "auto";
        td1.appendChild(img);

        var td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(title));
        td2.setAttribute('class','Title');

        var td3 = document.createElement('td');
        var remove_button = document.createElement('button');
        remove_button.setAttribute('class', 'btn btn-outline-danger');
        remove_button.setAttribute('onClick', 'deleteCartRow(this)');
        var icon = document.createElement('i');
        icon.setAttribute('class', 'bi bi-x-lg');
        remove_button.appendChild(icon);
        td3.appendChild(remove_button);

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        cart.appendChild(row);

        cartTable.style.display = 'block';
        cart_count++;
        cart_array.push(title);
    } else if(cart_count == 5) {
        alert("You have reached the maximum allowable limit for your account. Please remove a book from your cart to add this one.")
    } else if(cart_array.includes(title) == true) {
        alert("You've already added this title to your cart!")
    };
});

document.getElementById('modal-wishlist').addEventListener('click', function() {
    if(wishlist_count < 30 && wishlist_array.includes(title) == false) {
        wishlistEmpty.style.display = 'none';

        var row = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.setAttribute('class', 'Image')
        var img = document.createElement('img');
        img.setAttribute('src', "Books/" + book + ".jpg");
        img.style.width = "50px";
        img.style.height = "auto";
        td1.appendChild(img);

        var td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(title));
        td2.setAttribute('class','Title');

        var td3 = document.createElement('td');
        var remove_button = document.createElement('button');
        remove_button.setAttribute('class', 'btn btn-outline-danger');
        remove_button.setAttribute('onClick', 'deleteWishlistRow(this)');
        var icon = document.createElement('i');
        icon.setAttribute('class', 'bi bi-x-lg');
        remove_button.appendChild(icon);
        td3.appendChild(remove_button);

        var td4 = document.createElement('td');
        var transfer_button = document.createElement('button');
        transfer_button.setAttribute('class', 'btn btn-outline-success');
        transfer_button.setAttribute('onClick', 'transfer(this)');
        var icon2 = document.createElement('i');
        icon2.setAttribute('class', 'bi bi-cart-plus');
        transfer_button.appendChild(icon2);
        td4.appendChild(transfer_button);

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4)
        wishlist.appendChild(row);

        wishlistTable.style.display = 'block';
        wishlist_count++;
        wishlist_array.push(title);
    } else if(wishlist_count == 5) {
        alert("Your wishlist is full! Try reading some of the books on it first.")
    } else if(wishlist_array.includes(title) == true) {
        alert("You've already added this title to your wishlist!")
    };
});

document.getElementById('checkout').addEventListener('click', function() {
    var c = confirm("Are you sure you want to checkout the selected book(s)?");
    if(c == true) {
        alert("Your selected books will be delivered to your address within 2-3 working days. We may call you to confirm your order. Thank you for your patronage");
    }
});