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
username = localStorage.getItem("NameForChatApp");
room_nAme = localStorage.getItem("Room Name");
console.log(room_nAme);
document.getElementById("placeOfROom").innerHTML = room_nAme;

function send() {
    TextForMessage = document.getElementById("MeessagePlace").value;
    firebase.database().ref(room_nAme).push({
        message: TextForMessage
    });

}

function getData() {
    firebase.database().ref("/" + room_nAme).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                
                var messagee = message_data["message"];
                

                
                var messageePlace = "<p class='message'>" + messagee + "</p>";
                
                var row =  messageePlace;
                document.getElementById("output").innerHTML += row;






                //End code
            }
        });
    });
}
getData();