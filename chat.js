// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBc2GZ3TFGPmf98NXxG39jbuCf_IuM5n3Q",
    authDomain: "c-100-project-5f433.firebaseapp.com",
    databaseURL: "https://c-100-project-5f433-default-rtdb.firebaseio.com",
    projectId: "c-100-project-5f433",
    storageBucket: "c-100-project-5f433.appspot.com",
    messagingSenderId: "383191999966",
    appId: "1:383191999966:web:45583db3b2265466fe694f",
    measurementId: "G-92S55NC19E"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

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
