// Initialize Firebase (ADD YOUR OWN DATA)
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAbmPVZKb6qPmtUMDksAkEYy9CJoG8YOcs",
    authDomain: "my-wep-project.firebaseapp.com",
    databaseURL: "https://my-wep-project.firebaseio.com",
    projectId: "my-wep-project",
    storageBucket: "my-wep-project.appspot.com",
    messagingSenderId: "165381323110"
  };
  firebase.initializeApp(config);

  //create reference

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('appointment').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  
  // Get values
  var firstn = getInputVal('firstN');
  var lastn = getInputVal('lastN');
  var inputnumber = getInputVal('inputNumber');
  var inputemail = getInputVal('inputEmail');
  var m = document.getElementById('personTosee');
  var persontosee = m.options[m.selectedIndex].text;
  var appointmentdate = getInputVal('appointmentDate');
  var message = getInputVal('ControlTextArea');
  

  // Save message
  saveMessage(firstn, lastn, inputemail, inputnumber, persontosee, appointmentdate, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
  // Clear form
 
  document.getElementById('appointment').reset();

}
// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstn, lastn, inputnumber, inputemail,  persontosee, appointmentdate, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstn:firstn,
    lastn:lastn,
    inputnumber:inputnumber,
    inputemail:inputemail,
    persontosee:persontosee,
    appointmentdate:appointmentdate,
    message:message
  });
}
