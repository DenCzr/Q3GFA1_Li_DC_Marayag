var n = prompt("Please enter your full name: ");
var h = prompt("Please enter your height (in inches): ");
var h1;
var h2;
var w = prompt("Please enter your weight(in kilogram): ", "");
var w1;
var d;


h1 = ((h/12));
d = h%12;
w = w * 2.20462262;
w1 = w * 100;
w1 = (w1%1)/100;
h3 = h1%1;
h=h1-h3;
w = w - w1;

alert("Name: "+n +"\nHeight: "+ h + "'" + d + "\"" +"\nWeight: "+ w + "lbs") ;
/*part3*/
function myfunction(){
    if(confirm("Do you consent sharing your personal information with the site?")){
        alert("Name: "+n +"\nHeight: "+ h + "'" + d + "\"" +"\nWeight: "+ w + "lbs");
    } else{
        alert("User does not wish for his/her information to be shared.");
        
    }
}