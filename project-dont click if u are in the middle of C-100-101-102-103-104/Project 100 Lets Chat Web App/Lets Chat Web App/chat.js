// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBv20ZONNTjOHFI6NjMU_-AlGQEp1M_oNM",
    authDomain: "hehehehehehehehhheh-fc63a.firebaseapp.com",
    databaseURL: "https://hehehehehehehehhheh-fc63a-default-rtdb.firebaseio.com",
    projectId: "hehehehehehehehhheh-fc63a",
    storageBucket: "hehehehehehehehhheh-fc63a.appspot.com",
    messagingSenderId: "254968259530",
    appId: "1:254968259530:web:2f0a64801d7aca94ba2533"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



