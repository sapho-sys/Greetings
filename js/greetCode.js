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


// Parse the JSON stored in allEntries
var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
// If no existing data, create an array
// Otherwise, convert the localStorage string to an object
if (existingEntries == null) existingEntries = {};
//counter in local storage
var counter = localStorage.getItem('on_click_counter');
const RegExp = /^[A-Za-z]+$/;

var Instance = greeting(existingEntries);

//init Counter
myCounter();
function myCounter() {
  //set counter to local storage
  localStorage.setItem("on_click_counter", counter);
  //retrieve counter from local storage
  document.getElementById("counter").innerHTML = Instance.getCounter();
}

function deleteItems() {
  localStorage.clear();
  location.reload();
}
// Event Listener for the button
var entry = document.getElementById("Entry");
entry.addEventListener("click", function () {
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
    Instance.setName(name);
    
    Instance.addNames(name, radio);
    if (name.match(RegExp)) {
      var strName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      document.getElementById("name").value = "";
      document.getElementById('tick').checked = false;
      document.getElementById('tick2').checked = false;
      document.getElementById('tick3').checked = false;
    } else if (name === "") {
      document.getElementById("error").innerHTML = "Please see to it that you fill every textbox!";
      setTimeout(function () {
        document.getElementById("error").innerHTML = "";
        location.reload();
      }, 5000);
      return;
    } else if(!radio){
      document.getElementById("error").innerHTML = "Please see to it that you fill every textbox!";
      setTimeout(function () {
        document.getElementById("error").innerHTML = "";
        location.reload();
      }, 5000);
      return;

    }else {
      document.getElementById("error").innerHTML = "Please enter Alphabetical values!";
      setTimeout(function () {
        document.getElementById("error").innerHTML = "";
        location.reload();
      }, 5000);
      return;
    }
    //look at the value checked in the radioBtns then greet in the checked language
    if (radio === "English") {
      cell2.innerHTML = "Hello, " + Instance.getName();
      cell3.innerHTML = radio;
    } else if (radio === "IsiXhosa") {
      cell2.innerHTML = "Molo, " + Instance.getName();
      cell3.innerHTML = radio;
    } else if (radio === "Afrikaans") {
      cell2.innerHTML = "Hallo, " + Instance.getName();
      cell3.innerHTML = radio;
    }
    localStorage.setItem("allEntries", JSON.stringify(Instance.namesAdded()));

    //calling counter function
    myCounter(counter);

});








