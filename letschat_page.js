var firebaseConfig = {
    apiKey: "AIzaSyAf7Kgme2WC7vTAk0AkCvJTylrEZGJ_qJk",
    authDomain: "kwitter-49ee3.firebaseapp.com",
    databaseURL: "https://kwitter-49ee3-default-rtdb.firebaseio.com",
    projectId: "kwitter-49ee3",
    storageBucket: "kwitter-49ee3.appspot.com",
    messagingSenderId: "977487346205",
    appId: "1:977487346205:web:470b8ea165cfdaa9b164f4",
    measurementId: "G-32XC7S7VQP"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);//YOUR FIREBASE LINKS

function send()
{
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    })
    document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
