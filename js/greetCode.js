//get input from radio button 
var radioBtn = document.getElementsByName("choice");
//get table
var display = document.getElementById("display");
//create new row
var newRow = display.insertRow(row);
//add cells
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);

var row = 1;

//counter in local storage
var counter = localStorage.getItem('on_click_counter');

const RegExp = /^[A-Za-z]+$/;


// var Instance=greetFactory();
function displayMembers() {

  //get inputs from fields
  var name = document.getElementById("name").value;
  



  //variable to store radio input 
  var radio;


  //loop through the length of the two radio button 
  for (i = 0; i < radioBtn.length; i++) {

    //get the checked button
    if (radioBtn[i].checked) {


      radio = radioBtn[i].value;
    }
  }


  //look at the value checked in the radioBtns then greet in the checked language
  if (radio === "English") {

    cell2.innerHTML = "Hello, " + name;

  } else if (radio === "IsiXhosa") {

    cell2.innerHTML = "Molo, " + name;

  } else if (radio === "Afrikaans") {

    cell2.innerHTML = "Hallo, " + name;
  }


  // make sure all fields are filled
  if (!name || !radio) {
    document.getElementById("error").innerHTML ="Please see to it that you fill every textbox!";

    setTimeout(function(){
      document.getElementById("error").innerHTML ="";
      location.reload();
      
   }, 10000);
    
    return;
  }


//match values entered with names already store and don't allow characters/numbers to be added

  if (name.match(RegExp)) {
    var strName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }else{
    document.getElementById("error").innerHTML ="Please enter Alphabetical values!";

    setTimeout(function(){
      document.getElementById("error").innerHTML ="";
      location.reload();
      
   }, 10000);
    
    return;

  }


  //append value of the chosen language to my cells
  cell3.innerHTML = radio;




  // Parse the JSON stored in allEntries
  var existingEntries = JSON.parse(localStorage.getItem("allEntries"));

  // If no existing data, create an array
  // Otherwise, convert the localStorage string to an array
  if (existingEntries == null) existingEntries = [];



  //objects that will be pushed to existingEntries array

  var entry = {
    "name": strName
    

  };

  if (!existingEntries.includes(entry["name"])) {

    existingEntries.push(entry["name"]);
    
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));


    //calling counter function
    myCounter(counter);

  }

  //clear fields
  document.getElementById("name").value = "";
  

  
  document.getElementsByClassName("choice").value = "";
  




}


//load counter to set to null
myCounter();



function myCounter() {
  //set counter to local storage
  localStorage.setItem("on_click_counter", counter);

  //retrieve counter from local storage
  document.getElementById("counter").innerHTML = counter;

  //append value in cells
  // cell1.innerHTML = counter;

  if (counter === null) {
    counter = 0;
  }

  counter++;

}






function deleteItems() {
  localStorage.clear();
  location.reload();
}

// Event Listener for the button

var entry = document.getElementById("Entry");

entry.addEventListener("click", displayMembers);








