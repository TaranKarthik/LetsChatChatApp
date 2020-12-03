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



const signIn = document.getElementById('SignIn'),

    loginIn = document.getElementById('login-in');








signIn.addEventListener('click', function(){
    if (document.getElementById("login_inputt").value == "") {
        document.getElementById("warning").innerHTML = "<i class='fas fa-exclamation-triangle'></i>Warning: Please enter a suitable name.";
    } else {
        var UserName = document.getElementById("login_inputt").value;

        localStorage.setItem("NameForChatApp", UserName);
        window.location = "makeroom.html"



    }

});
