//a KVP dictionary for a description of a keyboard
function maheas_dictionary() { 
    var keyboard = {
        size:"96%",
        type: "linear",
        connection: "wireless",
        pcb: "hot-swappable"
    }
    delete keyboard.type; //deletes the 'type' key
    document.getElementById("dictionary").innerHTML = keyboard.type; //calls the 'type' value to be displayed in the HTML code.
}