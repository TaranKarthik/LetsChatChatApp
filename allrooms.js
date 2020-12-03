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


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start Code
                  console.log("The Room Names Are- " + Room_names);
                  row = "<div class='room_name' id="+Room_names + "onclick='redirectToRoomName(this.id)'>#" +  Room_names + "</div>";
                  document.getElementById("output").innerHTML = row;


                  //End code
            });
      });
}
getData();
