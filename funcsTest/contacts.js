//contact.js

// function submitContactForm()->clearFields->displaySuccess
// 2 cases success or error
exports.submitContactForm_t = function(stat){
    if(stat){return clearFields_t();}
    
    return displaySuccess_t();
}

// function displaySuccess()
exports.displaySuccess_t = function(){return 0;}

// function clearFields()
exports.clearFields_t = function(){return 1;}
