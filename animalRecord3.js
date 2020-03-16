//Creating a selection list
var selection = document.createElement("select");
selection.id = "selectList";
document.body.appendChild(selection);

//Sending a request to grab data from a database
var animalRequest = new XMLHttpRequest();
animalRequest.open('GET', 'https://raw.githubusercontent.com/mchitre1/Animal-Database/master/animalDatabase');

//Storing the aquired data into an array
animalRequest.onload = function() {
    var animalArray = JSON.parse(animalRequest.responseText);

    //Put array into created selection list
    for (i = 0; i < animalArray.length; i++){
        var temp = animalArray[i];
        var elem = document.createElement("option");
        elem.value = temp.description;
        elem.text = temp.name;
        selection.appendChild(elem);
    }

//Adding text based on the selected animal
selection.addEventListener("change", function() {
    var indexNumber = selection.selectedIndex; //variable to track current selected index
    
    if (indexNumber == 0) {
        document.getElementById("descriptionText").innerHTML = animalArray[0].description; 
    }
    else if (indexNumber == 1) {
        document.getElementById("descriptionText").innerHTML = animalArray[1].description;
    }
    else if (indexNumber == 2) {
        document.getElementById("descriptionText").innerHTML = animalArray[2].description;
    }
    else if (indexNumber == 3) {
        document.getElementById("descriptionText").innerHTML = animalArray[3].description;
    }
    else if (indexNumber == 4) {
        document.getElementById("descriptionText").innerHTML = animalArray[4].description;
    }
    else if (indexNumber == 5) {
        document.getElementById("descriptionText").innerHTML = animalArray[5].description;
    }
    else if (indexNumber == 6) {
        document.getElementById("descriptionText").innerHTML = animalArray[6].description;
    }
    else if (indexNumber == 7) {
        document.getElementById("descriptionText").innerHTML = animalArray[7].description;
    }
    else if (indexNumber == 8) {
        document.getElementById("descriptionText").innerHTML = animalArray[8].description;
    }
    else if (indexNumber == 9) {
        document.getElementById("descriptionText").innerHTML = animalArray[9].description;
    }
})
}

//Sends the request back
animalRequest.send();
