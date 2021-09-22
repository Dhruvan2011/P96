var firebaseConfig = {
    apiKey: "AIzaSyC1xWixcR7nmyKiqlMxMD28p2QklfNktXg",
    authDomain: "kwitter-a8bda.firebaseapp.com",
    databaseURL: "https://kwitter-a8bda-default-rtdb.firebaseio.com",
    projectId: "kwitter-a8bda",
    storageBucket: "kwitter-a8bda.appspot.com",
    messagingSenderId: "111023835871",
    appId: "1:111023835871:web:5b7972ba3cfbb9de99b76a"
  };

firebase.initializeApp(firebaseConfig);

room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user_name");

function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}

function logout()
{
   localStorage.removeItem("room_name");
   localStorage.removeItem("user_name");
   window.location="index.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();