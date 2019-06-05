firebase.auth().onAuthStateChanged(function(user) {
    if (user)
    {
        document.getElementById("user_div").style.display = "block";
        document.getElementById("loginModal").style.display = "none";
        var nav_id=document.getElementById("homepage");
        var anchor=nav_id.getElementsByTagName('a');
        var aTag = document.createElement('a');
        aTag.innerHTML = "Admin Pannel";
        anchor[2].innerHTML="Logout";
        anchor[2].removeAttribute("href");
        anchor[2].setAttribute('onclick','logout()');
        nav_id.insertBefore(aTag,anchor[2]);
        //anchor[2].onclick="logout()";
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
        document.getElementById("map").style.display = "block";
        var nav_id=document.getElementById("homepage");
        var anchor=nav_id.getElementsByTagName('a');
        anchor[2].innerHTML="Login";
        anchor[2].setAttribute('href','#login');
        anchor[2].setAttribute('onclick','document.getElementById("loginModal").style.display="block"');
        anchor[3].remove();
    }

});


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
  firebase.auth().signOut();
}




