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
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE



function addRoom()
{
    room_name=document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    
    window.location="letschat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name- "+ Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location ="letschat_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "letschat.html";
}