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

  // Reference messages collection
var messagesRef = firebase.database().ref('messages');

document.getElementById('contactuyo').addEventListener('submit', submitEnquiry);


function submitEnquiry(e){
    e.preventDefault();
  
    // Get values
    var inputName = getInputVal('name');
    var inputEmail = getInputVal('email');
    var subject = getInputVal('subject');
    var phoneNumber = getInputVal('phone');
    var message = getInputVal('message');
    
    // Save messa ge
    saveEnquiry(inputName, inputEmail, subject, phoneNumber, message);
  
    // Show alert
    document.querySelector('.enquiry').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.enquiry').style.display = 'none';
    },3000);
    // Clear form
   
    document.getElementById('contactuyo').reset();
  
  }

  // Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
  }

  function saveEnquiry(inputName, inputEmail, subject, phone,  message,){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name:inputName,
      email:inputEmail,
      message:message,
      phone:phone,
      message:subject
    });
  }
  