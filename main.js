const firebaseConfig = {
    apiKey: "AIzaSyDtJPzosDsVCxrWVpbfEhugqnbhO3KxHrU",
    authDomain: "ai-clicking-game.firebaseapp.com",
    databaseURL: "https://ai-clicking-game-default-rtdb.firebaseio.com",
    projectId: "ai-clicking-game",
    storageBucket: "ai-clicking-game.appspot.com",
    messagingSenderId: "167468180211",
    appId: "1:167468180211:web:feed73c3cd665e3b900d86"
  };
  if(!firebase.apps.length) {

    
    firebase.initializeApp(firebaseConfig);
    }

  function addUser() {
    user_name = document.getElementById("user_name").value;
    password = document.getElementById("password").value;

 // if(password.length > 5 || password.length==5) {

   document.getElementById("password").style = "color: black;"

    
    firebase.database().ref(user_name).push({
        name:user_name,
        password:password
  });

  window.location = "game_room.html"

   
    }

  /* else {
        document.getElementById("password").style = "color: red;"
        document.getElementsByName("password")[0].placeholder = "Invalid Password (Minimum Of Five Characters)"
        console.log("Invalid Password");
}
}*/
