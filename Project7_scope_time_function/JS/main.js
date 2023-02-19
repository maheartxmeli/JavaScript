//global variable
var x = 15;
function add_Function_1() {
    document.write(5 + x + "<br>");
}
add_Function_1();

//local variable
function add_Function_3() {
    var y = 15;
    document.write(5 + y + "<br>");
}
add_Function_3();

//function with error using console.log() method to debug, result = variable i is not defined.
function add_Function_error(){
    var p = 15;
    console.log(i + 15);
}
add_Function_error();

//getHours() function for if statement 
function Time_Date() {
    if (new Date().getHours() < 24) {
        document.getElementById("time_date").innerHTML = "It is before midnight :P";
    }
}

//function for if statement challenge
function Christmas() {
    if (new Date().getMonth() < 11) {
        document.getElementById("Christmas").innerHTML = "Christmas is more than a month away :(";
    }
}

//function for if else statement
function Shoes_Function() {
    Shoes = document.getElementById("Shoes").value;
    if (Shoes >= 10) {
        Response = "Well...One can never have too many, right?";
    }
    else {
        Response = "Hmm.. that's a normal amount, I suppose"
    }
    document.getElementById("Amount_of_Shoes").innerHTML = Response;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
 