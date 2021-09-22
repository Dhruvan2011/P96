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

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
  
    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user name"
    });
     
      localStorage.setItem("user_name", user_name);
      window.location="kwitter1.html";
      
  
  }
  