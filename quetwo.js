var fn = prompt("Please Enter First Name: ");
var ln = prompt("Please Enter Last Name: ");
var by = prompt("Please Enter Birth Year: ");
var cy = 2024;

var age = cy - by;

document.getElementById("output").innerHTML = "Hi " + fn + " " + ln + "! How does it feel to be " + age + " years old?";