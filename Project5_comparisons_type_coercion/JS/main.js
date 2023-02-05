document.write(typeof 10);

document.write("20" + 7);

document.write(5 == 5); 

function my_Function() {
    document.getElementById("NaN").innerHTML = isNaN(0/0);
}

function my_Function2() {
    document.getElementById("false").innerHTML = isNaN('72');
}

function my_Function3() {
    document.getElementById("true").innerHTML = isNaN('This is not a number but a string');
}

function infinity_Function() {
    document.getElementById("infinity").innerHTML = 2E310;
}

function neg_infinity() {
    document.getElementById("neg_infinity").innerHTML = -2E310;
}

function boolean_function() {
    document.getElementById("boolean false").innerHTML = document.write(15>16);
}

function boolean_function2() {
    document.getElementById("boolean true").innerHTML = document.write(20>10);
}

console.log(5+9);

console.log(5<2);

function triple_true() {
    var x = 15;
    var y = 15;
    document.getElementById("triple true").innerHTML = document.write(x === y);
}

function triple_false1() {
    var x = 15;
    var y = "15";
    document.getElementById("triple false1").innerHTML = document.write(x === y);
}

function triple_false2() {
    var x = "15";
    var y = "16";
    document.getElementById("triple false2").innerHTML = document.write(x === y);
}

function operator_AND1() {
    document.getElementById("operatorAND1").innerHTML = document.write(16>10 && 16>8);
}

function operator_OR1() {
    document.getElementById("operatorOR1").innerHTML = document.write(16>10 || 16>18);
}

function operator_AND2() {
    document.getElementById("operatorAND2").innerHTML = document.write(16>10 && 16>18);
}

function operator_OR2() {
    document.getElementById("operatorOR2").innerHTML = document.write(16>17 || 16>18);
}

function not_True() {
    document.getElementById("not true").innerHTML = !(5>10);
}

function not_False() {
    document.getElementById("not false").innerHTML = !(5>1);
}
