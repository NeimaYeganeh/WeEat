function submitContactForm(){
    let db = firebase.firestore();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    db.collection("ContactUs").doc(name).set({
        Email: email,
        Message: message,
        Name: name,
    })
    .then(function() {
        console.log("Document successfully written!");
        clearFields();
        displaySuccess();
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

function displaySuccess(){
    $(document).ready(function(){
        $('#sentSuccessfully').fadeIn('slow', function(){
            $('#sentSuccessfully').delay(2000).fadeOut();
        });
    });
}

function clearFields(){
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value = '';
}