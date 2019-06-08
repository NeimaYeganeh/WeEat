firebase.auth().onAuthStateChanged(function(user) {
    if (user)
    {
        document.getElementById("user_div").style.display = "block";
        document.getElementById("btnLogin").style.display = "none";
    }
    
    var user = firebase.auth().currentUser; 
   
    if(user != null)
    {
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = email_id;
        
        //document.getElementById("loginModal").style.display.innerHTML = "Logout";
    }
    else 
    {
        document.getElementById("user_div").style.display = "none";
        document.getElementById("btnLogin").style.display = "block";
    }

});


function logout()
{
    firebase.auth().signOut(); 
}


function login()
{
  var userEmail = document.getElementById("user").value;
  var userPass = document.getElementById("pass").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}


