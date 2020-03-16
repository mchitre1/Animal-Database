//Creating an animal object
function animal(name, id, description){
    this.name = name;
    this.id = id;
    this.description = description;
}

//Initializing the 10 animals
var animal1 = new animal("Cow", 1, "Cows are black and white livestock that are used primarily for meat and milk.");
var animal2 = new animal("Horse", 2, "Horses are various colored animals that are used for mainly transportation.");
var animal3 = new animal("Pig", 3, "Pigs are four-legged animals that are used for meat.");
var animal4 = new animal("Chicken", 4, "Chickens are various colored animals that are used for meat.");
var animal5 = new animal("Fish", 5, "Fishes are various colored animals that can be used as pets or meat as well.");
var animal6 = new animal("Cat", 6, "Cats can be various in color and are used primarily as housepets.");
var animal7 = new animal("Dog", 7, "Dogs can be various in color and are used primarily as housepets.");
var animal8 = new animal("Bird", 8, "Birds are often quite various in color and can be found all across the earth.");
var animal9 = new animal("Mouse", 9, "Mice are part of the rodent family and play a vital role in the food chain.");
var animal0 = new animal("Hamster", 0, "Hamsters range from white color to black and can be used as housepets.");

//Creating an array of animal objects
var animalArray = [animal0, animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9];

//Creating a selection list
var selection = document.createElement("select");
selection.id = "selectList";
document.body.appendChild(selection);

//Put array into select list
for (i = 0; i < animalArray.length; i++){
    var temp = animalArray[i];
    var elem = document.createElement("option");
    elem.value = temp.description;
    elem.text = temp.name;
    selection.appendChild(elem);
}

//Adding text based on the selected animal
selection.addEventListener("change", function() {
    var indexNumber = selection.selectedIndex;
    if (indexNumber == 0) {
        document.getElementById("descriptionText").innerHTML = animal0.description; 
    }
    else if (indexNumber == 1) {
        document.getElementById("descriptionText").innerHTML = animal1.description;
    }
    else if (indexNumber == 2) {
        document.getElementById("descriptionText").innerHTML = animal2.description;
    }
    else if (indexNumber == 3) {
        document.getElementById("descriptionText").innerHTML = animal3.description;
    }
    else if (indexNumber == 4) {
        document.getElementById("descriptionText").innerHTML = animal4.description;
    }
    else if (indexNumber == 5) {
        document.getElementById("descriptionText").innerHTML = animal5.description;
    }
    else if (indexNumber == 6) {
        document.getElementById("descriptionText").innerHTML = animal6.description;
    }
    else if (indexNumber == 7) {
        document.getElementById("descriptionText").innerHTML = animal7.description;
    }
    else if (indexNumber == 8) {
        document.getElementById("descriptionText").innerHTML = animal8.description;
    }
    else if (indexNumber == 9) {
        document.getElementById("descriptionText").innerHTML = animal9.description;
    }
})