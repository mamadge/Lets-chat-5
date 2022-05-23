const firebaseConfig = {
    apiKey: "AIzaSyDhWxnO0JFzC2O4rO2SYWlxo9n8Sj9qLDU",
    authDomain: "let-s-chat-room-2e8f3.firebaseapp.com",
    databaseURL: "https://let-s-chat-room-2e8f3-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-room-2e8f3",
    storageBucket: "let-s-chat-room-2e8f3.appspot.com",
    messagingSenderId: "513960593109",
    appId: "1:513960593109:web:dcba95cdc2e3c28a3bc45c",
    measurementId: "G-68F7NHH93M"
  };
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "let_chat_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "let_chat_page.html";
  }
  
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }