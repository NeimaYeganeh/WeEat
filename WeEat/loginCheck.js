firebase.auth().onAuthStateChanged(function(user) {
    if (user)
    {
        var db = firebase.firestore();
        document.getElementById("loginModal").style.display = "none";
        var nav_id=document.getElementById("homepage");
        var anchor = nav_id.getElementsByTagName('a');
        var aTag = document.createElement('a');
        
        aTag.innerHTML = "Admin Pannel";
        aTag.setAttribute('href', 'AdminPanel/adminpanel.html')
        anchor[2].innerHTML="Logout";
        anchor[2].removeAttribute("href");
        anchor[2].setAttribute('onclick','logout()');
        nav_id.insertBefore(aTag,anchor[2]);
        console.log("Logged In");
    }
});

// End of Global Map Variable

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

function logout(){
  var nav_id=document.getElementById("homepage");
  var anchor=nav_id.getElementsByTagName('a');
  anchor[2].innerHTML="Login";
  anchor[2].setAttribute('href','#login');
  anchor[2].setAttribute('onclick','document.getElementById("loginModal").style.display="block"');
  anchor[3].remove();
  firebase.auth().signOut();
}

