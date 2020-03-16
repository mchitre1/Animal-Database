//Sending a request to grab data from a database
var animalRequest = new XMLHttpRequest();
animalRequest.open('GET', 'https://raw.githubusercontent.com/mchitre1/Animal-Database/master/animalDatabase');

//Storing the aquired data into an array
animalRequest.onload = function() {
    var animalData = JSON.parse(animalRequest.responseText);
    //The data represented in this array can be manipulated and used in various ways
}
animalRequest.send();
