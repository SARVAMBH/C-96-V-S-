var firebaseConfig = {
      apiKey: "AIzaSyDuhODyGt8PWgBSrwFolxT7Fmiw9ByFTSI",
      authDomain: "kwitter-social-website-ea3cc.firebaseapp.com",
      databaseURL: "https://kwitter-social-website-ea3cc-default-rtdb.firebaseio.com",
      projectId: "kwitter-social-website-ea3cc",
      storageBucket: "kwitter-social-website-ea3cc.appspot.com",
      messagingSenderId: "499736750283",
      appId: "1:499736750283:web:9fd1e2634e10e71c40934e"
    };
      firebase.initializeApp(firebaseConfig);
      
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{

       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html";

}

function send()
{

            msg = document.getElementById("msg").value;

            firebase.database().ref("/").child(room_name).push({
                  name : user_name,
                  message : msg,
                  like : 0
            });

            document.getElementById("msg").value = "";

}