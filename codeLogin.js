

function checkCreds() {
     //these var (variables) where created based on the Ids that were created in the HTML
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var badgeNumber = document.getElementById("badgeNumber").value;
    var userInfo = firstName + " " + lastName;
    //The var userInfo is created to concatenate two strings: userName and lastName.
    if (userInfo.length >20 || userInfo.length <4) {
    // if (userInfo.length > 40 || userInfo.length < 2) {
        //the if/else  .length <> is conditioning what the user inputs (parameters that will validate strings)
          document.getElementById("loginStatus").innerHTML = "firstName has invalid number of characters!";
    }
    else if (badgeNumber > 999 || badgeNumber < 100) {
        document.getElementById("loginStatus").innerHTML = "Badge number is an invalid number !";alert("Invalid badge #");
    }
    else {
        alert("Access Granted, Welcome " + userInfo + "!");
        location.replace("tables.html");
        //this is the alert that will take you to another html file (webpage with the tables)
    }
}
