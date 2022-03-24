var firebaseConfig = {
    apiKey: "AIzaSyBfCp6Ng7rEDPaZ2X0HVlZusrmmA1_PVzc",
    authDomain: "letschat-90634.firebaseapp.com",
    databaseURL: "https://letschat-90634-default-rtdb.firebaseio.com",
    projectId: "letschat-90634",
    storageBucket: "letschat-90634.appspot.com",
    messagingSenderId: "735080775728",
    appId: "1:735080775728:web:55ce05f6f4304724ae2df5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}