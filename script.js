// Dynamic Picture and Text

var fieldNumber = 1;

function changeField() {

    if (fieldNumber == 1) {

        document.getElementById("fieldImage").src =
            "images/basketball.jpeg";

        document.getElementById("fieldTitle").innerHTML =
            "Elite Sports Center";

        document.getElementById("fieldDescription").innerHTML =
            "Basketball court in Al Rawdah, Jeddah";

        fieldNumber = 2;

    }

    else if (fieldNumber == 2) {

        document.getElementById("fieldImage").src =
            "images/volleyball.jpeg";

        document.getElementById("fieldTitle").innerHTML =
            "Sunrise Arena";

        document.getElementById("fieldDescription").innerHTML =
            "Volleyball court in Al Shati, Jeddah";

        fieldNumber = 3;

    }

    else {

        document.getElementById("fieldImage").src =
            "images/football.jpeg";

        document.getElementById("fieldTitle").innerHTML =
            "Green Field Complex";

        document.getElementById("fieldDescription").innerHTML =
            "Football field in Al Salamah, Jeddah";

        fieldNumber = 1;

    }

    // Change CSS Style

    document.getElementById("fieldTitle").style.color =
        "#20a45a";

    document.getElementById("fieldImage").style.border =
        "3px solid #20a45a";

}


// Dynamic Elements

function addTip() {

    var tip = document.getElementById("bookingTip");

    if (tip.innerHTML == "") {

        var mytext = document.createTextNode(
            "Choose your favorite sport and book a suitable field."
        );

        tip.appendChild(mytext);

    }

    else {

        tip.innerHTML = "";

    }

}


// Form Validation - Login

function validateLogin() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "") {

        alert("Please enter your email.");
        document.getElementById("email").focus();
        return false;

    }

    else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {

        alert("Please enter a valid email address.");
        document.getElementById("email").focus();
        return false;

    }

    else if (password == "") {

        alert("Please enter your password.");
        document.getElementById("password").focus();
        return false;

    }

    else {

        alert("Please check your account information.");
        return false;

    }

}


// Form Validation - Sign Up

function validateSignup() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword =
        document.getElementById("confirmPassword").value;


    if (name == "") {

        alert("Please enter your name.");
        document.getElementById("name").focus();
        return false;

    }

    else if (email == "") {

        alert("Please enter your email.");
        document.getElementById("email").focus();
        return false;

    }

    else if (email.indexOf("@") == -1 ||
             email.indexOf(".") == -1) {

        alert("Please enter a valid email address.");
        document.getElementById("email").focus();
        return false;

    }

    else if (password == "") {

        alert("Please enter your password.");
        document.getElementById("password").focus();
        return false;

    }

    else if (confirmPassword == "") {

        alert("Please confirm your password.");
        document.getElementById("confirmPassword").focus();
        return false;

    }

    else if (password != confirmPassword) {

        alert("Passwords do not match.");
        document.getElementById("confirmPassword").focus();
        return false;

    }

    else {

        alert("Registration information is complete.");
        return false;

    }

}


// Form Help - onfocus and onblur

function showFormTip(message) {

    document.getElementById("formTip").innerHTML = message;

}

function clearFormTip() {

    document.getElementById("formTip").innerHTML = "";

}


// Page Load Event

function startPage() {

    if (document.getElementById("welcomeMessage") != null) {

        document.getElementById("welcomeMessage").innerHTML =
            "Welcome to SportFields! Find your next game.";

    }

}


// Booking Function

function bookField(field, sport, price) {

    var date = prompt("Enter booking date:");
    var time = prompt("Enter booking time:");

    if (date == "" || date == null) {

        alert("Please enter a booking date.");
        return;

    }

    else if (time == "" || time == null) {

        alert("Please enter a booking time.");
        return;

    }

    var booking = field + "|" + sport + "|" +
                  price + "|" + date + "|" + time;

    var oldBookings = localStorage.getItem("bookings");

    if (oldBookings == null) {

        oldBookings = "";

    }

    localStorage.setItem("bookings", oldBookings + booking + ";");

    alert("Booking added successfully!");

}


// Display Bookings

function showBookings() {

    var data = localStorage.getItem("bookings");

    var table = document.getElementById("bookingList");

    if (data != null && data != "") {

        var bookings = data.split(";");

        table.innerHTML = "";

        for (var i = 0; i < bookings.length - 1; i++) {

            var details = bookings[i].split("|");

            table.innerHTML +=
                "<tr>" +
                "<td>" + details[0] + "</td>" +
                "<td>" + details[1] + "</td>" +
                "<td>" + details[3] + "</td>" +
                "<td>" + details[4] + "</td>" +
                "<td>Confirmed</td>" +
                "<td><button type='button' onclick='deleteBooking(" + i + ")'>Delete</button></td>" +
                "</tr>";

        }

    }

    else {

        table.innerHTML =
            "<tr><td colspan='6'>No bookings to display.</td></tr>";

    }

}


// Delete Booking

function deleteBooking(number) {

    var answer = confirm("Are you sure you want to delete this booking?");

    if (answer == true) {

        var data = localStorage.getItem("bookings");

        var bookings = data.split(";");

        bookings.splice(number, 1);

        localStorage.setItem("bookings", bookings.join(";"));

        alert("Booking deleted successfully!");

        showBookings();

    }

}