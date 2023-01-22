//addition function
function addition_Function() {
    var addition = 2+2;
    document.getElementById("add").innerHTML = "2+2 = " + addition;
}

//subtraction function
function subtraction_function() {
    var subtraction = 10-2;
    document.getElementById("minus").innerHTML = "10-2 = " + subtraction;
}

//multiplication function
function multiply_function() {
    var multiplying = 10*5;
    document.getElementById("multiply").innerHTML = "10*5 = " + multiplying;
}

//division function
function divide_function() {
    var dividing = 10/5;
    document.getElementById("divides").innerHTML = "10/5 = " + dividing;
}

//multiplication function
function multiple_function() {
    var multipleMath = 10 * (4 + 9) - 7 / 3;
    document.getElementById("moremath").innerHTML = "10 * (4 + 9) - 7 / 3 = " + multipleMath;
}


//remainder function
function remainder_function() {
    var remainder = 25%2;
    document.getElementById("remainder").innerHTML = "The remainder of 25/2 is " + remainder;
}

//negative operator function
function negative_function() {
    var x = 7;
    document.getElementById("negative").innerHTML = -x;
}


//increment function
function increment_function() {
var z = 9;
z++
document.getElementById("increment").innerHTML = z;
}

//decrement function
function decrement_function() {
var y = 5;
y--;
document.getElementById("decrement").innerHTML = y;
}

//random math function between 0-1
window.alert(Math.random());

//javascript math object function for squareroot
function math_object() {
    document.getElementById("sqrt2").innerHTML = "Math.SQRT2 is " + Math.SQRT2;
}