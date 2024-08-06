
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBi5XKpLTWNnovxM_wo3eGcrU-Sv89hhTo",
      authDomain: "rizzler-chat-website.firebaseapp.com",
      databaseURL: "https://rizzler-chat-website-default-rtdb.firebaseio.com",
      projectId: "rizzler-chat-website",
      storageBucket: "rizzler-chat-website.appspot.com",
      messagingSenderId: "117545197297",
      appId: "1:117545197297:web:3d94c8d56d7070bda79350"
    };

    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_names" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
  
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name" , name);
window.location="kwitter_page.html";
}

function addRoom(){
      room_name=document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding a room name"
      });
localStorage.setItem("room_name" , room_name);
window.location=kwitter_room.html;
}

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}



