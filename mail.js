const firebaseConfig = {
    apiKey: "AIzaSyBvsXUh6qxEKhehhluLRPi0Oqx32H0Z5i8",
    authDomain: "loginjs-60323.firebaseapp.com",
    databaseURL: "https://loginjs-60323-default-rtdb.firebaseio.com",
    projectId: "loginjs-60323",
    storageBucket: "loginjs-60323.appspot.com",
    messagingSenderId: "851794497556",
    appId: "1:851794497556:web:b2d2b7129c7ebbc7d79701"
};

//intialize firebase
firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener("submit",submitForm);

function submitForm(e){
  e.preventDefault();
  var name = getElementVal("name");
  var email = getElementVal("emailid");
  var msgcontent = getElementVal("msgContent");

  saveMsg(name,email,msgcontent);
  alert("Data Stored Succesfully");
  

}

const saveMsg = (name,email,msgcontent)=>{
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    email: email,
    msgcontent: msgcontent,

  })

};
const getElementVal = (id) =>{
  return document.getElementById(id).value;
};

