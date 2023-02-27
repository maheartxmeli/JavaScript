//loop function
function call_Loop() {
    var Num = "";
    var x = 1;
    while (x < 5) {
        Num += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = Num; 
}

//string length function
function string_Length() {
    let text = "Happiness can be found even in the darkest of times, when one only remembers to turn on the light. - Albus Dumbledore";
    let length = text.length;
    document.getElementById("string_length").innerHTML = length;
}

//list function
var Instruments = ["Violin", "Guitar", "Piano", "Cello", "Drums", "Bass"]
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//array function
function array_Function() {
    var music_genre = [];
    music_genre[0] = "Rock";
    music_genre[1] = "Alternative";
    music_genre[2] = "Rap";
    music_genre[3] = "R&B";
    document.getElementById("array").innerHTML = "I'm currently listening to " + music_genre[1] + " music.";
}

//constant challenge: 
function constant_function() {
    const nails = {medium:"gel", shape:"almond", color:"pink"};
    nails.length = "short";
    document.getElementById("constant").innerHTML = "My nail lady used " + nails.medium + " to make " + nails.length + ", " + nails.color + " " + nails.shape + " nails.";
}

//let keyword
function let_function() {
    var x = "Meli";
    document.getElementById("var").innerHTML = x;
    {
        let x = "Honey girl";
        document.getElementById("let").innerHTML = "<br>" + x;
    }
    
}

//return statement challenge
function return_statement() {
    return Math.LN10;
}
document.getElementById("return").innerHTML = return_statement();

//object function
let dog = {
    breed: "pitbull",
    color: "brown",
    size: "large",
    sex: "female",
    name: "Meli",
    description: function() {
        return this.name + " is a " + this.sex + " " + this.breed + " that is considered " + this.size + " and is " + this.color + ".";
    }
};
document.getElementById("dog_object").innerHTML = dog.description();

//break statement
function break_statement() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) {break;}
        text += "This number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}

//continue statement
function continue_statement() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}