firebase.auth().onAuthStateChanged(function(user) {
    displayMapAndPins();
    if (user)
    {
        //document.getElementById("user_div").style.display = "block";
        var db = firebase.firestore();
        document.getElementById("loginModal").style.display = "none";
        var nav_id=document.getElementById("homepage");
        var anchor = nav_id.getElementsByTagName('a');
        var aTag = document.createElement('a');
        var addPin = document.createElement('img');
        addPin.src="addbutton.png";
        addPin.setAttribute('href','#pinInfo');
        addPin.setAttribute('onclick','document.getElementById("pinInfoModal").style.display="block"');
        //adding the addPin button onto map
        document.getElementById("map").appendChild(addPin);
        aTag.innerHTML = "Admin Pannel";
        anchor[2].innerHTML="Logout";
        anchor[2].removeAttribute("href");
        anchor[2].setAttribute('onclick','logout()');
        nav_id.insertBefore(aTag,anchor[2]);
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
        //document.getElementById("map").style.display = "block";
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
  var nav_id=document.getElementById("homepage");
  var button = document.getElementById("map").getElementsByTagName("img");
  var anchor=nav_id.getElementsByTagName('a');
  anchor[2].innerHTML="Login";
  anchor[2].setAttribute('href','#login');
  anchor[2].setAttribute('onclick','document.getElementById("loginModal").style.display="block"');
  anchor[3].remove();
  button[0].remove();
  firebase.auth().signOut();
}

function addNewPin(){
  var db = firebase.firestore();
  var longitude = document.getElementById("long").value;
  var latitude = document.getElementById("lat").value;
  var userTitle = document.getElementById("title").value;
  var userLocation = document.getElementById("location").value;
  var userTime = document.getElementById("time").value;
  var userContact = document.getElementById("contact").value;
  var userSponsor = document.getElementById("sponsor").value;

  db.collection("Pins").doc().set({
    coordinates: [parseFloat(longitude), parseFloat(latitude)],
    title: userTitle,
    location: userLocation,
    time: userTime,
    contact: userContact,
    sponsor: userSponsor
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });

}

function displayMapAndPins(){
  mapboxgl.accessToken = 'pk.eyJ1IjoiamJsYW5jb20iLCJhIjoiY2p1YWs5d2ZhMDNsNTQzcnY3anV2bWY3YiJ9.Ow2vCIFfOpsauOfDPJYKGw';

  var map = new mapboxgl.Map({
          container: 'map', // container id
          style: 'mapbox://styles/mapbox/light-v10', // stylesheet location mapbox://styles/mapbox/streets-v11
          center: [-120.6612399, 35.300745], // starting position [lng, lat]
          zoom: 16 // starting zoom
  });
  var db = firebase.firestore();
  //getting pin info from db
  db.collection("Pins")
      .onSnapshot(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            var el = document.createElement('div');
            el.className = 'featuredmarker';

            // make a marker for each feature and add to the map
            new mapboxgl.Marker(el)
            .setLngLat(doc.data().coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + doc.data().title + '</h3><p>' + doc.data().location + '</p>'
            +'<p>'+doc.data().time+'</p>'
            +'<p>'+doc.data().contact+'</p>'
            +'<p>'+doc.data().sponsor+'</p>'))
            .addTo(map);
          });
      });
}
