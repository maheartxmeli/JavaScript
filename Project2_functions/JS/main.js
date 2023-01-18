var x = "Do you know what time it is?"; //setting variable x with string

var y = " Click on the button to find out!"; //setting variable x with string

document.write(x + y); //concatenates variables x and y and writes them as a sentence

function displayTime() { //function to show the time as a sentence
    var timeNow = "It is currently "; //setting variable to concatenate
    timeNow += Date(); //concatenating variable and date
    document.getElementById("time").innerHTML = timeNow; //allows HTML to be modified when clicked on
}

