//concatenating method function
function function_One() {
    var part_1 = "This is ";
    var part_2 = "my first concatenated ";
    var part_3 = "sentence in JavaScript";
    var entire_Sentence = part_1.concat(part_2, part_3);
    document.getElementById("concatenate").innerHTML = entire_Sentence;
}


//slicing method
function slice_Method() {
    var sentence = "Every person deserves a second chance.";
    var section = sentence.slice(0,38);
    document.getElementById("slice_Method").innerHTML = section;
}

//toUpperCase() method
function Upper_case() {
    let text = document.getElementById("uppercase").innerHTML;
    document.getElementById("uppercase").innerHTML = text.toUpperCase();
}

//search method
function search_method() {
    let text = "Mahealani";
    document.getElementById("search_method").innerHTML = text.search("i");
}

//number method using toString() method
function toString_Function() {
    var y = 210;
    document.getElementById("tostring").innerHTML = y.toString();
}

//precision method
function toPrecision_Function() {
    var x = 4908242.3048
    document.getElementById("toprecision").innerHTML = x.toPrecision(8);
}

//toFixed() method
function toFixed_Function() {
    let num = 8.234908;
    document.getElementById("toFixed").innerHTML = num.toFixed(3);
}

//valueOf method
function valueOf_Function() {
    let text = new String("Petrificus totalus");
    document.getElementById("valueOf").innerHTML = text.valueOf();
}