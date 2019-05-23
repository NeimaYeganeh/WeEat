
function logout()
{
    firebase.auth().signOut(); 
}


function login()
{
    // Get authentication elements
    var userEmail = document.getElementById("user").value;
    console.log(userEmail);
    var pass = document.getElementById("pass").value;
    console.log(pass);
    var btnLogin = document.getElementById("btnLogin");
    
    // Add login event
    btnLogin.addEventListener('click', e=>
        {
            var auth = firebase.auth();

            // Sign in
            var promise = auth.signInWithEmailAndPass(userEmail,pass);


            var user = firebase.auth().currentUser;
            console.log("got here");

            promise.catch(e => console.log(e.message));
        });
/*
firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser)
    {
        console.log("if state 1");
        document.getElementById("user_div").style.display = "block";
        document.getElementById("btnLogin").style.display = "none";
    }
    
    var user = firebase.auth().currentUser; 
   
    if(user != null)
    {
        console.log("if state 2");
        var email_id = user.email();
        document.getElementById("user_para").innerHTML = email_id; 
    }
    else 
    {
        console.log("else state 3");
        document.getElementById("user_div").style.display = "none";
        document.getElementById("btnLogin").style.display = "block";
    }

});
*/
/*
    
    // Add a realtime listener to keep checking authentication
    firebase.auth().onAuthStateChanged(firebaseUser =>
        {
            if(firebaseUser)
            {
                console.log("user authenticated with firebase credentials")
                console.log(firebaseUser);
            }
            else
            {
                console.log("not logged in");
            }
        });
*/
}
