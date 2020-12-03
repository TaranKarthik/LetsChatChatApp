var firebaseConfig = {
    apiKey: "AIzaSyD96Lgszg8M9TptKknYlfnCDsEfy9ZO2dQ",
    authDomain: "hwforfirebase.firebaseapp.com",
    databaseURL: "https://hwforfirebase.firebaseio.com",
    projectId: "hwforfirebase",
    storageBucket: "hwforfirebase.appspot.com",
    messagingSenderId: "297251167674",
    appId: "1:297251167674:web:ac070375a455971c7b1183",
    measurementId: "G-Z7PPXV5NEJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById("greeting_para").innerHTML = "Welcome," + " " + localStorage.getItem("NameForChatApp") + " " + "!";
function addRoom(){
      RoomName = document.getElementById("makeroom_input").value;
      localStorage.setItem("Room Name",RoomName);

      firebase.database().ref("/").child(RoomName).update({
            purpose: "Adding Room Name"
      }).then(function() {
            window.location = "chatscreen.html";
        });


     



}
