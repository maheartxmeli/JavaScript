//rollercoaster ride function using ternary operator
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//ternary operator function to determine voting age
function voting_Function() {
    var Age, can_Vote;
    Age = document.getElementById("Age").value;
    can_Vote = (Age<18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = can_Vote + " to vote!";
}

//function using "this" and "new" keywords for different types of vehicles
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var jack = new Vehicle("Dodge", "Viper", "2020", "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", "2019", "White and Black");
var Erik = new Vehicle("Ford", "Pinto", "1971", "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//function using "this" and "new" keywords for different dogs
function This_Function(Breed, Color, Size) {
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
    this.Dog_Size = Size;
}
var Meli = new This_Function("Pitbull", "Brown", "70 lbs");
var Honey_Girl = new This_Function("Rottweiler", "Black", "90 lbs");
var Buddy = new This_Function("Fox Terrier", "White and Black", "12 lbs");
function my_Dog() {
    document.getElementById("New_and_This").innerHTML = "My first dog's name was Buddy. He was a " + Buddy.Dog_Color + " " + Buddy.Dog_Breed + " who was only " + Buddy.Dog_Size;
}

function Nested_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_One() {Starting_Point += 1;}
        Plus_One();
        return Starting_Point;
    }
}